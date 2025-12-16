import { NextResponse } from "next/server";
import { refreshSpotifyToken } from "@/lib/spotify-auth";

export async function POST() {
  try {
    const newToken = await refreshSpotifyToken();

    if (newToken) {
      return NextResponse.json({
        success: true,
        message: "Token refreshed successfully",
      });
    }

    return NextResponse.json(
      { error: "Failed to refresh token" },
      { status: 401 }
    );
  } catch (error) {
    console.error("Refresh token error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
