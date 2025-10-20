interface MiembroEquipo {
    id: number;
    nombre: string;
    rol: string;
    departamento: string;
    facultad: string;
    email: string;
    fotoUrl: string;
}


export const equipo : MiembroEquipo[] = [
    {
        id: 1,
        nombre: "Pablo Kogan",
        rol: "Profesor Asociado",
        departamento: "Departamento de Sonido",
        facultad: "Facultad de Artes, UCH",
        email: "pablo.kogan@uchile.cl",
        fotoUrl: "https://example.com/pablo-kogan.jpg"
    },
    {
        id: 2,
        nombre: "Lucas Fuentes",
        rol: "Rol",
        departamento: "Departamento",
        facultad: "Facultad, UCH",
        email: "email@uchile.cl",
        fotoUrl: "https://example.com/lucas-fuentes.jpg"
    },
    {
        id: 3,
        nombre: "Josefina Monsalve",
        rol: "Rol",
        departamento: "Departamento",
        facultad: "Facultad, UCH",
        email: "email@uchile.cl",
        fotoUrl: "https://example.com/josefina-monsalve.jpg"
    },
    {
        id: 4,
        nombre: "Diego Verdugo",
        rol: "Rol",
        departamento: "Departamento",
        facultad: "Facultad, UCH",
        email: "email@uchile.cl",
        fotoUrl: "https://example.com/diego-verdugo.jpg"
    },
    {
        id: 5,
        nombre: "Benjamín Vega",
        rol: "Rol",
        departamento: "Departamento",
        facultad: "Facultad, UCH",
        email: "email@uchile.cl",
        fotoUrl: "https://example.com/benjamin-vega.jpg"
    },
       {
        id: 6,
        nombre: "Nombre Apellido",
        rol: "Rol",
        departamento: "Departamento",
        facultad: "Facultad, UCH",
        email: "email@uchile.cl",
        fotoUrl: "https://example.com/nombre-apellido.jpg"
    },
       {
        id: 7,
        nombre: "Nombre Apellido",
        rol: "Rol",
        departamento: "Departamento",
        facultad: "Facultad, UCH",
        email: "email@uchile.cl",
        fotoUrl: "https://example.com/nombre-apellido.jpg"
    }
];