import { cookies } from "next/headers";

export async function refreshSpotifyToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("spotify_refresh_token")?.value;

  if (!refreshToken) {
    return undefined;
  }

  const client_id = process.env.SPOTIFY_CLIENT_ID!;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;

  const authHeader = `Basic ${Buffer.from(
    `${client_id}:${client_secret}`
  ).toString("base64")}`;

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

    if (data.access_token) {
      // Update access token cookie
      cookieStore.set("spotify_access_token", data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600, // 1 hour
        path: "/",
      });

      // If a new refresh token is provided, update it too
      if (data.refresh_token) {
        cookieStore.set("spotify_refresh_token", data.refresh_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: "/",
        });
      }

      return data.access_token;
    }

    return undefined;
  } catch (error) {
    console.error("Error refreshing Spotify token:", error);
    return undefined;
  }
}

export async function getSpotifyToken(): Promise<string | null> {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("spotify_access_token")?.value;

  if (!accessToken) {
    // No access token, try to refresh
    accessToken = await refreshSpotifyToken();
  }

  return accessToken || null;
}
