import { StaticImageData } from "next/image";
import carrusel1 from '@/assets/carrusel1.webp';
import carrusel2 from '@/assets/carrusel2.webp';
import carrusel3 from '@/assets/carrusel3.webp';
import workshop1 from '@/assets/workshop1.webp';
import workshop2 from '@/assets/workshop2.webp';
import workshop3 from '@/assets/workshop3.webp';


interface News {
  id: number;
  newsImage: StaticImageData;
  title: string;
  slug?: string;
  bajada: string;
  content: string;
  image: StaticImageData; 
  isFondecytProject?: boolean; 
  youtubeEmbed?: string; 
  gallery?: StaticImageData[]; 
}


export const noticias: News[] = [
  {
    id: 1,
    newsImage: carrusel1,
    title: "Proyecto: “Diseño biofílico del paisaje sonoro en áreas verdes urbanas mediante tecnologías inmersivas”",
    slug: "diseno-biofilico-del-paisaje-sonoro-en-areas-verdes-urbanas",
    bajada: "Escuchar sonidos de la naturaleza puede tener un impacto positivo en nuestra salud y bienestar. Las áreas verdes en la ciudad pueden recrear paisajes sonoros que conectan con el entorno natural, brindándonos beneficios restauradores. Fondecyt iniciación 2024-2027.",
    content: "", 
    image: carrusel1,
    isFondecytProject: true,
  },
  {
    id: 2,
    newsImage: carrusel2,
    title: "Caminata sonora en el campus Juan Gómez Millas",
    slug: "caminata-sonora-en-el-campus-juan-gomez-millas",
    bajada: "En este video te invitamos a revivir una experiencia única realizada en el marco del Mes de la Sustentabilidad en el Campus Juan Gómez Millas de la Universidad de Chile. Durante esta actividad, los participantes realizaron un recorrido a pie, deteniéndose en varias \"estaciones sonoras\" para escuchar y reflexionar sobre los sonidos que nos rodean.",
    content: `La Caminata Sonora es una práctica educativa que nos invita a explorar el paisaje sonoro, entendido como el conjunto de sonidos que percibimos en nuestro entorno. A través de esta experiencia, se busca aumentar la conciencia sobre la contaminación acústica y cómo los sonidos naturales pueden tener efectos beneficiosos en nuestra salud mental y emocional.

Los efectos restauradores de un paisaje sonoro saludable incluyen la reducción del estrés, el aumento de la concentración, la mejora en la calidad del descanso y la regulación emocional, entre otros. Este tipo de actividad nos recuerda la importancia de gestionar y proteger los paisajes sonoros en los espacios públicos para mejorar la calidad de vida de la comunidad.

Acompáñanos en este viaje sonoro y descubre cómo los sonidos del entorno pueden influir en nuestro bienestar. ¡No te lo pierdas!`,
    image: carrusel2,
    youtubeEmbed: "https://youtu.be/0uJ8i-Le_NE",
  },
  {
    id: 3,
    newsImage: carrusel3,
    title: "ChucaoLab desarrolló workshop sobre paisaje sonoro y diseño de áreas verdes urbanas",
    slug: "chucaolab-desarrollo-workshop-sobre-paisaje-sonoro-y-diseno-de-areas-verdes-urbanas",
    bajada: "Paisaje Sonoro y Sustentabilidad en Áreas Verdes Urbanas es el nombre del workshop y concurso de ideas que está desarrollando ChucaoLab, laboratorio interdisciplinar del Departamento de Sonido de la Facultad de Artes. La actividad, que se está realizando durante junio y julio, busca fomentar el diálogo interdisciplinario sobre el diseño de áreas verdes urbanas.",
    content: `El workshop Paisaje Sonoro y Sustentabilidad en Áreas Verdes Urbanas está a cargo de ChucaoLab, laboratorio de investigación interdisciplinaria sobre Paisaje Sonoro del Departamento de Sonido de la Facultad de Artes de la Universidad de Chile.

La primera semana de junio fue el lanzamiento del workshop Paisaje Sonoro y Sustentabilidad en Áreas Verdes Urbanas, a cargo de ChucaoLab, laboratorio de investigación interdisciplinaria sobre Paisaje Sonoro del Departamento de Sonido de la Facultad de Artes de la Universidad de Chile. 

Durante cinco sesiones las personas participantes aprendieron de nueve profesionales para abordar la problemática de cómo incorporar, desde una perspectiva interdisciplinar, al sonido como un elemento clave para la planificación y diseño de las ciudades y áreas verdes urbanas, teniendo en consideración las distintas dimensiones ambientales y sociales. 

Otro aspecto que se destacó durante las sesiones es que el paisaje sonoro tiene la potencialidad de generar efectos restauradores de la salud humana. Si los sonidos que rodean a las personas son naturales, pueden ayudar a disminuir el estrés, a procesar emociones, incrementar las capacidades cognitivas, e incluso mejorar el ánimo. 

<b>Teoría y práctica</b>

Las actividades teóricas se realizaron durante el mes de junio en OpenBeauchef, espacio de la Facultad de Ciencias Físicas y Matemáticas de la Universidad de Chile que promueve la innovación en investigación.

La creación de esta metodología de trabajo va de la mano con el proyecto Fondecyt de investigación "Diseño biofílico del paisaje sonoro en áreas verdes urbanas mediante tecnologías inmersivas", cuyo investigador responsable es el Dr. Pablo Kogan, académico del Departamento de Sonido. 

“En la formulación del proyecto nos pareció que podría ser muy fructífero partir desde una revisión de conceptos teóricos y experiencia de profesionales que trabajan en distintas disciplinas conectadas al diseño de áreas verdes urbanas y paisaje sonoro”, comentó el prof. Kogan. 

Las actividades teóricas se realizaron durante el mes de junio en OpenBeauchef, espacio de la Facultad de Ciencias Físicas y Matemáticas de la Universidad de Chile que promueve la innovación en investigación.

Durante el mes de julio se dio inicio a la segunda parte de esta actividad: la conformación de equipos interdisciplinares integrados por las personas participantes del workshop, quienes están trabajando para crear propuestas de diseño de un nuevo parque urbano en el predio del Parque O’Higgins en el que actualmente se encuentra el parque de diversiones Fantasilandia, el que se trasladará a otra comuna. Durante la actual fase práctica están participando cinco equipos conformados por profesionales, estudiantes de postgrado y de pregrado provenientes de distintas disciplinas, comprendiendo las artes, arquitectura del paisaje, urbanismo, diseño, ingeniería en sonido, ciencias ambientales y ciencias sociales. 

Durante el mes de julio se dio inicio a la segunda parte de esta actividad: la conformación de equipos interdisciplinares integrados por las personas participantes del workshop, quienes están trabajando para crear propuestas de diseño de un nuevo parque urbano en el predio del Parque O’Higgins.
Las propuestas de parque generadas por los equipos serán transformadas en sonido por parte del equipo técnico de ChucaoLab y concursarán entre sí. La propuesta ganadora será optimizada e implementada en realidad virtual y audio inmersivo.

El profesor Guillermo Eisner, director del Departamento de Sonido, destaca la importancia de esta colaboración entre facultades:

“Es muy valioso que las actividades que nacen desde unidades alojadas dentro de la Facultad de Artes, como los es ChucaoLab, puedan expandir sus ámbitos y espacios de acción, de manera de vincularse con otras unidades académicas y otras/os interlocutoras/es, fomentando y profundizando el diálogo interdisciplinar, y difundiendo las propuestas de investigación y creación con una fuerte visión desde el arte”.

<b>En búsqueda de un diálogo interdisciplinario</b>

Uno de los focos de este workshop es promover el diálogo de diferentes disciplinas y profesionales, creando equipos de trabajo que propongan ideas para el diseño de un área verde específica como caso de estudio. 

El profesor Guillermo Eisner destaca el trabajo de este laboratorio:

“Dentro de las líneas de desarrollo del Departamento, una de ellas es la investigación interdisciplinar en la que se promueva el cruce entre las artes, ciencias y tecnologías. En ese sentido, ChucaoLab es un claro reflejo de la convergencia de mundos diversos, en el cual se generan nuevos conocimientos y propuestas novedosas para el beneficio de la sociedad”. 

Además de tratarse de un proyecto interdisciplinario, la idea de este workshop también es potenciar el trabajo colaborativo, tanto dentro de la Universidad de Chile, como con actores claves externos. 

“Así como es necesaria la interdisciplina, es importante sumar a la ciudadanía, al Estado, a la academia y a los privados”, señala el prof. Kogan.

El ciclo de talleres contó con expositores de la Universidad de Chile, de la Pontificia Universidad Católica de Chile, del Ministerio de Vivienda y Urbanismo y de la Universidad McGill de Canadá, así como participantes de varias facultades, universidades y de otros países de América y Europa. Las actividades han estado a cargo de ChucaoLab, en colaboración con Sustentabilidad U. de Chile, con el Programa Transdisciplinario en Medio Ambiente de la Universidad de Chile (ProMA), y con la Red Transdisciplinar Energía, Agua y Sustentabilidad (EneAS).`,
    image: carrusel3,
    gallery: [workshop1, workshop2, workshop3],
  },
];