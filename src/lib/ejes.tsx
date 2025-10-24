interface ejes {
    id: number;
    titulo: string;
    image_url: StaticImageData;
    url: string;
}

import { StaticImageData } from 'next/image';
import eje1Img from '@/assets/images-ejes/eje1.webp';
import eje2Img from '@/assets/images-ejes/eje2.webp';
import eje3Img from '@/assets/images-ejes/eje3.webp';

export const ejesChucao: ejes [] = [
    {
        id: 1,
        titulo: "PAISAJE URBANO SONORO",
        image_url: eje1Img,
        url: "/ejes/paisaje-urbano-sonoro"
    },
      {
        id: 2,
        titulo: "ESTUDIOS DE BIODIVERSIDAD Y ESTADO DE ECOSISTEMAS",
        image_url: eje2Img,
        url: "/ejes/estudios-de-biodiversidad-y-estado-de-ecosistemas"
    },
      {
        id: 3,
        titulo: "CREACIÓN ARTÍSTICA",
        image_url: eje3Img,
        url: "/ejes/creacion-artistica"
    },


]