"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/logo-chucaolab.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSection, setIsOpenSection] = useState<string | null>(null);

    // --- LÓGICA GOOGLE TRANSLATE ---
    useEffect(() => {
        // 1. Crear e inyectar el script de Google
        const addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);

        // 2. Inicializar Google Translate
        // @ts-ignore
        window.googleTranslateElementInit = () => {
            // @ts-ignore
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "es",
                    includedLanguages: "en,es",
                    autoDisplay: false,
                },
                "google_translate_element"
            );
        };
    }, []);

    // Función para alternar idioma (Español <-> Inglés)
    const handleLanguageToggle = () => {
        const cookies = document.cookie.split(';');
        const transCookie = cookies.find(c => c.trim().startsWith('googtrans='));
        
        if (transCookie && transCookie.includes('/es/en')) {
            // Volver a Español
            document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.chucaolab.cl; path=/;";
            document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + window.location.hostname + "; path=/;";
        } else {
            // Cambiar a Inglés
            document.cookie = "googtrans=/es/en; path=/";
        }
        window.location.reload();
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    const handleToggleSection = (section: string) => {
        if (isOpenSection === section) {
            setIsOpenSection(null); 
        } else {
            setIsOpenSection(section);
        }
    }; 

    const birdSound = () => {
        const audio = new Audio('/sounds/chucao.mp3');
        audio.play();
    }

    return (
        <>
            {/* ELEMENTO DE GOOGLE TRANSLATE OCULTO */}
            <div 
                id="google_translate_element" 
                style={{ display: 'none' }}
            ></div>

            

            <nav className="absolute z-50 w-full flex items-center justify-between px-4 sm:px-10 lg:px-20 py-4 bg-transparent border-b border-gray-100 text-black shadow-lg font-jetbrains">
                
                {/* --- LOGO --- */}
                <Link href="/">
                    <Image src={logoImage} onClick={birdSound} alt="ChucaoLab" className='h-[70px] w-[90px]' />
                </Link>

                {/* ---  MENÚ DE ESCRITORIO --- */}
                <ul className="sections gap-10 xl:gap-20 hidden lg:flex cursor-pointer">
                    {/* Menú Investigación */}
                    <li className='relative group'>
                        <h2 className='group-hover:text-sage-green'>INVESTIGACIÓN</h2>
                        <ul className='absolute opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto bg-white shadow-lg rounded pt-2 py-2 w-[200px] rounded-b cursor-pointer transition-opacity duration-300'>
                            <Link href="/investigacion/proyectos"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Proyectos</li></Link>
                            <Link href="/investigacion/publicaciones"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Publicaciones</li></Link>
                            <Link href="/investigacion/infraestructura-y-equipamiento"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Infraestructura y equipamiento</li></Link>
                        </ul>
                    </li>
                    {/* Menú Docencia */}
                    <li className='relative group'>
                        <h2 className='group-hover:text-sage-green'>DOCENCIA</h2>
                        <ul className='absolute opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto bg-white shadow-lg rounded pt-2 py-2 w-[200px] cursor-pointer transition-opacity duration-300'>
                            <Link href="/docencia/cursos"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Cursos</li></Link>
                            <Link href="/docencia/tesis-y-practicas"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Tesis y practicantes</li></Link>
                        </ul>
                    </li>
                    {/* Menú Vinculación */}
                    <li className='relative group'>
                        <h2 className='group-hover:text-sage-green'>VINCULACIÓN</h2>
                        <ul className='absolute opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto bg-white shadow-lg rounded pt-2 py-2 w-[200px] cursor-pointer transition-opacity duration-300'>
                            <Link href="/vinculacion/caminatas-sonoras"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Caminatas Sonoras</li></Link>
                            <Link href="/vinculacion/divulgacion-cientifica"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Divulgación Científica</li></Link>
                            <Link href="/vinculacion/noticias"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Noticias</li></Link>
                            <Link href="/vinculacion/eventos-y-actividades"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Eventos y actividades</li></Link>
                            <Link href="/vinculacion/contacto"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Contáctanos</li></Link>
                        </ul>
                    </li>
                    {/* Link Quienes Somos */}
                    <Link className="hover:text-sage-green" href="/quienes-somos">QUIÉNES SOMOS</Link>
                </ul>

                {/* --- SOCIAL MEDIA ESCRITORIO --- */}
                <div className="socialMedia hidden lg:flex gap-4 items-center">
                    
                    {/* BOTÓN ENG ESCRITORIO */}
                    <button 
                        onClick={handleLanguageToggle}
                        className='p-2 font-bold  transition-colors border border-black rounded px-3 text-sm hover:bg-black hover:text-white duration-300'
                        aria-label="Cambiar a inglés"
                    >
                        ENG
                    </button>

                    <a className="socialMediaLink h-10 w-10 rounded-full p-2 bg-black hover:bg-gray-700 transition-colors duration-300 text-white" href="https://www.linkedin.com/company/chucaolab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} className='h-full w-full' />
                    </a>
                    <a className="socialMediaLink h-10 w-10 rounded-full p-2 bg-black hover:bg-gray-700 transition-colors duration-300 text-white" href="https://www.instagram.com/chucao.lab/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className='h-full w-full' />
                    </a>
                    <a className="socialMediaLink h-10 w-10 rounded-full p-2 bg-black hover:bg-gray-700 transition-colors duration-300 text-white" href="https://www.youtube.com/@chucao_lab" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <FontAwesomeIcon icon={faYoutube} className='h-full w-full' />
                    </a>
                </div>

                {/* ---  BOTÓN HAMBURGUESA MÓVIL --- */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(true)} className="p-2" aria-label="Abrir menú">
                        <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                    </button>
                </div>

                {/* --- MENÚ MÓVIL (DRAWER) --- */}
                <div className={`
                    fixed top-0 left-0 w-full h-screen bg-white z-50
                    transform transition-transform duration-300 ease-in-out
                    flex flex-col lg:hidden
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    {/* --- Header del Menú Móvil --- */}
                    <div className="flex justify-between items-center h-[90px] px-4 sm:px-10 border-b">
                        <Link href="/" onClick={handleCloseMenu}>
                            <Image src={logoImage} alt="ChucaoLab" className='h-[70px] w-[90px]' />
                        </Link>
                        <button onClick={handleCloseMenu} className="p-2" aria-label="Cerrar menú">
                            <FontAwesomeIcon icon={faXmark} className="h-7 w-7" />
                        </button>
                    </div>

                    {/* --- Links del Menú Móvil --- */}
                    <ul className="flex flex-col p-4 sm:p-10 gap-4 overflow-y-auto">
                        
                        {/* Menú Investigación */}
                        <li className="flex flex-col gap-2 pt-4">
                            <h2 className='text-xl font-bold cursor-pointer' onClick={() => handleToggleSection('investigacion')}>INVESTIGACIÓN <span>{isOpenSection === 'investigacion' ? '-' : '+'}</span></h2>
                            <ul className={`flex-col pl-4  ${isOpenSection === 'investigacion' ? 'flex' : 'hidden'}`}>
                                <Link href="/investigacion/proyectos" onClick={handleCloseMenu}><li className='py-2 text-gray-700 hover:text-sage-green'>Proyectos</li></Link>
                                <Link href="/investigacion/publicaciones" onClick={handleCloseMenu}><li className='py-2 text-gray-700 hover:text-sage-green'>Publicaciones</li></Link>
                                <Link href="/investigacion/infraestructura-y-equipamiento" onClick={handleCloseMenu}><li className='py-2 text-gray-700 hover:text-sage-green'>Infraestructura y equipamiento</li></Link>
                            </ul>
                        </li>
                        
                        {/* Menú Docencia */}
                        <li className="flex flex-col gap-2 border-t pt-4">
                            <h2 className='text-xl font-bold cursor-pointer' onClick={() => handleToggleSection('docencia')}>DOCENCIA <span>{isOpenSection === 'docencia' ? '-' : '+'}</span></h2>
                            <ul className={`flex-col pl-4 ${isOpenSection === 'docencia' ? 'flex' : 'hidden'}`}>
                                <Link href="/docencia/cursos" onClick={handleCloseMenu}><li className='py-2 text-gray-700 hover:text-sage-green'>Cursos</li></Link>
                                <Link href="/docencia/tesis-y-practicas" onClick={handleCloseMenu}><li className='py-2 text-gray-700 hover:text-sage-green'>Tesis y practicantes</li></Link>
                            </ul>
                        </li>
                        
                        {/* Menú Vinculación */}
                        <li className="flex flex-col gap-2 border-t pt-4">
                            <h2 className='text-xl font-bold cursor-pointer' onClick={() => handleToggleSection('vinculacion')}>VINCULACIÓN <span>{isOpenSection === 'vinculacion' ? '-' : '+'}</span></h2>
                            <ul className={`flex-col pl-4 ${isOpenSection === 'vinculacion' ? 'flex' : 'hidden'}`}>
                                <Link href="/vinculacion/caminatas-sonoras" onClick={handleCloseMenu}><li className='py-2 text-gray-700 hover:text-sage-green'>Caminatas Sonoras</li></Link>
                                <Link href="/vinculacion/divulgacion-cientifica" onClick={handleCloseMenu}><li className='py-2 text-gray-700 hover:text-sage-green'>Divulgación Científica</li></Link>
                                <Link href="/vinculacion/noticias" onClick={handleCloseMenu}><li className='py-2 text-gray-700 hover:text-sage-green'>Noticias</li></Link>
                                <Link href="/vinculacion/eventos-y-actividades" onClick={handleCloseMenu}><li className='py-2 text-gray-700 hover:text-sage-green'>Eventos y actividades</li></Link>
                                <Link href="/vinculacion/contacto" onClick={handleCloseMenu}><li className='py-2 text-gray-700 hover:text-sage-green'>Contáctanos</li></Link>
                            </ul>
                        </li>

                        {/* Link Quienes Somos */}
                        <li className="border-t pt-4">
                            <Link className="text-xl font-bold hover:text-sage-green py-2 block" href="/quienes-somos" onClick={handleCloseMenu}>
                                QUIÉNES SOMOS
                            </Link>
                        </li>

                        {/* --- Social Media Móvil --- */}
                        <div className="flex gap-4 mt-8 pt-6 border-t justify-center">
                            <a className="socialMediaLink h-10 w-10 rounded-full p-2 bg-black hover:bg-gray-700 text-white" href="https://www.linkedin.com/company/chucaolab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} className='h-full w-full' />
                            </a>
                            <a className="socialMediaLink h-10 w-10 rounded-full p-2 bg-black hover:bg-gray-700 text-white" href="https://www.instagram.com/chucao.lab/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} className='h-full w-full' />
                            </a>
                            <a className="socialMediaLink h-10 w-10 rounded-full p-2 bg-black hover:bg-gray-700 text-white" href="https://www.youtube.com/@chucao_lab" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <FontAwesomeIcon icon={faYoutube} className='h-full w-full' />
                            </a>
                        </div>

                        {/* BOTÓN ENG MÓVIL */}
                        <div className='flex justify-center mt-4'>
                            <button 
                                onClick={handleLanguageToggle}
                                className='p-2 px-6 border border-black rounded font-bold text-center w-fit hover:bg-black hover:text-white transition-colors'
                                aria-label="Cambiar a inglés"
                            >
                                ENG
                            </button>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;