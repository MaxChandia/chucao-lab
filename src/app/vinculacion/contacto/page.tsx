"use client";

import React, { useState } from 'react';
import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Contactanos = () => {
    // Estados para manejar los inputs
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });

    // Estados para manejar la carga y el éxito/error
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ nombre: '', correo: '', mensaje: '' }); // Limpiar form
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div>
            {/* HERO SECTION */}
            <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
                <Image
                    src={heroImage}
                    alt="Hero Section"
                    fill
                    className="object-cover z-0"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold text-black bg-white/70 px-6 py-2 rounded-sm backdrop-blur-sm">
                        Contáctanos
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>

            {/* FORMULARIO */}
            <section className="py-20 px-4 sm:px-10 lg:px-20 font-karla bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold mb-4">¿Tienes alguna duda o propuesta?</h3>
                        <p className="text-gray-600">Escríbenos y te responderemos a la brevedad.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
                        
                        {/* Campo Nombre */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nombre" className="font-bold text-gray-700">Nombre Completo</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name="nombre"
                                required
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Ej: Juan Pérez"
                                className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>

                        {/* Campo Correo */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="correo" className="font-bold text-gray-700">Correo Electrónico</label>
                            <input 
                                type="email" 
                                id="correo" 
                                name="correo"
                                required
                                value={formData.correo}
                                onChange={handleChange}
                                placeholder="Ej: contacto@ejemplo.com"
                                className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>

                        {/* Campo Mensaje */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mensaje" className="font-bold text-gray-700">Mensaje</label>
                            <textarea 
                                id="mensaje" 
                                name="mensaje"
                                required
                                rows={5}
                                value={formData.mensaje}
                                onChange={handleChange}
                                placeholder="Escribe tu mensaje aquí..."
                                className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors resize-none"
                            ></textarea>
                        </div>

                        {/* Botón Enviar */}
                        <button 
                            type="submit" 
                            disabled={status === 'loading' || status === 'success'}
                            className={`
                                py-3 px-6 rounded font-bold text-white transition-all flex items-center justify-center gap-2
                                ${status === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-black hover:bg-gray-800'}
                                ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}
                            `}
                        >
                            {status === 'loading' ? (
                                <>Enviando... <FontAwesomeIcon icon={faSpinner} spin /></>
                            ) : status === 'success' ? (
                                <>¡Mensaje Enviado!</>
                            ) : (
                                <>Enviar Mensaje <FontAwesomeIcon icon={faPaperPlane} /></>
                            )}
                        </button>

                        {/* Mensajes de feedback */}
                        {status === 'success' && (
                            <p className="text-green-600 text-center font-bold mt-2">
                                Gracias por escribirnos. Te contactaremos pronto.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600 text-center font-bold mt-2">
                                Hubo un error al enviar el mensaje. Por favor intenta nuevamente o escríbenos directo al correo.
                            </p>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contactanos;

