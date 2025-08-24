import { motion } from "motion/react"

const InfoCard = ({ title, tailwind, children }: { title: string, tailwind?: string, children: React.ReactNode }) => {
  return (
    <motion.div 
      className={`info-card ${tailwind ? tailwind : "sm:col-span-4" }`}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: .2 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 }
      }}


    >
      <div className="info-card-title">{title}</div>
      {children}
    </motion.div>
  )
}

export default InfoCard
