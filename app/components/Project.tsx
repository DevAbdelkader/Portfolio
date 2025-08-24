interface ProjectProps {
  title: string,
  badge: string,
  image: {
    src: string,
    alt?: string
  },
  tailwind?: string,
  viewPath?: string,
  wide?: boolean,
  children?: React.ReactNode
}

const Project = ({ title, badge, image: { src: imageSrc, alt: imageAlt }, children, tailwind, wide, viewPath = "" }: ProjectProps) => {
  return (
    <div className={`@max-md:project ${wide ? "@md:project-wide" : "@md:project" } ${ tailwind !== undefined ? tailwind : "" }`}>
      <figure>
        <img
          src={imageSrc}
          alt={imageAlt}
        />
      </figure>
      <div className="project-body">
        <div className="project-badge">{badge}</div>
        <div className="project-title">{title}</div>
        {children}
        <div className="project-actions">
          <a className="project-btn" href={viewPath}>View</a>
        </div>
      </div>
    </div>
  )
}

export default Project
