import { NextResponse } from "next/server";
import { getSpotifyToken, refreshSpotifyToken } from "@/lib/spotify-auth";

export async function GET() {
  try {
    let accessToken = await getSpotifyToken();
    
    if (!accessToken) {
      return NextResponse.json(
        { error: "No access token available" },
        { status: 401 }
      );
    }

    // Try currently playing
    let res = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    // If 401, token expired - refresh and retry
    if (res.status === 401) {
      console.log("Token expired, refreshing...");
      accessToken = (await refreshSpotifyToken()) ?? null;
      
      if (!accessToken) {
        return NextResponse.json(
          { error: "Failed to refresh token" },
          { status: 401 }
        );
      }

      // Retry with new token
      res = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
    }

    // Handle 204 (no content) response when nothing is playing
    if (res.status === 204) {
      // Get recently played instead
      res = await fetch(
        "https://api.spotify.com/v1/me/player/recently-played?limit=1",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const data = await res.json();
      return NextResponse.json({ track: data.items?.[0]?.track || null });
    }

    const data = await res.json();

    // If nothing playing, get recently played
    if (!data?.item) {
      res = await fetch(
        "https://api.spotify.com/v1/me/player/recently-played?limit=1",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const recentData = await res.json();
      return NextResponse.json({ track: recentData.items?.[0]?.track || null });
    }

    return NextResponse.json({ track: data.item });
  } catch (error) {
    console.error("Error fetching current track:", error);
    return NextResponse.json(
      { error: "Failed to fetch track" },
      { status: 500 }
    );
  }
}