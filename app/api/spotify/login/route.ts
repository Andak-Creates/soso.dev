import { NextResponse } from "next/server";

export async function GET() {
  const scope = "user-read-currently-playing user-read-recently-played";

  const query = new URLSearchParams({
    response_type: "code",
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    scope,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
  });

  return NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${query.toString()}`,
  );
}
