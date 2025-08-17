"use client";
import React, { useState } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Gallery() {
  const [imageDimensions, setImageDimensions] = useState<{
    [key: string]: { width: number; height: number };
  }>({});

  const handleImageLoad = (
    imageSrc: string,
    event: React.SyntheticEvent<HTMLImageElement>,
  ) => {
    const img = event.currentTarget;
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    // Define max dimensions based on screen size
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const maxWidth = isMobile ? 200 : 320; // Smaller on mobile
    const maxHeight = isMobile ? 250 : 400; // Smaller on mobile

    let width, height;

    if (aspectRatio > 1) {
      // Landscape: fit to width
      width = maxWidth;
      height = maxWidth / aspectRatio;
    } else {
      // Portrait: fit to height
      height = maxHeight;
      width = maxHeight * aspectRatio;
    }

    setImageDimensions((prev) => ({
      ...prev,
      [imageSrc]: { width, height },
    }));
  };

  const items = [
    {
      title: "Barrow",
      image: "/gallery/Barrow.jpg",
      className:
        "absolute top-16 left-[10%] md:top-61 md:left-[20%] rotate-[-5deg]",
    },
    {
      title: "Bitz",
      image: "/gallery/Bitz.jpg",
      className:
        "absolute top-32 left-[5%] md:top-54 md:left-[25%] rotate-[-7deg]",
    },
    {
      title: "Bitz 2",
      image: "/gallery/Bitz2.jpg",
      className:
        "absolute top-48 left-[15%] md:top-70 md:left-[40%] rotate-[8deg]",
    },
    {
      title: "Cashin Brussels Kennel",
      image: "/gallery/Cashin Brussels Kennel.jpg",
      className:
        "absolute top-64 left-[25%] md:top-47 md:left-[55%] rotate-[10deg]",
    },
    {
      title: "Cashin Schnauzer",
      image: "/gallery/Cashin Schnauzer.jpg",
      className:
        "absolute top-80 right-[15%] md:top-65 md:right-[35%] rotate-[2deg]",
    },
    {
      title: "Fleischaker",
      image: "/gallery/Fleischaker.jpg",
      className:
        "absolute top-96 left-[10%] md:top-55 md:left-[45%] rotate-[-7deg]",
    },
    {
      title: "Frischmann Book",
      image: "/gallery/Frischmann Book.jpg",
      className:
        "absolute top-112 left-[20%] md:top-50 md:left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <AuroraBackground>
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip [perspective:1500px] md:[perspective:3000px]">
        <h2 className="text-clamp-md text-main absolute top-[30px] left-1/2 -translate-x-1/2 text-center text-3xl font-semibold lg:top-[60px]">
          Ad showcase
        </h2>
        <div className="absolute top-1/2 mx-auto max-w-xs -translate-y-3/4 px-4 md:max-w-sm">
          <h2 className="text-main pb-4 text-center text-4xl">
            Advertise With Showsight Magazine
          </h2>
          <h3 className="text-mainAlt text-center text-xl">
            A Leading Purebred Dog Monthly Print Publication And Media Channel
          </h3>
        </div>
        {items.map((item, index) => {
          const dimensions = imageDimensions[item.image];
          const cardStyle = dimensions
            ? {
                width: dimensions.width + 32,
                minHeight: dimensions.height + 60,
              } // Reduced padding for mobile
            : {};

          return (
            <DraggableCardBody
              key={index}
              className={item.className}
              style={cardStyle}
            >
              <Image
                width={900}
                height={450}
                src={item.image}
                alt={item.title}
                onLoad={(e) => handleImageLoad(item.image, e)}
                style={
                  dimensions
                    ? { width: dimensions.width, height: dimensions.height }
                    : { width: 200, height: 200 }
                }
                className="pointer-events-none relative z-10 rounded object-cover"
              />
              <h3 className="mt-2 text-center text-sm font-bold text-neutral-700 md:text-xl dark:text-neutral-300">
                {item.title}
              </h3>
            </DraggableCardBody>
          );
        })}
      </DraggableCardContainer>
    </AuroraBackground>
  );
}
