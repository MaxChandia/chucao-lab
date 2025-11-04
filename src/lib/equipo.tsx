const createSlug = (name: string): string => {
    return name
        .toLowerCase()
        .normalize("NFD") // Normalizar a forma no descompuesta (quita acentos)
        .replace(/[\u0300-\u036f]/g, "") // Eliminar diacríticos (ej: acentos)
        .replace(/\s+/g, '-') // Reemplazar espacios por guiones
        .replace(/[^a-z0-9-]/g, ''); // Eliminar cualquier caracter que no sea letra, número o guión
};

interface MiembroEquipo {
    id: number;
    nombre: string;
    slug: string; // Propiedad opcional para el slug
    rol: string;
    profesion?: string;
    departamento: string;
    facultad: string;
    email: string;
    // fotoUrl: string; // Se mantiene, pero se usa un span por el momento
    perfil: string; // Nueva propiedad para el texto al hacer clic
}

// Nota: Las propiedades 'rol', 'departamento' y 'facultad' de cada miembro
// se han ajustado para reflejar la información detallada que proporcionaste.
export const equipo: MiembroEquipo[] = [
    {
        id: 1,
        nombre: "Pablo Kogan",
        rol: "Profesor Asociado",
        profesion: "Ingeniero Acústico",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "pablo.kogan@uchile.cl",
        perfil: "Ingeniero Acústico.",
        slug: createSlug("Pablo Kogan"),
    },
    {
        id: 2,
        nombre: "Camila Villavicencio",
        rol: "Coordinadora",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "Correo",
        perfil: "Texto al clickear: Camila Villavicencio", // Usa el texto proporcionado (o ajusta si es un error)
        slug: createSlug("Camila Villavicencio"),
    },
    {
        id: 3,
        nombre: "Josefina Monsalve Tapia",
        slug: createSlug("Josefina Monsalve Tapia"),
        rol: "Colaboradora",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "josefina.monsalve@ug.uchile.cl",
        perfil: "Magíster en Geografía (c), Universidad de Chile. Certificación Complementaria en Interdisciplina y Transdisciplina para la Sustentabilidad (c). Investigadora en el Núcleo de Estudios Sistémicos Transdisciplinarios (Nest-r3). Coordinadora Ejecutiva de la Red Transdisciplinar en Energía, Agua y Sustentabilidad (EneAS). Estudiante del Magíster en Geografía de la Universidad de Chile y Licenciada en Geografía por la misma institución. Posee formación en enfoques interdisciplinarios y transdisciplinarios para la sustentabilidad, junto con experiencia en docencia universitaria orientada a la interdisciplina. Su interés se centra en la investigación y el análisis territorial, así como en el uso de sistemas de información geográfica (SIG) para abordar problemáticas complejas vinculadas al cambio climático. Sus principales áreas de interés son la planificación urbana, la contaminación atmosférica y la interfaz entre ciencia y política.",
    },
    {
        id: 4,
        nombre: "Ignacio Saavedra Cid",
        slug: createSlug("Ignacio Saavedra Cid"),
        rol: "Colaborador",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "Correo",
        perfil: "Ingeniero en Sonido, interesado en la acústica ambiental y el estudio del paisaje sonoro. Su enfoque profesional combina el rigor técnico con la curiosidad científica, buscando comprender cómo el sonido influye en la experiencia humana de los espacios. Ha participado en proyectos de investigación relacionados con la valoración del entorno acústico, realizando mediciones de campo con sonómetros y acelerómetros, análisis de datos y elaboración de informes técnicos bajo normativa chilena (DS N°38). Su formación le ha permitido desarrollar una visión interdisciplinaria que integra la ingeniería, la ciencia y la creatividad. Más allá del ámbito técnico, le apasionan la ciencia, la música y los deportes, áreas que alimentan su interés por la exploración, la precisión y el trabajo en equipo. Su objetivo es aplicar la ingeniería acústica para mejorar la calidad sonora de los entornos urbanos y naturales, promoviendo un equilibrio entre tecnología, ambiente y bienestar humano.",
    },
    {
        id: 5,
        nombre: "Lucas Fuentes",
        slug: createSlug("Lucas Fuentes"),
        rol: "Colaborador",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "Correo",
        perfil: "Texto al clickear: Lucas Fuentes",
    },
    {
        id: 6,
        nombre: "Diego Verdugo",
        slug: createSlug("Diego Verdugo"),
        rol: "Colaborador",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "Correo",
        perfil: "Texto al clickear: Diego Verdugo",
    },
    {
        id: 7,
        nombre: "Javier Illanes",
        slug: createSlug("Javier Illanes"),
        rol: "Tesista",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "Correo",
        perfil: "Texto al clickear: Javier Illanes",
    },
    {
        id: 8,
        nombre: "Benjamín Vega",
        slug: createSlug("Benjamín Vega"),
        rol: "Tesista",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "Correo",
        perfil: "Texto al clickear: Benjamín Vega",
    },
    {
        id: 9,
        nombre: "Pamela Hidalgo",
        slug: createSlug("Pamela Hidalgo"),
        rol: "Colaboradora",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "Correo",
        perfil: "Texto al clickear: Pamela Hidalgo",
    },
    {
        id: 10,
        nombre: "Ricardo Madrid",
        slug: createSlug("Ricardo Madrid"),
        rol: "Colaborador",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "Correo",
        perfil: "Texto al clickear: Ricardo Madrid",
    },
    {
        id: 11,
        nombre: "Sofía Orellana Muñoz",
        slug: createSlug("Sofía Orellana Muñoz"),
        rol: "Practicante",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "sofia.orellana.m1@gmail.com",
        perfil: "Su trabajo busca integrar lo técnico y lo cultural en el desarrollo de proyectos, explorando herramientas digitales de representación y diseño como medios de investigación, comunicación y experimentación. Se incorpora a ChucaoLab ya que valora los procesos colaborativos e interdisciplinarios, siendo el laboratorio un espacio ideal para aprender de los distintos procesos que allí se desarrollan. Su interés se orienta hacia el patrimonio, las formas de habitar y construir, la neuroarquitectura y la relación entre las personas y su entorno, buscando contribuir desde una mirada investigativa, crítica y reflexiva.",
    },
    {
        id: 12,
        nombre: "Sabrita Chandía",
        slug: createSlug("Sabrita Chandía"),
        rol: "Colaboradora",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "Correo",
        perfil: "Texto al clickear: Sabrita Chandía",
    },
    {
        id: 13,
        nombre: "Karla Pino",
        slug: createSlug("Karla Pino"),
        rol: "Colaboradora",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "Correo",
        perfil: "Texto al clickear: Karla Pino",
    },
];