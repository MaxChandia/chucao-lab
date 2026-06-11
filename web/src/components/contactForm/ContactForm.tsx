"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';

type Status = 'idle' | 'loading' | 'success' | 'error';

const ContactForm = () => {
    const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
    const [status, setStatus] = useState<Status>('idle');

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
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="lg:w-full">
            <div className="mb-10">
                <h3 className="text-3xl font-bold mb-4">¿Tienes alguna duda o propuesta?</h3>
                <p className="text-gray-600">Escríbenos y te responderemos a la brevedad.</p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="nombre" className="font-bold text-gray-700 font-jetbrains text-sm">
                        NOMBRE COMPLETO
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej: Juan Pérez"
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:border-sage-green transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="correo" className="font-bold text-gray-700 font-jetbrains text-sm">
                        CORREO ELECTRÓNICO
                    </label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        required
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="Ej: contacto@ejemplo.com"
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:border-sage-green transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="mensaje" className="font-bold text-gray-700 font-jetbrains text-sm">
                        MENSAJE
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        rows={5}
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí..."
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:border-sage-green transition-colors resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`py-4 px-6 rounded font-bold text-white transition-all flex items-center justify-center gap-2 font-jetbrains
                        ${status === 'success' ? 'bg-green-600' : 'bg-black hover:bg-gray-800'}
                        ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}
                    `}
                >
                    {status === 'loading' ? (
                        <><FontAwesomeIcon icon={faSpinner} spin /> ENVIANDO...</>
                    ) : status === 'success' ? (
                        '¡MENSAJE ENVIADO!'
                    ) : (
                        <><FontAwesomeIcon icon={faPaperPlane} /> ENVIAR MENSAJE</>
                    )}
                </button>

                {status === 'error' && (
                    <p className="text-red-600 text-center font-bold">
                        Error al enviar. Intenta de nuevo.
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;