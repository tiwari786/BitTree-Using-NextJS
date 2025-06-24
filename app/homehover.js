"use client";
import React, { useRef } from "react";
import Image from "next/image";

export default function HoverImage({ src, alt }) {
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20; // range: -10 to 10
    const y = ((e.clientY - top) / height - 0.5) * 20;

    imgRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    imgRef.current.style.transform = `translate(0, 0)`;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full overflow-hidden relative rounded-lg shadow-md"
    >
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-200 ease-out"
      />
    </div>
  );
}
