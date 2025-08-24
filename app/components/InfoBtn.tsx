import React from "react"

interface InfoBtnProps extends React.ComponentPropsWithoutRef<'button'> {
  title: string;
  description: string;
  active: boolean;
}


const InfoBtn = ({ title, description, active, ...params }: InfoBtnProps) => {
  return (
    <button className={`info-btn btn-ghost ${active && "info-active"}`} role="button" {...params}>
      <div className="info-btn-title">{title}</div>
      <div className="info-btn-desc">{description}</div>
    </button>
  )
}

export default InfoBtn
