import { cookies } from "next/headers";

export async function getSpotifyToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const accessTokenCookie = cookieStore.get("spotify_access_token");
  console.log("Auth: Access token cookie present?", !!accessTokenCookie);
  let accessToken = accessTokenCookie?.value;

  if (!accessToken) {
    console.log("Auth: No access token, attempting refresh...");
    accessToken = await refreshSpotifyToken();
  }

  return accessToken || null;
}

export async function refreshSpotifyToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("spotify_refresh_token")?.value;

  if (!refreshToken) return undefined;

  const client_id = process.env.SPOTIFY_CLIENT_ID!;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
  const authHeader = `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString("base64")}`;

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: authHeader,
      },
      body,
    });

    const data = await res.json();

    if (!data.access_token) return undefined;

    cookieStore.set("spotify_access_token", data.access_token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600,
      path: "/",
    });

    if (data.refresh_token) {
      cookieStore.set("spotify_refresh_token", data.refresh_token, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
    }

    return data.access_token;
  } catch (err) {
    console.error("Error refreshing token:", err);
    return undefined;
  }
}

export async function getSpotifyClientToken(): Promise<string | null> {
  const client_id = process.env.SPOTIFY_CLIENT_ID!;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
  const authHeader = `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString("base64")}`;

  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: authHeader,
      },
      body: new URLSearchParams({ grant_type: "client_credentials" }),
    });

    const data = await res.json();
    return data.access_token || null;
  } catch (err) {
    console.error("Error fetching client credentials token:", err);
    return null;
  }
}
