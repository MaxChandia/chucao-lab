import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <nav className=" h-20 w-full flex items-center justify-between px-10 bg-transparent border-b border-gray-100 text-white shadow-lg font-jetbrains">
            <div className="logo text-black"><Link href="/">ChucaoLab</Link></div>
            <ul className="sections gap-20 flex text-black cursor-pointer">
                <li className='relative group '><h2 className='text-black group-hover:text-blue-500'>INVESTIGACIÓN</h2>
                    <ul className='absolute hidden group-hover:block bg-white shadow-lg rounded pt-2 py-2 w-[200px] rounded-b cursor-pointer'>
                        <li className='block  text-sm px-10 py-2 hover:bg-gray-100'>Ecosistemas y Biodiversidad</li>
                        <li className='block text-sm px-10 py-2 hover:bg-gray-100'>Áreas Verdes Urbanas</li>
                        <li className='block text-sm px-10 py-2 hover:bg-gray-100'>Diseño y Creación</li>
                    </ul>   
                </li>
                <li className='relative group'>
                    <h2 className='text-black group-hover:text-blue-500'>DOCENCIA</h2>
                    <ul className='absolute hidden group-hover:block bg-white shadow-lg rounded pt-2 py-2 w-[200px] cursor-pointer'>
                        <Link href="/docencia/pregrado"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Pregrado</li></Link>
                        <Link href="/docencia/postgrado"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Postgrado</li></Link>
                        <Link href="/docencia/practicas"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Prácticas, Pasantías y Tesis</li></Link>
                    </ul>
                </li>
                <li className='relative group'>
                    <h2 className='text-black group-hover:text-blue-500'>VINCULACIÓN</h2>
                    <ul className='absolute hidden group-hover:block bg-white shadow-lg rounded pt-2 py-2 w-[200px] cursor-pointer'>
                        <Link href="/vinculacion/proyectos"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Caminatas Sonoras</li></Link>
                        <Link href="/vinculacion/colaboraciones"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Divulgación Científica</li></Link>
                        <Link href="/vinculacion/servicios"><li className='block text-sm px-10 py-2 hover:bg-gray-100'>Recomendaciones para Políticas Públicas</li></Link>
                    </ul>
                </li>
                <Link href="/quienes-somos">QUIÉNES SOMOS</Link>
            </ul>
            <div className="socialMedia flex gap-4">
                <div className='text-black p-2'>ENG</div>
                <a className="socialMediaLink h-10 w-10 rounded-full p-2 bg-black hover:bg-gray-700" href="https://www.linkedin.com/company/chucaolab/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} className='h-full w-full' />
                </a>
                <a className="socialMediaLink h-10 w-10 rounded-full p-2 bg-black hover:bg-gray-700" href="https://www.instagram.com/chucaolab/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className='h-full w-full' />
                </a>
                <a className="socialMediaLink h-10 w-10 rounded-full p-2 bg-black hover:bg-gray-700" href="https://www.youtube.com/@chucaolab" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className='h-full w-full' />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;