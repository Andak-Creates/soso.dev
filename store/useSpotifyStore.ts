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
  releases: SpotifyRelease[];
  fetchReleases: () => Promise<void>;
  isLoading: boolean;
  currentTrack: SpotifyTrack | null;
  fetchCurrentTrack: () => Promise<void>;
  isConnected: boolean;
}

export const useSpotifyStore = create<SpotifyStore>((set) => ({
  releases: [],
  isLoading: false,
  currentTrack: null,
  isConnected: false,

  fetchReleases: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch("/api/spotify/releases");
      const data = await res.json();
      set({ releases: Array.isArray(data) ? data : [], isLoading: false });
    } catch (err) {
      console.error("Error fetching Spotify releases:", err);
      set({ isLoading: false });
    }
  },

  // ✅ Now calls your server-side API route
  fetchCurrentTrack: async () => {
    try {
      const res = await fetch("/api/spotify/current-track");

      if (res.status === 401) {
        set({ isConnected: false, currentTrack: null });
        return;
      }

      const data = await res.json();
      set({
        currentTrack: data.track || null,
        isConnected: true,
      });
    } catch (error) {
      console.error("Error fetching current track:", error);
      set({ currentTrack: null, isConnected: false });
    }
  },
}));
