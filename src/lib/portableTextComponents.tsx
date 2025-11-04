import Image from "next/image";
import { PortableTextComponents as PortableTextComponentsType } from '@portabletext/react';

interface ImageValue {
  asset: {
    _ref: string;
    url?: string;
  };
  alt?: string;
  caption?: string;
}

interface GalleryValue {
  images?: ImageValue[];
  caption?: string;
}

export const PortableTextComponents: PortableTextComponentsType = {
  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
  },

  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?.url) {
        return null;
      }
      
      return (
        <div className="my-4">
          <Image
            src={value.asset.url}
            alt={value.alt || 'Imagen'}
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
          {value.caption && (
            <p className="text-sm text-gray-600 text-center mt-2 italic">
              {value.caption}
            </p>
          )}
        </div>
      );
    },

    gallery: ({ value }: { value: GalleryValue }) => (
      <div className="my-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {value.images?.map((img, i) => {
            if (!img.asset?.url) return null;
            
            return (
              <Image
                key={i}
                src={img.asset.url}
                alt={img.alt || 'Imagen de galería'}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-auto"
              />
            );
          })}
        </div>
        {value.caption && (
          <p className="text-sm text-gray-600 text-center mt-2 italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },

  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
  },
  
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
};