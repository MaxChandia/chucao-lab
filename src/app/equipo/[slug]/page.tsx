import { faEnvelope, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { equipo } from '@/lib/equipo'; 

// Next.js 15 requires params to be a Promise
type MiembroPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>; 
};

// Make the component async to await params
export default async function PerfilPage({ params }: MiembroPageProps) {
    // Await the params Promise
    const { slug } = await params;
    
    // 1. Buscar el miembro usando el slug
    const miembro = equipo.find(m => m.slug === slug);

    // 2. Manejar el caso de que el miembro no exista
    if (!miembro) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-10 font-karla bg-gray-50">
                <h1 className="text-2xl font-bold mb-4">Perfil no encontrado</h1>
                <p className="text-lg mb-6">El perfil que buscas no existe o fue movido.</p>
                <Link href="/quienes-somos" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 mr-2"/>
                    Volver al equipo
                </Link>
            </div>
        );
    }

    // 3. Renderizar el perfil si se encuentra
    return (
        <div className="min-h-screen pt-20 pb-16 px-5 sm:px-10 lg:px-20 font-karla bg-gray-50">
            <Link href="/quienes-somos" className="flex items-center text-black hover:text-blue-600 transition-colors mb-8 w-fit">
                <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4 mr-2"/>
                Volver al equipo
            </Link>

            <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg border border-gray-200">
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 border-b pb-4">
                    {/* Placeholder para la imagen de perfil */}
                    <span className="inline-block h-[120px] w-[120px] rounded-full bg-gray-300 flex-shrink-0"></span>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{miembro.nombre}</h1>
                        <p className="text-lg text-gray-600 mt-1">{miembro.rol}</p>
                        <div className="mt-3 text-sm text-gray-500">
                             <p className="font-semibold">{miembro.facultad}</p>
                             <p>{miembro.departamento}</p>
                             <div className="flex items-center gap-2 mt-1">
                                 <FontAwesomeIcon icon={faEnvelope} className="h-3 w-3"/>
                                 <p>{miembro.email}</p>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="profile-details">
                    <h2 className="text-xl font-semibold mb-4 border-l-4 border-gray-400 pl-3">Trayectoria y Rol</h2>
                    {/* Usamos whitespace-pre-line para respetar los saltos de línea del texto de perfil */}
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">{miembro.perfil}</p>
                </div>
                
            </div>
        </div>
    );
}