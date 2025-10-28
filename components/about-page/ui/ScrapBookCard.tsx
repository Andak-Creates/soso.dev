"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface Sticker {
  src: string;
  width: number;
  rotation: number;
  x: number;
  y: number;
  description: string;
}

const ScrapBookCard = () => {
  const [stickers, setStickers] = useState<Sticker[]>([
    {
      src: "/avatars/image1.jpg",
      width: 80,
      rotation: -3.85,
      x: 0,
      y: 0,
      description: "ThatConf 2024 - Wisconsin Dells",
    },
    {
      src: "/avatars/image1.jpg",
      width: 96,
      rotation: -2.73,
      x: 0,
      y: 0,
      description: "C3 Conference - Web Development Summit",
    },
    {
      src: "/avatars/image1.jpg",
      width: 130,
      rotation: -9.7,
      x: 0,
      y: 0,
      description: "LOTR Fan Convention - Epic Adventure",
    },
    {
      src: "/avatars/image1.jpg",
      width: 160,
      rotation: -6.83,
      x: 0,
      y: 0,
      description: "CYC Meetup - Community Builders",
    },
  ]);

  const [dragging, setDragging] = useState<number | null>(null);
  const [hovering, setHovering] = useState<number | null>(null);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const stickerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setDragging(index);
    setHovering(null); // Hide tooltip when dragging

    // Get the sticker's position on screen
    const rect = stickerRefs.current[index]?.getBoundingClientRect();
    if (rect) {
      dragStartPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setDragPosition({
        x: e.clientX - dragStartPos.current.x,
        y: e.clientY - dragStartPos.current.y,
      });
    }
  };

  const handleMouseEnter = (index: number) => {
    if (dragging === null) {
      setHovering(index);
      // Calculate tooltip position
      const rect = stickerRefs.current[index]?.getBoundingClientRect();
      if (rect) {
        setTooltipPosition({
          x: rect.left + rect.width / 2,
          y: rect.bottom + 10, // 10px below the sticker
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setHovering(null);
  };

  // Add global mouse move and mouse up listeners
  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (dragging === null) return;

      setDragPosition({
        x: e.clientX - dragStartPos.current.x,
        y: e.clientY - dragStartPos.current.y,
      });
    };

    const handleMouseUp = () => {
      setDragging(null);
    };

    if (dragging !== null) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  // Update tooltip position on hover
  useEffect(() => {
    if (hovering !== null && dragging === null) {
      const updateTooltipPosition = () => {
        const rect = stickerRefs.current[hovering]?.getBoundingClientRect();
        if (rect) {
          setTooltipPosition({
            x: rect.left + rect.width / 2,
            y: rect.bottom + 10,
          });
        }
      };
      updateTooltipPosition();
    }
  }, [hovering, dragging]);

  return (
    <>
      <div className="hidden lg:col-span-7 lg:row-span-5 lg:block overflow-hidden">
        <div
          className="group relative flex flex-col rounded-2xl border border-border-primary
         bg-bg-primary p-6 hover:bg-white h-[220px] row-span-4 col-span-9"
        >
          <h2 className="mb-2 font-medium group-hover:text-black">Scrapbook</h2>

          {/* Dotted background */}
          <div
            className="absolute top-0 h-[220px] w-full overflow-hidden 
          bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] bg-size[14px_14px] 
          mask-[radial-gradient(ellipse_80%_70%_at_50%_50%,black_40%,transparent_100%)]"
          />

          <div className="bg-secondary w-full rounded-3xl p-6 relative">
            <div className="-mt-8 grid h-full w-full grid-cols-4 items-center gap-4">
              {stickers.map((sticker, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    stickerRefs.current[idx] = el;
                  }}
                  className={`relative ${
                    dragging === idx
                      ? "cursor-grabbing opacity-30"
                      : "cursor-grab"
                  } transition-all duration-300 hover:drop-shadow-2xl`}
                  onMouseDown={(e) => handleMouseDown(e, idx)}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`shrink relative h-fit min-w-24 drop-shadow-lg select-none transition-transform duration-300 ${
                      hovering === idx ? "scale-110" : "scale-100"
                    }`}
                    style={{
                      transform: `rotate(${sticker.rotation}deg) ${
                        hovering === idx ? "scale(1.1)" : ""
                      }`,
                    }}
                  >
                    <Image
                      src={sticker.src}
                      alt="Sticker"
                      width={sticker.width}
                      height={sticker.width}
                      className="xs:max-w-none max-w-[100px] pointer-events-none"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Portal for dragging sticker - renders outside overflow container */}
      {dragging !== null &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed pointer-events-none z-9999"
            style={{
              left: dragPosition.x,
              top: dragPosition.y,
              transform: `rotate(${stickers[dragging].rotation}deg)`,
            }}
          >
            <div className="shrink relative h-fit min-w-24 drop-shadow-2xl select-none">
              <Image
                src={stickers[dragging].src}
                alt="Dragging Sticker"
                width={stickers[dragging].width}
                height={stickers[dragging].width}
                className="xs:max-w-none max-w-[100px]"
                draggable={false}
              />
            </div>
          </div>,
          document.body
        )}

      {/* Tooltip portal - renders outside overflow container */}
      {hovering !== null &&
        dragging === null &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed z-9998 pointer-events-none animate-in fade-in duration-200"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              transform: "translateX(-50%)",
            }}
          >
            <div className="bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg text-sm whitespace-wrap h-[100px] w-[150px]">
              {stickers[hovering].description}
              {/* Small arrow pointing up */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ScrapBookCard;
