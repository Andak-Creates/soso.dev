import { NextResponse } from "next/server";

export async function GET() {
  const scope = "user-read-currently-playing user-read-recently-played";
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
  const client_id = process.env.SPOTIFY_CLIENT_ID;

  const query = new URLSearchParams({
    response_type: "code",
    client_id: client_id!,
    scope,
    redirect_uri: redirect_uri!,
  });

  return NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${query.toString()}`
  );
}
