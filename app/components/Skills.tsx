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
          Abdelkader Mohamed, currently a <span className="text-white/70">full-stack web developer</span> with a strong foundation in both design and development. I’ve built multiple projects using pure tech stack and languages for educational depth, as well as modern tools and frameworks for <i className="text-white/70">production-ready applications</i>, always with a focus on <i className="text-white/70">security</i>, <i className="text-white/70">performance</i>, and <i className="text-white/70">subtle UX enhancements</i>.
          <br />
          Beyond web development, I’m actively exploring topics like <i className="text-white/70">cloud computing</i>, <i className="text-white/70">computer hardware</i>, <i className="text-white/70">kernel development</i>, and <i className="text-white/70">computer graphics</i>, areas that fuel my curiosity and expand my understanding, even if I don’t work with them professionally yet. Always trying to level up.
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
    </div>
  )
}

export default Skills
