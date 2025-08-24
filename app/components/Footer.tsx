import Image from "next/image"

import { IoLogoLinkedin as LinkedIn, IoLogoGithub as Github } from "react-icons/io5"
import { MdEmail as Email } from "react-icons/md"


const Footer = () => {
  return (
    <footer className="footer footer-horizontal sm:footer-vertical footer-center bg-black text-neutral-content p-10">
        <aside>
          <Image src="/images/icon.png" alt="Logo" width={42} height={42} />
          <p>Designed and Developed by Abdelkader</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/dev-abdelkader" target="_blank"><LinkedIn size={18} /></a>
            <a href="https://github.com/DevAbdelkader" target="_blank"><Github size={18} /></a>
            <a href="mailto:dev.abdelkader.m@gmail.com" target="_blank"><Email size={18} /></a>
          </div>
      </nav>
    </footer>
  )
}

export default Footer
