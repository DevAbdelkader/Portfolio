import { motion } from "motion/react"
import Image from "next/image"
import { IoIosCheckmarkCircle as Checkmark } from "react-icons/io"

const ServiceCard = ({ title, icon: { src: icon_src, bg: icon_bg = "bg-[#EF5DA8]" }, info, features, bg = "bg-black/20" }: { title: React.ReactElement | string, icon: { src: string, bg?: string }, info: string, features?: Array<string>, bg?: string  }) => {
  return (
    <motion.div 
      className={`flex flex-col gap-2 col-span-12 @xl:col-span-6 @4xl:col-span-4 sm:col-span-4 rounded-2xl p-3 @xl:p-6 ${bg}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 }
      }}
    >
      <div className={`p-1.5 w-fit rounded-lg ${icon_bg}`}>
        <Image src={icon_src} width={34} height={34} alt="" />
      </div>
      <div className="text-[#D9D9D9] font-alatsi text-2xl uppercase leading-6">{title}</div>
      <p className="text-white/50 mt-1 pb-4 text-sm leading-tight">{info}</p>
      {features && features?.length > 0 && <div className="mt-auto">
        <span className="text-sm text-white/35 pb-2">Key features</span>
        {features?.map((feature, i) => <Feature key={`feature-${i}`}>{feature}</Feature>)}
      </div>}
    </motion.div>
  )
}

const Feature = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-alata text-[#DDDDDD] text-xs flex gap-1 items-center mt-2"><Checkmark size={18} color="#F0E0B6" className="shrink-0" />{
      children
    }</div>
  )
}

export default ServiceCard
