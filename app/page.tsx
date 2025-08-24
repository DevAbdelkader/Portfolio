import RouteAnimate from "./components/RouteAnimate";

import Link from "next/link"
import CanvasContainer from "@/app/components/CanvasContainer"

import { BsStars as Star } from "react-icons/bs"


export default function Home() {
  return (
    <RouteAnimate id="welcome" className="@container flex flex-col m-[0_auto] items-center pt-[80px] pb-[300px] min-h-[100dvh] overflow-hidden px-2 bg-mobile sm:bg-desktop relative">

      <CanvasContainer />

      <div className="text-[calc(14px+8vw)] @max-sm:text-3xl md:text-8xl font-major-display bg-gradient-to-t from-[#D87979]/0 via-[#D87979]/20 to-[#993232]/95 bg-clip-text text-transparent tracking-widest">Abdelkader</div>
      <div className="badge badge-soft bg-[#FCB87A]/10 border-0 mt-2 text-sm @max-sm:text-xs sm:text-lg text-[#FCB87A]/60 font-alatsi tracking-[calc(.25px+1vw)] sm:tracking-[10px] uppercase"><Star />Full stack web developer<Star /></div>
      <p className="max-w-xs text-[#FF9D9D]/60 tracking-widest text-shadow-md text-shadow-black/40 text-[calc(12px+1vw)] sm:text-xl capitalize text-center mt-9 z-2">
        Precision meets imagination
      </p>

      <div className="flex gap-5 mt-28 flex-wrap justify-center z-2">
        <Link href="/?tab=skills#about" className="btn-0 @max-sm:btn-sm">Explore Projects</Link>
        <Link href="/#about" className="btn-0 @max-sm:btn-sm">About Me</Link>
      </div>
    
    </RouteAnimate>
  );
}

