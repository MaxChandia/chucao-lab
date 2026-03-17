# Laboratorio de Paisaje Sonoro — Chucaolab

> Documentación del proyecto · Versión 1.0  
> Monorepo: sitio web (Next.js) + CMS (Sanity Studio)

---

## 📋 Tabla de Contenidos

1. [¿Qué es este proyecto?](#-qué-es-este-proyecto)
2. [¿Qué puede hacer el sitio?](#-qué-puede-hacer-el-sitio)
3. [Tecnologías utilizadas](#-tecnologías-utilizadas-y-por-qué)
4. [Estructura del monorepo](#-estructura-del-monorepo)
5. [Cómo instalar y ejecutar el proyecto](#-cómo-instalar-y-ejecutar-el-proyecto)
6. [Gestión de contenido (CMS)](#-gestión-de-contenido-cms)
7. [Pruebas y calidad del código](#-pruebas-y-calidad-del-código)
8. [Contacto y mantención](#-contacto-y-mantención)

---

## 🔎 ¿Qué es este proyecto?

Este es el sitio web oficial del **Laboratorio de Paisaje Sonoro (Chucaolab)** de la Universidad de Chile, desarrollado con el objetivo de difundir las labores, actividades y noticias del laboratorio, sirviendo como un canal de comunicación entre el ámbito académico y la comunidad.

El repositorio contiene **dos partes integradas**:
- **`/web`** — El sitio público construido con Next.js
- **`/studio`** — El panel de administración de contenidos (Sanity Studio)

El sitio fue construido priorizando:
- **Visibilidad en buscadores** (Google, Bing, etc.) para que el laboratorio sea fácil de encontrar.
- **Facilidad de actualización** de contenidos sin necesidad de saber programación.
- **Experiencia de usuario** fluida y accesible desde cualquier dispositivo.

---

## ✨ ¿Qué puede hacer el sitio?

> _Completa esta sección con las funcionalidades reales del sitio._

| Funcionalidad | Descripción |
|---|---|
| Página de inicio | Presentación del laboratorio y acceso rápido a contenidos destacados |
| Proyectos | Listado de los proyectos desarrollados por ChucaoLab |
| Publicaciones y Tesis | Listado filtrable por categoría y eje temático |
| Noticias | Listado de noticias y actividades |
| Caminatas Sonoras | Descripción y publicaciones relacionadas a las Caminatas Sonoras, actividad central del laboratorio |
| Vinculación |
| Quiénes Somos |
| [Contacto / Formulario] |

---

## 🛠 Tecnologías utilizadas y por qué

### Next.js — El motor del sitio
Next.js es el framework que construye y sirve el sitio web. Se eligió principalmente porque **mejora el posicionamiento en buscadores (SEO)**: el contenido se genera de forma que Google y otros motores pueden leerlo e indexarlo correctamente, algo crítico para la visibilidad del laboratorio.

### Sanity — Gestión de contenidos (CMS) y GROQ
Sanity es el panel de administración donde el equipo del laboratorio puede **crear, editar y publicar contenido** sin tocar código. Es un CMS _headless_: el contenido es independiente del diseño, lo que da flexibilidad total para crecer o cambiar la apariencia del sitio en el futuro.

Para consultar el contenido desde el sitio web, Sanity utiliza **GROQ** (_Graph-Relational Object Queries_), un lenguaje de consulta propio que permite al sitio solicitar exactamente la información que necesita, de forma eficiente y sin traer datos innecesarios. Por ejemplo, una consulta GROQ puede pedir "todos los proyectos activos, ordenados por año, incluyendo solo el título y la imagen".

### Tailwind CSS — Estilos y diseño visual
Tailwind controla la apariencia visual del sitio (colores, tipografía, espaciados, diseño responsivo). Permite construir interfaces consistentes y adaptadas a todo tipo de pantallas de forma eficiente.

### Jest — Pruebas de conexiones internas
Jest verifica automáticamente que las **conexiones entre el sitio y Sanity** funcionen correctamente. Detecta errores antes de que lleguen al sitio en producción.

### Playwright — Pruebas de interfaz de usuario
Playwright simula un usuario real navegando el sitio en un navegador real, verificando que todo funcione como se espera. Es como un "robot revisor" automatizado.

---

## Estructura del monorepo

```
chucaolab/
│
├── web/                          # Sitio web público (Next.js)
│   ├── src/
│   │   ├── app/                  # Páginas y rutas del sitio
│   │   ├── components/           # Componentes reutilizables de UI
│   │   ├── lib/                  # Cliente Sanity y consultas GROQ
│   │   └── assets/               # Imágenes, íconos y recursos estáticos
│   ├── tests/                    # Pruebas automatizadas
│   │   ├── chucaolab.spec.ts     # Pruebas Playwright del sitio principal
│   │   └── interacciones.spec.ts # Pruebas Playwright de interacciones UI
│   ├── public/                   # Archivos públicos (favicon, og:image, etc.)
│   ├── jest.config.ts
│   ├── playwright.config.ts
│   ├── next.config.ts
│   ├── tailwind.config.js
│   ├── .env.example              # Plantilla de variables de entorno
│   └── package.json
│
├── studio/                       # CMS Sanity Studio
│   ├── schemaTypes/              # Definición de todos los tipos de contenido
│   ├── sanity.config.ts          # Configuración principal de Sanity
│   ├── sanity.cli.ts             # CLI de Sanity
│   └── package.json
│
├── .gitignore                    # Ignorados globales del monorepo
└── README.md                     # Este archivo
```

---

## Cómo instalar y ejecutar el proyecto

El proyecto tiene dos partes independientes. Ambas deben instalarse por separado.

### Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [npm](https://www.npmjs.com/)
- Acceso a las variables de entorno (ver sección de configuración)

---

### Parte 1 — Sitio web (`/web`)

```bash
# 1. Clonar el repositorio
git clone https://github.com/[usuario]/chucaolab.git
cd chucaolab/web

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# → Completar los valores en .env.local (ver tabla más abajo)

# 4. Ejecutar en modo desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`.

#### Variables de entorno — `/web`

>  Usa `.env.example` como referencia.

| Variable | Descripción | Cómo obtenerla |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID del proyecto en Sanity | [sanity.io/manage](https://sanity.io/manage) → tu proyecto → Settings |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset (`production` o `development`) | Mismo panel, sección Datasets |
| `SANITY_API_TOKEN` | Token de acceso a la API | sanity.io/manage → API → Tokens → Add API token |

#### Scripts disponibles — `/web`

```bash
npm run dev        # Inicia el servidor de desarrollo
npm run build      # Genera la versión de producción
npm run start      # Inicia el servidor de producción
npm run test       # Ejecuta pruebas unitarias (Jest)
npm run test:e2e   # Ejecuta pruebas de interfaz (Playwright)
```

---

### Parte 2 — Sanity Studio (`/studio`)

```bash
cd chucaolab/studio

# 1. Instalar dependencias
npm install

# 2. Ejecutar el panel de administración
npm run dev
```

El panel de administración estará disponible en `http://localhost:3333`.

> Para acceder al Studio en producción, se requiere una cuenta con acceso al proyecto en [sanity.io/manage](https://sanity.io/manage).

---

##  Gestión de contenido (CMS)

El contenido del sitio se administra desde **Sanity Studio** sin necesidad de tocar código. El sitio consulta ese contenido usando **GROQ**, el lenguaje de consultas de Sanity, que permite obtener exactamente la información necesaria para cada sección.

### Tipos de contenido gestionables

El Studio permite administrar los siguientes tipos de contenido:

- Noticias
- Publicaciones
- Proyectos y Proyecto Principal
- Equipo y Practicantes
- Ejes temáticos
- Cursos
- Quiénes Somos y Descripción de Inicio
- Equipamiento
- Tesis y Practicantes
- Divulgación Científica
- Caminata Sonora
- Colaboradores y Colaboradores Asociados
- Footer

### Flujo de publicación

```
Abrir Studio → Crear documento → Completar campos → Guardar borrador → Publicar
```

---

## Pruebas y calidad del código

### Pruebas unitarias — Jest

Verifican que las conexiones a la API de Sanity devuelvan los datos esperados.

```bash
cd web
npm run test
```

| Prueba | Descripción | Estado |
|---|---|---|
| `sanity.client.test.ts` | Verifica conexión al proyecto Sanity | ✅ |
| `[nombre].test.ts` | _Completar con pruebas reales_ | ✅ |

### Pruebas de interfaz — Playwright

Simulan la navegación de un usuario real en Chromium, Firefox y WebKit.

```bash
cd web
npm run test:e2e
```

| Archivo | Descripción | Estado |
|---|---|---|
| `chucaolab.spec.ts` | Pruebas generales del sitio principal | ✅ |
| `interacciones.spec.ts` | Pruebas de interacciones y flujos de UI | ✅ |

---

##  Contacto y mantención

| Rol | Nombre | Contacto |
|---|---|---|
| Desarrollador principal | Maximiliano Chandía Flores | maximiliano.chandiaf@gmail.com |
| Responsable del laboratorio | Pablo Kogan | pablo.kogan@uchile.cl |

> Para actualizar contenidos puede hacerse de forma autónoma desde Sanity Studio. Para cambios estructurales al sitio, contactar al desarrollador.

---

_Última actualización: marzo 2026_
