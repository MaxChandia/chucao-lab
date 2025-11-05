import React from "react";
import Image from "next/image";
import type { PortableTextComponents as PTComponentsType } from "@portabletext/react";

/* simple extractor de ID de YouTube */
function getYouTubeID(url?: string) {
  if (!url) return null;
  // soporta URLs como youtu.be, youtube.com/watch?v=..., /embed/...
  const re =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
  const match = url.match(re);
  return match ? match[1] : null;
}

export const PortableTextComponents: PTComponentsType = {
  types: {
    image: ({ value }) => {
      const src = value?.asset?.url || "";
      const alt = value?.alt || "";
      if (!src) return null;
      return (
        <div className="my-6 flex flex-col items-center ">
          <Image
            src={src}
            alt={alt}
            width={500}
            height={200}
            className="rounded object-cover"
          />
          {value?.caption && (
            <p className="text-sm text-gray-500 mt-2">{value.caption}</p>
          )}
        </div>
      );
    },
    youtube: ({ value }) => {
      const id = getYouTubeID(value?.url);
      if (!id) return null;
      const src = `https://www.youtube.com/embed/${id}`;
      return (
        <div className="my-6 h-[450px] w-full">
          <iframe
            src={src}
            title="YouTube video"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || value?.href; // ajusta según tu esquema de links
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
          {children}
        </a>
      );
    },
  },
};

export default PortableTextComponents;