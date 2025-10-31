"use client";

import { useEffect } from "react";
import CircularWavesSVG from "../svgs/CircularWavesSVG";
import VinylRecordSVG from "../svgs/VinylRecordSVG";
import { useSpotifyStore } from "@/store/useSpotifyStore";

const RecentFavoriteCard = () => {
  const { currentTrack, fetchCurrentTrack } = useSpotifyStore();

  useEffect(() => {
    fetchCurrentTrack();
  }, [fetchCurrentTrack]);

  const track = currentTrack;

  return (
    <div className="lg:col-span-3 lg:row-span-6">
      <div className="group relative flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white overflow-hidden h-[300px] row-span-8 col-span-7">
        <div className="user-select-none pointer-events-none absolute inset-0 z-30 bg-linear-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />

        <div className="flex flex-col">
          <div className="z-10 h-full">
            <div className="flex h-full flex-col justify-between">
              <h2 className="mb-2 text-base font-medium group-hover:text-black">
                Recent Favorite
              </h2>

              {track ? (
                <p className="max-h-[150px] overflow-hidden text-base text-text-secondary">
                  <span className="line-clamp-4 text-ellipsis ">
                    <span className="fadedText">I'm listening to</span>{" "}
                    <a
                      className="font-semibold group-hover:text-black"
                      href={track.external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {track.name}
                    </a>{" "}
                    <span className="fadedText">by</span>{" "}
                    <a
                      className="font-semibold group-hover:text-black"
                      href={track.artists?.[0]?.external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {track.artists?.[0]?.name}
                    </a>{" "}
                    <span className="fadedText">from the album</span>{" "}
                    <a
                      className="font-semibold group-hover:text-black"
                      href={track.album.external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {track.album.name}
                    </a>
                  </span>
                </p>
              ) : (
                <p className="text-sm text-gray-400">
                  Loading recent favorite...
                </p>
              )}
            </div>

            {/* Vinyl Record SVG */}
            <div
              className="user-select-none pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 
            transition-all
             duration-300 group-hover:bottom-3"
            >
              <VinylRecordSVG
                albumCover={
                  track?.album?.images?.[0]?.url ||
                  "https://placehold.co/200x200?text=Album"
                }
              />
            </div>

            {/* Album Cover - appears on hover */}
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 transition-all duration-300">
              <div
                className="h-[210px] w-[210px] rounded-sm bg-cover bg-center shadow-md"
                style={{
                  backgroundImage: `url("${
                    track?.album?.images?.[0]?.url ||
                    "https://placehold.co/200x200?text=Album"
                  }")`,
                }}
              />
            </div>
          </div>

          {/* Circular waves */}
          <span className="absolute -bottom-32 left-1/2 -translate-x-1/2">
            <CircularWavesSVG />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentFavoriteCard;
