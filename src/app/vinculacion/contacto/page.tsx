"use client";

import React, { useState } from 'react';
import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contactanos = () => {
    const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus('success');
                setFormData({ nombre: '', correo: '', mensaje: '' });
            } else { setStatus('error'); }
        } catch (error) { setStatus('error'); }
    };

    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
                <Image src={heroImage} alt="Hero Section" fill className="object-cover z-0" priority />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold text-black bg-white/70 px-6 py-2 rounded-sm backdrop-blur-sm">
                        Contáctanos
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>

            {/* CONTENIDO PRINCIPAL: FORM + INFO LATERAL */}
            <section className="py-20 px-4 sm:px-10 lg:px-20 font-karla">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
                    
                    {/* COLUMNA FORMULARIO (70%) */}
                    <div className="lg:w-2/3">
                        <div className="mb-10">
                            <h3 className="text-3xl font-bold mb-4">¿Tienes alguna duda o propuesta?</h3>
                            <p className="text-gray-600">Escríbenos y te responderemos a la brevedad.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="nombre" className="font-bold text-gray-700 font-jetbrains text-sm">NOMBRE COMPLETO</label>
                                <input type="text" id="nombre" name="nombre" required value={formData.nombre} onChange={handleChange} placeholder="Ej: Juan Pérez" className="p-3 border border-gray-300 rounded focus:outline-none focus:border-sage-green transition-colors" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="correo" className="font-bold text-gray-700 font-jetbrains text-sm">CORREO ELECTRÓNICO</label>
                                <input type="email" id="correo" name="correo" required value={formData.correo} onChange={handleChange} placeholder="Ej: contacto@ejemplo.com" className="p-3 border border-gray-300 rounded focus:outline-none focus:border-sage-green transition-colors" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="mensaje" className="font-bold text-gray-700 font-jetbrains text-sm">MENSAJE</label>
                                <textarea id="mensaje" name="mensaje" required rows={5} value={formData.mensaje} onChange={handleChange} placeholder="Escribe tu mensaje aquí..." className="p-3 border border-gray-300 rounded focus:outline-none focus:border-sage-green transition-colors resize-none"></textarea>
                            </div>

                            <button type="submit" disabled={status === 'loading' || status === 'success'} className={`py-4 px-6 rounded font-bold text-white transition-all flex items-center justify-center gap-2 font-jetbrains ${status === 'success' ? 'bg-green-600' : 'bg-black hover:bg-gray-800'} ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}`}>
                                {status === 'loading' ? <><FontAwesomeIcon icon={faSpinner} spin /> ENVIANDO...</> : status === 'success' ? '¡MENSAJE ENVIADO!' : <><FontAwesomeIcon icon={faPaperPlane} /> ENVIAR MENSAJE</>}
                            </button>
                            {status === 'error' && <p className="text-red-600 text-center font-bold">Error al enviar. Intenta de nuevo.</p>}
                        </form>
                    </div>

                    {/* COLUMNA INFO DE CONTACTO (30%) */}
                    <div className="lg:w-1/3 flex flex-col gap-10 lg:pt-10">
                        <div>
                            <h4 className="font-jetbrains font-bold text-lg mb-4 border-b-2 border-sage-green w-fit">CORREO</h4>
                            <a href="mailto:chucaolab@uchile.cl" className="flex items-center gap-3 text-lg hover:text-sage-green transition-colors group">
                                <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-sage-green transition-colors">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                chucaolab@uchile.cl
                            </a>
                        </div>

                        <div>
                            <h4 className="font-jetbrains font-bold text-lg mb-4 border-b-2 border-sage-green w-fit">REDES SOCIALES</h4>
                            <div className="flex gap-4">
                                <a className="h-12 w-12 rounded-full p-3 bg-black hover:bg-sage-green text-white transition-colors" href="https://www.linkedin.com/company/chucaolab/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} className='h-full w-full' />
                                </a>
                                <a className="h-12 w-12 rounded-full p-3 bg-black hover:bg-sage-green text-white transition-colors" href="https://www.instagram.com/chucao.lab/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className='h-full w-full' />
                                </a>
                                <a className="h-12 w-12 rounded-full p-3 bg-black hover:bg-sage-green text-white transition-colors" href="https://www.youtube.com/@chucao_lab" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faYoutube} className='h-full w-full' />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contactanos;