"use client";

import DraggableImages from "@/components/ui/DraggableImages";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSpotifyStore } from "@/store/useSpotifyStore";
import Link from "next/link";

const page = () => {
  const artistTabs = [
    { key: "all", label: "All Music" },
    { key: "album", label: "Albums" }, // 👈 lowercase to match Spotify data
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

  return (
    <div>
      <div className="my-[30px]">
        <h1 className="text-[35px] text-center md:w-[40%] md:mx-auto md:text-[50px] px-20">
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

      <DraggableImages />

      {/* my artist catalogue */}
      <div className="mt-[150px]">
        <h2 className="text-[30px] text-center md:w-[40%] md:mx-auto md:text-[40px] px-20">
          My Catalogue
        </h2>

        {/* My catalogue content */}
        <div className="mt-[50px]">
          <div className="flex flex-row justify-between px-[30px] gap-10 transition-all duration-300 ease-in-out">
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
          <div className="px-[30px] mt-[30px]">
            {isLoading ? (
              <div className="grid md:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, idx) => (
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
              <p className="text-center text-gray-500">
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

      {/* My Youtube videos */}
      <div className="my-[100px] px-[30px] border-t">
        <h2 className="text-[20px] font-semibold  ">Videos && appearances</h2>
        <p>A combination of music videos, podcasts && educational videos.</p>

        {/* Videos  and my appearances */}
        <div className="my-[30px]">
          {/* Individual videos */}
          <div>
            {/* thumbnail and duration */}
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden ">
              <Image
                src={"/avatars/image2.jpg"}
                alt="video"
                fill
                className="object-cover"
              />
              <small className="absolute right-5 bottom-5 p-1 bg-[#0000005b]">
                0:35:08
              </small>
            </div>

            {/* Title and description */}
            <div>
              <h3>The title of the videos</h3>
              <p>the description???</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
