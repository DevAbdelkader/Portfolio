import Link from 'next/link'
import { FiMenu } from "react-icons/fi"
import {FaInfo as Info, FaHome as Home} from "react-icons/fa"
import { LuMessageCircle as Message } from "react-icons/lu"
import { LiaProjectDiagramSolid as Diagram } from "react-icons/lia"

const Navbar = () => {
  return (
    <div className="navbar sm:divide-x-1 sm:divide-white/10 w-full max-w-[95%] sm:w-fit min-h-0 p-0.5 sm:p-1.5 pl-4 sm:pl-6  bg-[#421d0b]/95 border-[#642c10]/100 border-1 rounded-full gap-4 shadow-sm -translate-x-1/2 ml-[50%]">
      
      <div className="navbar-start gap-3 pr-4">
        <div className="inline-grid *:[grid-area:1/1]">
          <div className="status status-md sm:status-lg status-success animate-ping"></div>
          <div className="status status-md sm:status-lg status-success"></div>
        </div>
        <span className="font-bruno text-xs">Avaliable</span>
      </div>
      
      <div className="navbar-center text-white/50  pr-4 gap-3 font-alatsi text-sm uppercase hidden sm:flex">
        <Link href="/" className="hover:text-white/80">Home</Link>
        <Link href="/projects" className="hover:text-white/80">Projects</Link>
        <Link href="/about" className="hover:text-white/80">About</Link>
        <Link href="/contact" className="hover:text-white/80">Contact</Link>
      </div>
      
      <div className="navbar-end">
        <a className="btn btn-outline btn-sm border-[#FCB87A] text-[#FCB87A] hover:bg-[#FCB87A] hover:text-black max-sm:hidden" href='/files/Abdelkader Mohamed Resume.pdf' download>Download CV</a>
        <div className="dropdown dropdown-end sm:hidden">
          <div role="button" tabIndex={0} className="btn btn-circle btn-ghost sm:hidden hover:bg-amber-900/40 border-0">
            <FiMenu size={18} />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#421d0b]/95 rounded-box z-1 mt-3 w-52 p-2 shadow font-alatsi uppercase">
            <li><Link href="/"><Home size={16} />Home</Link></li>
            <li><Link href="/projects"><Diagram size={16} />Projects</Link></li>
            <li><Link href="/about"><Info size={16} />About</Link></li>
            <li><Link href="/contact"><Message size={16} />Contact</Link></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar
