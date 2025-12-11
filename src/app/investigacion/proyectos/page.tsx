import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { Proyecto } from "@/lib/sanityClasses";
import { sanityService } from "@/lib/sanityService";

const Proyectos = async () => {

    const proyectos: Proyecto[] = await sanityService.getAllProyectos();

    return (
        <div>
            <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
                <Image
                    src={heroImage}
                    alt="Hero Section"
                    fill
                    className="object-cover z-0"
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h2 className="lg:text-5xl md:text-3xl font-bold text-black">
                        Proyectos
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>
            <section className="min-h-screen p-20">
                <div className=" gap-10">
                    {proyectos.map((proyecto) => (
                        <div 
                            key={proyecto._id} 
                            className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <a href={`/investigacion/proyectos/${proyecto.slug.current}`}>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-4">{proyecto.titulo}</h3>
                                </div>

                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );

};

export default Proyectos;
