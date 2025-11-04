import Image from "next/image";
import { Children } from "react";



/* Componente para ajustar estilos de bloque de texto en Portable Text */

export const PortableTextComponents = {

    block: {
        normal: ({children}: any) => <p className="mb-4">{children}</p>,
        h1: ({children}: any) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
        h2: ({children}: any) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
        h3: ({children}: any) => <h3 className="text-2xl font-bold my-4">{children}</h3>,

    },

    types: {
        image: ({value}: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      
      return (
      <div className="my-4">
        <Image
          src={
            value.asset.url ||
            `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${value.asset._ref
              .replace('image-', '')
              .replace('-webp', '.webp')
              .replace('-jpg', '.jpg')
              .replace('-png', '.png')}`
          }
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

    
        },
    gallery: ({ value }: any) => (
  <div className="my-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {value.images?.map((img: any, i: number) => (
        <Image
          key={i}
          src={
            img.asset.url ||
            `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${img.asset._ref
              .replace('image-', '')
              .replace('-webp', '.webp')
              .replace('-jpg', '.jpg')
              .replace('-png', '.png')}`
          }
          alt={img.alt || 'Imagen de galería'}
          width={400}
          height={300}
          className="rounded-lg object-cover w-full h-auto"
        />
      ))}
    </div>
    {value.caption && (
      <p className="text-sm text-gray-600 text-center mt-2 italic">
        {value.caption}
      </p>
    )}
  </div>
),

    
    list: {
    bullet: ({children}: any) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
  },
  
    listItem: {
        bullet: ({children}: any) => <li className="mb-1">{children}</li>,
        number: ({children}: any) => <li className="mb-1">{children}</li>,
    },

};