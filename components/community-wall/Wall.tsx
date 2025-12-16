"use client";

import { useState, useRef } from "react";
import MessageCard from "./MessageCard";
import AddMessageModal from "./AddMessageModal";
import { Message } from "@/utils/supabase/type";

interface CommunityWallProps {
  initialMessages: Message[];
}

export default function Wall({ initialMessages }: CommunityWallProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [showModal, setShowModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [showRecenter, setShowRecenter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;
    setPosition({ x: newX, y: newY });
    setShowRecenter(Math.abs(newX) > 50 || Math.abs(newY) > 50);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const recenter = () => {
    setPosition({ x: 0, y: 0 });
    setShowRecenter(false);
  };

  const handleMessageAdded = (newMessage: Message) => {
    setMessages([newMessage, ...messages]);
    setShowModal(false);
  };

  // Generate positions for cards
  const getCardPosition = (index: number) => {
    const positions = [
      { x: -186, y: -386 },
      { x: 157, y: 242 },
      { x: -618, y: 120 },
      { x: 268, y: -570 },
      { x: -19, y: 630 },
      { x: -334, y: 534 },
      { x: 581, y: -244 },
      { x: 628, y: -44 },
      { x: -684, y: -459 },
      { x: -373, y: -939 },
      { x: 978, y: 253 },
      { x: 334, y: 630 },
      { x: 905, y: 448 },
      { x: -896, y: 466 },
      { x: 153, y: -998 },
      { x: 716, y: 713 },
      { x: 981, y: -356 },
      { x: -589, y: 945 },
      { x: 923, y: -741 },
      { x: 405, y: 1330 },
      { x: 834, y: -1112 },
      { x: -1109, y: -160 },
      { x: -1378, y: -179 },
      { x: 670, y: 1218 },
      { x: 749, y: -1604 },
      { x: -1737, y: 343 },
      { x: -413, y: 1417 },
      { x: 1401, y: -104 },
      { x: -1537, y: 877 },
      { x: 1615, y: -723 },
    ];

    // Cycle through positions or generate new ones
    if (index < positions.length) {
      return positions[index];
    }

    // Generate pseudo-random positions for additional messages
    const angle = index * 137.5 * (Math.PI / 180);
    const radius = 400 + (index % 5) * 200;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const rotations = [
    0, -2, 3, 0, 0, 2, 3, 0, 0, -1, -3, 4, -5, 0, 3, 0, 7, -2, -9, 6, -2, 4, 0,
    -1, 0, 0,
  ];

  return (
    <>
      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="flex flex-wrap justify-center gap-12 p-6 pb-40">
          {messages.map((message, index) => (
            <MessageCard
              key={message.id}
              message={message}
              rotation={rotations[index % rotations.length]}
            />
          ))}
        </div>
        <div className="pointer-events-none sticky bottom-0 -mt-40 mb-8 flex h-32 items-end justify-center bg-linear-to-b from-transparent to-[#5050fa2e] pb-8">
          <button
            onClick={() => setShowModal(true)}
            className="group pointer-events-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-900 shadow-lg transition-transform hover:scale-110"
            aria-label="Add new message"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-400 group-hover:text-gray-200"
            >
              <path
                d="M12 4V20M4 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div
        className="hidden md:block relative w-full border-t border-b border-gray-200"
        style={{ height: "600px", minHeight: "600px" }}
      >
        <div
          ref={containerRef}
          className="absolute inset-0 overflow-hidden"
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:16px_16px]" />
          <div
            className="absolute inset-0"
            style={{
              transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
              transition: isDragging ? "none" : "transform 0.3s ease-out",
            }}
          >
            {messages.map((message, index) => {
              const pos = getCardPosition(index);
              return (
                <div
                  key={message.id}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                    pointerEvents: "auto",
                  }}
                >
                  <MessageCard
                    message={message}
                    rotation={rotations[index % rotations.length]}
                  />
                </div>
              );
            })}
          </div>
          <button
            onClick={recenter}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
            aria-label="Recenter canvas"
            title="Return to center"
            style={{
              opacity: showRecenter ? 1 : 0,
              pointerEvents: showRecenter ? "auto" : "none",
            }}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="text-gray-400"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11.25 4.75L8.75 7L11.25 9.25"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12.75 19.25L15.25 17L12.75 14.75"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.75 7H13.25C16.5637 7 19.25 9.68629 19.25 13V13.25"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14.25 17H10.75C7.43629 17 4.75 14.3137 4.75 11V10.75"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Add Message Button for Desktop */}
      <div className="hidden md:flex justify-center mt-8">
        <button
          onClick={() => setShowModal(true)}
          className="group inline-flex items-center justify-center overflow-hidden rounded-full shadow-lg transition duration-300 px-6 py-3 text-base bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Leave a note
        </button>
      </div>

      <AddMessageModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onMessageAdded={handleMessageAdded}
      />
    </>
  );
}
