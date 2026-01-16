import Image from 'next/image';
import { sanityService } from '@/lib/sanityService';
import { FooterData, FooterLogo } from '@/lib/types/footer';

const Footer = async () => {
  const data: FooterData = await sanityService.getAllLogosFooter();

  if (!data?.logos || data.logos.length === 0) {
    return (
      <footer className="w-full">
        <section className="footerContainer flex items-center justify-center w-full border-t border-black py-10">
          <p>Inserte Logos en Sanity</p>
        </section>
      </footer>
    );
  }

  return (
    <footer className="w-full">
      <section className="footerContainer flex flex-col lg:flex-row items-center justify-center w-full bg-transparent border-t border-black font-karla text-sm gap-10 lg:gap-[100px] py-10 lg:py-14 px-4 lg:px-[100px]">
        {data.logos.map((logo: FooterLogo) => (
          <div 
            key={logo._key} 
            className="footerItem flex items-center justify-center w-[150px] h-[150px] lg:w-[200px] lg:h-[120px] relative"
          >
            <Image 
              src={logo.url} 
              alt={logo.alt || "Logo colaborador"} 
              fill 
              sizes="(max-width: 768px)"
              className="object-contain" 
            />
          </div>
        ))}
      </section>
    </footer>
  );
}

export default Footer;