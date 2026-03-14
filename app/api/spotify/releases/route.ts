import { NextResponse } from "next/server";
import { getSpotifyToken, getSpotifyClientToken } from "@/lib/spotify-auth";

export async function GET() {
  try {
    let accessToken = await getSpotifyToken();
    console.log("Releases API: User token present?", !!accessToken);

    if (!accessToken) {
      console.log("Releases API: Attempting Client Credentials fallback...");
      accessToken = await getSpotifyClientToken();
    }

    if (!accessToken) {
      console.error("Releases API: No access token found.");
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const artistId = process.env.SPOTIFY_ARTIST_ID!;
    console.log("Releases API: Fetching for artistId:", artistId);
    const res = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?limit=50&include_groups=album,single,ep`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    const data = await res.json();
    console.log("Releases API: Spotify response status:", res.status);
    if (data.error) console.error("Releases API: Spotify error:", data.error);
    
    return NextResponse.json(data.items || []);
  } catch (error) {
    console.error("Error fetching releases:", error);
    return NextResponse.json(
      { error: "Failed to fetch releases" },
      { status: 500 },
    );
  }
}
