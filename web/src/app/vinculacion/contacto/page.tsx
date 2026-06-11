"use client";

import React, { useState } from 'react';
import Image from "next/image";
import heroImage from '@/assets/hero_sections.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { HERO_BLUR_DATA_URL } from "@/lib/imageOptimization";
import ContactForm from "@/components/contactForm/ContactForm";

const Contactanos = () => {
   

    return (
        <div className="bg-white">
  
            <section className="hero h-[60vh] sm:h-[70vh] md:h-[80vh] w-full font-karla relative">
                <Image src={heroImage} alt="Hero Section" fill className="object-cover z-0" priority placeholder="blur" blurDataURL={HERO_BLUR_DATA_URL} />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold text-black bg-white/70 px-6 py-2 rounded-sm backdrop-blur-sm">
                        Contáctanos
                    </h2>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-5 bg-sage-green border-y-2 border-black z-10"></span>
            </section>

            <section className="py-20 px-4 sm:px-10 lg:px-20 font-karla">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
                    
                    <div className="lg:w-2/3">

                        <ContactForm />
                    </div>

                    <div className="lg:w-1/3 flex flex-col gap-10 lg:pt-10">
                        <div>
                            <h4 className="font-jetbrains font-bold text-lg mb-4 border-b-2 border-sage-green w-fit">CORREO</h4>
                            <a href="mailto:chucaolab@uchile.cl" className="flex items-center gap-3 text-lg hover:text-sage-green transition-colors group">
                                <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-sage-green transition-colors">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                chucao.lab@uchile.cl
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