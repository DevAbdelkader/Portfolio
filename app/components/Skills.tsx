import Image from "next/image"
import {FaLaravel} from "react-icons/fa"
import { GrMysql } from "react-icons/gr";
import InfoCard from "./InfoCard"
import Project from "./Project";

const Skills = ({ active }: { active: boolean }) => {
  return (
    <div className="info-grid" hidden={!active}>

      <InfoCard title="Bio" tailwind="sm:col-span-8">
        <p className="font-alata">
          Hello, I’m Abdelkader Mohamed, currently a full-stack web developer with a strong foundation in both design and development. I’ve built multiple projects using pure tech stack and languages for educational depth, as well as modern tools and frameworks for production-ready applications, always with a focus on security, performance, and subtle UX enhancements.
          <br />
          Beyond web development, I’m actively exploring topics like computer hardware, kernel development, and computer graphics, areas that fuel my curiosity and expand my understanding, even if I don’t work with them professionally yet. Always trying to level up.
        </p>
      </InfoCard>

      <InfoCard title="Tech Stack">
        <div className="badge-container">
          <div className="special-badge badge-[#ddd]"><Image src="/images/icons/c-plain.svg" width={16} height={16} alt="c programming language" />C Lang</div>
          <div className="special-badge badge-[#ddd]"><Image src="/images/icons/php.svg" width={16} height={16} alt="php" />PHP 8</div>
          <div className="special-badge badge-[#ddd]"><FaLaravel size={16} color="#F05340" />Laravel</div>
          <div className="special-badge badge-[#ddd]"><GrMysql size={16} />MySQL</div>
          <div className="special-badge badge-[#ddd]"><Image src="/images/icons/js.svg" width={16} height={16} alt="javascript" />Javascript</div>
          <div className="special-badge badge-[#ddd]"><Image src="/images/icons/png/typescript.png" width={16} height={16} alt="typescript" />Typescript</div>
          <div className="special-badge badge-[#ddd]"><Image src="/images/icons/react.svg" width={16} height={16} alt="react js" />React JS</div>
          <div className="special-badge badge-[#ddd]"><Image src="/images/icons/png/tailwind.png" width={16} height={16} alt="tailwind" />Tailwind</div>
          <div className="special-badge badge-[#ddd]"><Image src="/images/icons/png/threejs.png" width={16} height={16} alt="three js" />Three JS</div>
          <div className="special-badge badge-[#ddd]"><Image src="/images/icons/nextjs.svg" width={16} height={16} alt="next js" />Next 15</div>
          <div className="special-badge badge-[#ddd]">HTML & CSS</div>
        </div>
      </InfoCard>

      <InfoCard title="Projects" tailwind="sm:col-span-12">
        <div className="grid grid-cols-8 gap-4">

          <Project
            title="Website Project"
            badge="Website"
            image={{
              src: "/images/thumbnail.jpg"
            }}
            tailwind="project-[#cfc763]"
          />

          <Project
            title="Website Project"
            badge="Website"
            image={{
              src: "/images/thumbnail.jpg"
            }}
            tailwind="project-[#70a3cc]"
          />

          <Project
            title="Library Name"
            badge="Javascript Library"
            image={{
              src: "/images/thumbnail.jpg"
            }}
            tailwind="project-[#a4445b]"
            wide
          >
            <p>
              lorem lorem lorem lorem loremlorem lorem lorem lorem loremlorem lorem lorem lorem loremlorem lorem lorem lorem
            </p>
          </Project>

        </div>
      </InfoCard>
    </div>
  )
}

export default Skills
