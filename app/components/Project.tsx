import Image from "next/image"
import { GoRepoForked } from "react-icons/go"

interface ProjectProps {
  title: string,
  badge: string,
  image: {
    src: string,
    alt?: string
  },
  tailwind?: string,
  viewPath?: string,
  repo?: string,
  wide?: boolean,
  children?: React.ReactNode
}

const Project = ({ title, badge, image: { src: imageSrc, alt: imageAlt }, children, tailwind, wide, viewPath = "", repo }: ProjectProps) => {
  return (
    <div className={`@max-md:project ${wide ? "@md:project-wide" : "@md:project" } ${ tailwind !== undefined ? tailwind : "" }`}>
      <figure>
        <Image
          src={imageSrc}
          alt={imageAlt || ''}
          width={425}
          height={300}
        />
      </figure>
      <div className="project-body">
        <div className="flex gap-3 items-center">
          <div className="project-badge">{badge}</div>
          <div className="project-title">{title}</div>
        </div>
        {children}
        <div className="project-actions">
          { viewPath && <a className="project-btn" href={viewPath}>View</a> }
          { repo && <a 
            className="link link-hover text-white/60 items-center gap-2 inline-flex text-sm"
            href={repo}
            ><GoRepoForked size={16} />GitHub Repo</a>}
        </div>
      </div>
    </div>
  )
}

export default Project
