import { create } from "zustand";

interface SpotifyTrack {
  name: string;
  artists: { name: string; external_urls: { spotify: string } }[];
  album: {
    name: string;
    images: { url: string }[];
    external_urls: { spotify: string };
  };
  external_urls: { spotify: string };
}

interface SpotifyRelease {
  id: string;
  name: string;
  release_date: string;
  images: { url: string }[];
  total_tracks: number;
  album_type: string;
  external_urls: { spotify: string };
}

interface SpotifyStore {
  // Releases
  releases: SpotifyRelease[];
  fetchReleases: () => Promise<void>;
  isLoading: boolean;

  // Current track
  currentTrack: SpotifyTrack | null;
  fetchCurrentTrack: () => Promise<void>;
}

export const useSpotifyStore = create<SpotifyStore>((set) => ({
  // Releases
  releases: [],
  isLoading: false,
  fetchReleases: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch("/api/spotify/releases");
      const data = await res.json();
      set({ releases: data, isLoading: false });
    } catch (err) {
      console.error("Error fetching Spotify releases:", err);
      set({ isLoading: false });
    }
  },

  //   Currently playing or recently played
  // Current track
  currentTrack: null,
  fetchCurrentTrack: async () => {
    try {
      const token = process.env.NEXT_PUBLIC_SPOTIFY_ACCESS_TOKEN;
      if (!token) throw new Error("Spotify access token missing");

      // Try to get currently playing track
      let res = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      let data = await res.json();

      // If no active playback, get the most recently played track
      if (!data?.item) {
        res = await fetch(
          "https://api.spotify.com/v1/me/player/recently-played?limit=1",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        data = await res.json();
        set({ currentTrack: data.items?.[0]?.track || null });
      } else {
        set({ currentTrack: data.item });
      }
    } catch (error) {
      console.error("Error fetching current track:", error);
    }
  },
}));
