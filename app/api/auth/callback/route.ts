import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/?error=no_code", url.origin));
  }

  const client_id = process.env.SPOTIFY_CLIENT_ID!;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI!;

  const authHeader = `Basic ${Buffer.from(
    `${client_id}:${client_secret}`
  ).toString("base64")}`;

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri,
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
      const cookieStore = await cookies();

      cookieStore.set("spotify_access_token", data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600,
        path: "/",
      });

      if (data.refresh_token) {
        cookieStore.set("spotify_refresh_token", data.refresh_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 30,
          path: "/",
        });
      }

      return NextResponse.redirect(new URL("/?spotify=connected", url.origin));
    }

    return NextResponse.redirect(new URL("/?error=no_token", url.origin));
  } catch (error) {
    console.error("Spotify callback error:", error);
    return NextResponse.redirect(
      new URL("/?error=callback_failed", url.origin)
    );
  }
}
