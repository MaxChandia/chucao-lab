import artesLogo from '../../assets/artes.png';
import dsonLogo from '../../assets/dson.png';
import anidLogo from '../../assets/anidLogo.png';
import uchileLogo from '../../assets/uchileLogo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full">
            {/* Cambios realizados:
               1. lg:min-h-1 -> lg:min-h-auto: Para que se ajuste al contenido.
               2. min-h-screen -> py-10: En móvil no es buena idea que el footer ocupe toda la pantalla.
               3. px: Ajustado para que no sea tan rígido en móviles.
            */}
            <section className="footerContainer flex flex-col lg:flex-row items-center justify-center w-full bg-transparent border-t border-black font-karla text-sm gap-10 lg:gap-0 py-10 lg:py-14 px-4 lg:px-[100px]">
                
                {/* LOGO 1: ANID */}
                {/* CAMBIO: De lg:w-1/3 a lg:w-1/4 para que quepan los 4 */}
                <div className="footerItem w-full lg:w-1/4 flex items-center justify-center">
                    <Image src={anidLogo} alt="ANID" className='w-[180px] object-contain' />
                </div>

                {/* LOGO 2: U CHILE */}
                <div className="footerItem w-full lg:w-1/4 flex items-center justify-center">
                    <Image src={uchileLogo} alt="Universidad de Chile" className='w-[150px] object-contain' />
                </div>

                {/* LOGO 3: ARTES */}
                <div className="footerItem w-full lg:w-1/4 flex items-center justify-center">
                    <Image src={artesLogo} alt="Facultad de Artes" className='w-[300px] h-[100px] object-contain' />
                </div>

                {/* LOGO 4: DSON */}
                <div className="footerItem w-full lg:w-1/4 flex items-center justify-center">
                    <Image src={dsonLogo} alt="Departamento de Sonido" className='w-[250px] object-contain' />
                </div>
                
            </section>
        </footer>
    );
}

export default Footer;