"use client";

import { useState } from "react";
import Image from "next/image";

const DraggableImages = () => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [positions, setPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const MAX_DRAG_DISTANCE = 150; // Maximum pixels the card can be dragged

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    setDraggedIndex(index);
    setOffset({
      x: e.clientX - positions[index].x,
      y: e.clientY - positions[index].y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (draggedIndex !== null) {
      const newPositions = [...positions];
      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;

      // Calculate distance from origin
      const distance = Math.sqrt(newX * newX + newY * newY);

      // Limit the drag distance
      if (distance > MAX_DRAG_DISTANCE) {
        const angle = Math.atan2(newY, newX);
        newX = Math.cos(angle) * MAX_DRAG_DISTANCE;
        newY = Math.sin(angle) * MAX_DRAG_DISTANCE;
      }

      newPositions[draggedIndex] = {
        x: newX,
        y: newY,
      };
      setPositions(newPositions);
    }
  };

  const handleMouseUp = () => {
    if (draggedIndex !== null) {
      // Reset position with animation
      const newPositions = [...positions];
      newPositions[draggedIndex] = { x: 0, y: 0 };
      setPositions(newPositions);
      setDraggedIndex(null);
    }
  };

  const images = [
    {
      src: "/avatars/image1.jpg",
      className: "rotate-[-8deg] scale-[1] lg:scale-[2] lg:hover:scale-[2.2]",
      containerClass: "w-[200px] h-[300px] lg:h-[100px] lg:w-[100px]",
    },
    {
      src: "/avatars/image2.jpg",
      className:
        "rotate-[-10deg] lg:rotate-[-4deg] scale-[1] lg:scale-[1.2] lg:hover:scale-[1.3]",
      containerClass: "w-[200px] h-[300px] lg:h-[200px] lg:w-[150px]",
    },
    {
      src: "/avatars/image4.jpg",
      className:
        "rotate-4 lg:rotate-2 scale-[1] lg:scale-[2] lg:hover:scale-[2.2]",
      containerClass: "w-[200px] h-[300px] lg:h-[100px] lg:w-[100px]",
    },
    {
      src: "/avatars/image3.jpg",
      className:
        "rotate-10 lg:rotate-4 scale-[1] lg:scale-[1.2] lg:hover:scale-[1.3]",
      containerClass: "w-[200px] h-[300px] lg:h-[200px] lg:w-[150px]",
    },
    {
      src: "/avatars/image4.jpg",
      className: "rotate-6 scale-[1] lg:scale-[2] lg:hover:scale-[2.2]",
      containerClass: "w-[200px] h-[300px] lg:h-[100px] lg:w-[100px]",
    },
  ];

  return (
    <div
      className="my-10 relative flex flex-row justify-center h-[350px] lg:h-[400px] items-center gap-14 lg:gap-10 overflow-hidden lg:overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`${img.containerClass} bg-white p-2 rounded-lg relative shrink-0 cursor-grab active:cursor-grabbing transition-all duration-300`}
          style={{
            transform: `translate(${positions[index].x}px, ${positions[index].y}px)`,
            zIndex: draggedIndex === index ? 9999 : 1,
          }}
          onMouseDown={(e) => handleMouseDown(e, index)}
        >
          <Image
            src={img.src}
            alt="images"
            fill
            className={`object-cover rounded-lg ${img.className}`}
            draggable={false}
          />
          <div className="bg-blue-300 lg:bg-transparent h-full w-full rounded-lg "></div>
        </div>
      ))}
    </div>
  );
};

export default DraggableImages;
