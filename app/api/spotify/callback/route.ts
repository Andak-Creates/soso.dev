import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code)
    return NextResponse.json({ error: "Missing code" }, { status: 400 });

  const client_id = process.env.SPOTIFY_CLIENT_ID!;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI!;

  // Spotify expects client_id:client_secret in Base64 for Basic Auth
  const authHeader = `Basic ${Buffer.from(
    `${client_id}:${client_secret}`
  ).toString("base64")}`;

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: authHeader,
    },
    body,
  });

  const data = await res.json();

  return NextResponse.json(data);
}
