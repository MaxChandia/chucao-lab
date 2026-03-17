// En: web/src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar/navbar'; 
import Footer from '@/components/footer/footer'; 
import { JetBrains_Mono } from 'next/font/google';
import { Karla } from 'next/font/google';
import ChucaoSound from '@/components/sound/chucaosound';

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-jetbrains' 
});

const karla = Karla({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-karla' 
});

export const metadata: Metadata = {
  title: 'ChucaoLab',
  description: 'Laboratorio de Paisaje Sonoro',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${jetbrains.variable} ${karla.variable}`}>
      <body className="bg-white bg-no-repeat bg-[radial-gradient(circle_at_top_left,_theme(colors.yellow.100),_transparent_40%),radial-gradient(circle_at_top_right,_theme(colors.pink.100),_transparent_40%),radial-gradient(circle_at_bottom_left,_theme(colors.cyan.100),_transparent_50%)]">
        <Navbar />
        
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}