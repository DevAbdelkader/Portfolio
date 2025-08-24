"use client";

import { useEffect, useState } from "react"
import InfoBtn from "./InfoBtn"
import WhoAmI from "./WhoAmI"
import Skills from "./Skills"
import Services from "./Services"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation";


const InfoSection = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [activeTab, setActiveTab] = useState<string>();
  const handleClick = (tab: string) => {
    setActiveTab(tab);
    router.replace(
      `/about?${tab && `tab=${tab}`}`,
      { scroll: false }
    )
  }

  useEffect(() => {
    const tab: string = params.get("tab") || "who";
    setActiveTab(tab)
  }, [params])



  return (
    <div id="about" className="min-h-[100dvh] pb-36 pt-28">
      <div className="w-full max-w-md mx-auto h-[2px] bg-gradient-to-r from-transparent via-[#beb352]/60 to-transparent"></div>
      
      <div className="flex @sm:gap-2 sm:gap-4 justify-center mt-2 pt-6 pb-6 px-2">

        <InfoBtn active={ activeTab === "skills" } title="Skills" description="Technical Talking" onClick={() => handleClick("skills")} />
        
        <div className="divider divider-horizontal m-0 py-2"></div>
        
        <InfoBtn active={ activeTab === "who" } title="Who am I ?" description="A short about myself" onClick={() => handleClick("who")} />
        
        <div className="divider divider-horizontal m-0 py-2"></div>
        
        <InfoBtn active={ activeTab === "services" } title="Services" description="What can I do?" onClick={() => handleClick("services")} />

      </div>

      <WhoAmI active={activeTab === "who"} />
      <Skills active={activeTab === "skills"} />
      <Services active={activeTab === "services"} />
      
    </div>
  )
}

export default InfoSection
