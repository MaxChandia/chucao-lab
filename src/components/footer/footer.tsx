import artesLogo from '../../assets/artes.svg';
import dsonLogo from '../../assets/dson.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full">
            <section className="footerContainer flex flex-col lg:flex-row items-center justify-center min-h-screen lg:min-h-1 px-[100px]  w-full bg-transparent border-t border-black font-karla text-sm gap-10 lg:gap-0 lg:py-10">
                <div className="footerItem lg:w-1/3 flex items-center justify-center">
                    <Image src={dsonLogo} alt="Departamento de Sonido" className='w-[200px]' />
                </div>
                <div className="footerItem lg:w-1/3 flex items-center justify-center">
                    <Image src={artesLogo} alt="Facultad de Artes" className='w-[200px]' />
                </div>
                <div className="footerItem lg:w-1/3 flex justify-center">
                    <div className="flex flex-col"> 
                        <p><b>Facultad de Artes Universidad de Chile</b></p>
                        <p>Dr. Sotero del Río 1270, 8340381 Santiago,</p>
                        <p>Región Metropolitana, Chile</p>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;