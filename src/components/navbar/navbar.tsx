import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <nav className=" h-20 w-full flex items-center justify-between px-10 bg-transparent border-b border-gray-100 text-white shadow-lg font-jetbrains">
            <div className="logo text-black">ChucaoLab</div>
            <div className="sections gap-20 flex text-black">
                <Link href="/investigacion">INVESTIGACIÓN</Link>
                <Link href="/docencia">DOCENCIA</Link>
                <Link href="/vinculacion">VINCULACIÓN</Link>
                <Link href="/quienes-somos">QUIÉNES SOMOS</Link>
            </div>
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