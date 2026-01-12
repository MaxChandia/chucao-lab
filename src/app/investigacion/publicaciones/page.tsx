import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { sanityService } from "@/lib/sanityService";
import FilterableList from "@/components/buscador/buscador";

const Publicaciones = async () => {
    const documentos = await sanityService.getAllDocumentos();

    return (
        <div>
            {/* HERO SECTION */}
            <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full relative">
                <Image src={heroImage} alt="Hero Section" fill className="object-cover z-0" priority />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h2 className="lg:text-5xl text-3xl font-bold text-black">Publicaciones</h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>

            <section className="container mx-auto px-6 py-16">
                <FilterableList documentos={documentos} />
            </section>
        </div>
    );
};

export default Publicaciones;