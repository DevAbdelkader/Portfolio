import RouteAnimate from "../components/RouteAnimate"

import * as motion from "motion/react-client"
import { IoLogoLinkedin as LinkedIn, IoLogoGithub as Github } from "react-icons/io5"
import { MdEmail as Email } from "react-icons/md"

const Page = () => {
  return (
    <RouteAnimate id="contact" className="box-content flex flex-col min-h-[100vh] m-[0_auto] items-center py-28 px-2 bg-contact relative">

      <video preload="auto" poster="/images/sky.jpg" playsInline autoPlay loop muted className="absolute top-0 left-0 object-cover -z-[1] w-full h-full">
        <source src="/videos/sky.mp4" type="video/mp4" />
        Your browser does no support the video tag
      </video>

      <h1 className="bg-gradient-to-tl from-[#75363b] via-[#c3777f] to-[#c69daa] bg-clip-text text-transparent font-audiowide text-[calc(18px+2vw)] sm:text-4xl">Contact</h1>
      
      <div className="text-white/50 text-md uppercase">You can reach me out via...</div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: .6 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0 }
        }}
        className="bg-black/80 rounded-3xl mt-20 p-4">
        <ul className="list">
          <li className="list-row">
            <LinkedIn color="#666" size={26} />
            <div className="flex flex-col">
              <div className="text-white/40 uppercase font-ropa-sans">LinkedIn</div>
              <a href="https://www.linkedin.com/in/dev-abdelkader" target="_blank" className="link">Abdelkader Mohamed</a>
            </div>
            <div className="badge badge-sm badge-secondary row-start-2">Recommended</div>
          </li>

          <li className="list-row">
            <Github color="#666" size={26} />
            <div className="flex flex-col">
              <div className="text-white/40 uppercase font-ropa-sans">Github</div>
              <a href="https://github.com/DevAbdelkader" target="_blank" className="link">DevAbdelkader</a>
            </div>
          </li>

          <li className="list-row">
            <Email color="#666" size={26} />
            <div className="flex flex-col">
              <div className="text-white/40 uppercase font-ropa-sans">Email</div>
              <a href="mailto:dev.abdelkader.m@gmail.com" target="_blank" className="link">dev.abdelkader.m@gmail.com</a>
            </div>
          </li>
            
        </ul>
      </motion.div>

    </RouteAnimate>
  )
}

export default Page
