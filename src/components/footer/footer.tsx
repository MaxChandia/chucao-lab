import Image from 'next/image';
import { sanityService } from '@/lib/sanityService';

const Footer = async () => {
    
  const data = await sanityService.getAllLogosFooter();
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
      <section className="footerContainer flex flex-col lg:flex-row items-center justify-center w-full bg-transparent border-t border-black font-karla text-sm gap-10 lg:gap-0 py-10 lg:py-14 px-4 lg:px-[100px]">
        {data.logos.map((logo: any) => (
          <div key={logo._key} className="footerItem w-full lg:w-1/4 flex items-center justify-center">
            <Image 
              src={logo.url} 
              alt={logo.alt || "Logo colaborador"} 
              width={300}    
              height={130}
              className="object-contain max-h-[130px] w-auto" 
            />
          </div>
        ))}
      </section>
    </footer>
  );
}

export default Footer;