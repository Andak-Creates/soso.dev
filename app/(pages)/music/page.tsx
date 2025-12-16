"use client";

import DraggableImages from "@/components/ui/DraggableImages";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSpotifyStore } from "@/store/useSpotifyStore";
import Link from "next/link";
import { youtubeVideos } from "@/utils/data";

const Page = () => {
  const artistTabs = [
    { key: "all", label: "All Music" },
    { key: "album", label: "Albums" },
    { key: "ep", label: "EP" },
  ] as const;

  type ArtistTabs = (typeof artistTabs)[number]["key"];
  const [activeArtistTab, setActiveArtistTab] = useState<ArtistTabs>("all");

  const { releases, fetchReleases, isLoading } = useSpotifyStore();

  useEffect(() => {
    fetchReleases();
  }, [fetchReleases]);

  // ✅ Filter by tab
  const filteredReleases =
    activeArtistTab === "all"
      ? releases
      : releases.filter(
          (release) =>
            release.album_type.toLowerCase() === activeArtistTab.toLowerCase()
        );

  // video
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div>
        <div className="my-[30px]">
          <h1 className="text-[30px] text-center md:w-[60%] md:mx-auto md:text-[50px]">
            Check out my music, videos, upcoming events && live performances.
          </h1>

          <button
            className="px-[50px] py-2.5 
          bg-linear-to-bl from-blue-500 to-blue-950 rounded-full 
          cursor-pointer mx-auto flex my-[50px]"
          >
            Check Out My Music
          </button>
        </div>
      </div>

      {/* Draggable Images Section */}
      <div>
        <DraggableImages />
      </div>

      {/* My Artist Catalogue Section */}
      <div>
        <div className="my-[100px] flex flex-col lg:flex-row justify-between ">
          <div className="px-[30px]">
            <div className="mb-2 text-sm font-medium text-indigo-600">
              Music
            </div>
            <h2 className="text-[20px] font-semibold">My Catalogue</h2>
            <p>A list of all my songs, album && EPs.</p>
          </div>

          {/* My catalogue content */}
          <div className="lg:w-[65%] w-full my-[30px] px-3 md:px-[30px]">
            <div className="flex flex-row justify-between md:px-[30px] gap-10 transition-all duration-300 ease-in-out">
              {artistTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveArtistTab(tab.key)}
                  className={`cursor-pointer px-6 text-left ${
                    activeArtistTab === tab.key ? "border-b" : "border-none"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className=" mt-[30px]">
              {isLoading ? (
                <div className="grid md:grid-cols-3 gap-6 px-[30px]">
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="w-full h-[100px] p-5 flex items-center gap-4 rounded-xl bg-[#ffffff1b] animate-pulse"
                    >
                      {/* Image skeleton */}
                      <div className="relative w-20 h-20 bg-gray-400 rounded overflow-hidden"></div>

                      {/* Text skeleton */}
                      <div className="flex-1 flex flex-col gap-2 justify-center">
                        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-400 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredReleases?.length === 0 ? (
                <p className="text-center text-gray-500 my-[30px]">
                  No data yet, please check back later.
                </p>
              ) : (
                <div className="grid md:grid-cols-3 gap-6">
                  {filteredReleases.map((release) => (
                    <Link
                      key={release.id}
                      href={release.external_urls?.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-full h-[100px] p-5 flex items-center gap-4 rounded-xl bg-[#ffffff1b] hover:bg-[#352e2e56]">
                        <div className="relative w-20 h-20 overflow-hidden rounded">
                          <Image
                            src={release.images?.[0]?.url || ""}
                            alt={release.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{release.name}</h3>
                          <p className="text-sm text-gray-500">
                            {release.release_date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* My Youtube Videos Section */}
      <div>
        <div className="my-[100px] px-[30px] flex flex-col lg:flex-row justify-between">
          <div>
            <div className="mb-2 text-sm font-medium text-indigo-600">
              Content
            </div>
            <h2 className="text-[20px] font-semibold">Videos && appearances</h2>
            <p>
              A combination of music videos, podcasts && educational videos I
              appear in.
            </p>
          </div>
          {/* Videos and my appearances */}
          <div className="grid grid-cols-1 md:grid-cols-2 my-[30px] w-full lg:w-[65%] gap-[30px] lg:gap-0">
            {/* Individual videos */}
            {youtubeVideos.map((video) => (
              <div className="md:px-5" key={video.id}>
                {/* Embedded video (with skeleton fallback) */}
                <div className="relative w-full h-[350px] md:h-[300px] rounded-2xl overflow-hidden">
                  {isVideoLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse rounded-2xl" />
                  )}
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title="YouTube video players"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    onLoad={() => setIsVideoLoading(false)}
                  ></iframe>
                </div>

                {/* Title and description */}
                <div className="mt-2.5 text-left">
                  {isVideoLoading ? (
                    <div className="space-y-2 mt-2">
                      <div className="h-3 bg-gray-300 rounded w-1/3 animate-pulse"></div>
                      <div className="h-4 bg-gray-300 rounded w-2/3 animate-pulse"></div>
                    </div>
                  ) : (
                    <>
                      <p>{video.category}</p>
                      <h3 className="text-[20px]">{video.desc}</h3>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div>
        <div className="mt-[100px] px-3 md:px-[30px] flex flex-col lg:flex-row justify-between">
          <div className="px-3 md:px-[30px]">
            <div className="mb-2 text-sm font-medium text-indigo-600">Live</div>
            <h2 className="text-[20px] font-semibold">Events && Concerts</h2>
            <p>An arrangement of my upcoming events && concerts.</p>
          </div>

          <div className="my-[30px] w-full lg:w-[65%] text-center">
            <small className="fadedText">
              No current Data for this section
            </small>
            <button
              onClick={() => (window.location.href = "/api/auth/login")}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Connect Spotify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
