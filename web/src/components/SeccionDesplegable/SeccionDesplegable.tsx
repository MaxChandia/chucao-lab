"use client";

import { useState, ReactNode } from "react";

// Definimos los tipos de datos que recibirá el componente
interface SeccionDesplegableProps {
    children: ReactNode;
    titulo: string;
    id: string;
}

export default function SeccionDesplegable({ children, titulo, id }: SeccionDesplegableProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id={id} className="mb-12 scroll-mt-24">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left lg:cursor-text lg:pointer-events-none group"
            >
                <h2 className="text-2xl font-bold mb-4 font-jetbrains">{titulo}</h2>
                <span className={`lg:hidden transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                </span>
            </button>

            <div className={`prose max-w-none font-karla text-justify ${isOpen ? "block" : "hidden"} lg:block`}>
                {children}
            </div>
        </section>
    );
}