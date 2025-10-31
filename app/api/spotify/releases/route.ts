import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get token
    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ grant_type: "client_credentials" }),
      }
    );

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Replace with YOUR Spotify artist ID
    const artistId = "0zcp4kYzMdgATEBAOaYic4"; // e.g. "3TVXtAsR1Inumwj472S9r4" for Drake

    // Fetch artist albums (includes singles, albums, EPs)
    const releasesResponse = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single,appears_on,compilation&market=US&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const releases = await releasesResponse.json();
    return NextResponse.json(releases.items);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch Spotify data" },
      { status: 500 }
    );
  }
}
