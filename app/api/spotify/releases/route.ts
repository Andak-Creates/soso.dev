import { NextResponse } from "next/server";
import { getSpotifyToken } from "@/lib/spotify-auth";

export async function GET() {
  try {
    const accessToken = await getSpotifyToken();

    if (!accessToken) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const artistId = process.env.SPOTIFY_ARTIST_ID!;
    const res = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?limit=50&include_groups=album,single,ep`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    const data = await res.json();
    return NextResponse.json(data.items || []);
  } catch (error) {
    console.error("Error fetching releases:", error);
    return NextResponse.json(
      { error: "Failed to fetch releases" },
      { status: 500 },
    );
  }
}
