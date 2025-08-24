import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";


const alatsiFont = localFont({
  src: "../public/fonts/Alatsi/Alatsi-Regular.ttf",
  weight: "400",
  variable: "--f-alatsi"
})
const alataFont = localFont({
  src: "../public/fonts/Alata/Alata-Regular.ttf",
  weight: "400",
  variable: "--f-alata"
})
const audiowideFont = localFont({
  src: "../public/fonts/Audiowide/Audiowide-Regular.ttf",
  weight: "400",
  variable: "--f-audiowide"
})
const ropaFont = localFont({
  src: [
    {
      path: "../public/fonts/Ropa_Sans/RopaSans-Regular.ttf",
      weight: "400"
    },
    {
      path: "../public/fonts/Ropa_Sans/RopaSans-Italic.ttf",
      style: "italic",
      weight: "400"
    }
  ],
  variable: "--f-ropa-sans"
})
const koulenFont = localFont({
  src: "../public/fonts/Koulen/Koulen-Regular.ttf",
  weight: "400",
  variable: "--f-koulen"
})
const almendraFont = localFont({
  src: [
    {
      path: "../public/fonts/Almendra/Almendra-Regular.ttf",
      weight: "400"
    },
    {
      path: "../public/fonts/Almendra/Almendra-Italic.ttf",
      style: "italic",
      weight: "400"
    }
  ],
  variable: "--f-almendra"
})
const majorDisplayFont = localFont({
  src: "../public/fonts/Major_Mono_Display/MajorMonoDisplay-Regular.ttf",
  weight: "400",
  variable: "--f-major-display"
})
const brunoFont = localFont({
  src: "../public/fonts/Bruno_Ace_SC/BrunoAceSC-Regular.ttf",
  weight: "400",
  variable: "--f-bruno"
})

const myFonts = [alatsiFont, alataFont, audiowideFont, ropaFont, koulenFont, almendraFont, majorDisplayFont, brunoFont];

let myFontsClassName = "";

myFonts.map(font => myFontsClassName += font.variable + " ");

export const metadata: Metadata = {
  title: "DevAbdelkader",
  description: "Abdelkader Mohamed, he is a full-stack web developer with a strong foundation in both design and development. You can find out more information about him on this website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${myFontsClassName}`}>
      <body
        className={`${ropaFont.className} antialiased`}
      >
        <div className="@container max-w-[1366] mx-auto">
          <div className="top-3 sm:top-5 sticky h-0 z-10">
            <Navbar />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
