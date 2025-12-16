import { NextResponse } from "next/server";
import { getSpotifyToken, refreshSpotifyToken } from "@/lib/spotify-auth";

export async function GET() {
  try {
    let accessToken = await getSpotifyToken();
    
    if (!accessToken) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    // Replace with your artist ID
    const artistId = process.env.SPOTIFY_ARTIST_ID || "YOUR_ARTIST_ID";
    
    let res = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?limit=50&include_groups=album,single,ep`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    // If 401, refresh token and retry
    if (res.status === 401) {
      accessToken = (await refreshSpotifyToken()) ?? null;
      
      if (!accessToken) {
        return NextResponse.json(
          { error: "Failed to refresh token" },
          { status: 401 }
        );
      }

      // Retry with new token
      res = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}/albums?limit=50&include_groups=album,single,ep`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
    }

    const data = await res.json();
    return NextResponse.json(data.items || []);
  } catch (error) {
    console.error("Error fetching releases:", error);
    return NextResponse.json(
      { error: "Failed to fetch releases" },
      { status: 500 }
    );
  }
}