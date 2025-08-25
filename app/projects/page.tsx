import * as motion from "motion/react-client"

import Project from "../components/Project"

const Page = () => {
  return (
    <div id="about" className="min-h-[100dvh] pb-24 pt-12">
      <div className="info-grid">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.25 }
          }}

          className="info-card sm:col-span-12"
        >
          <div className="info-card-title">Projects</div>
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
        </motion.div>
      </div>
    </div>
  )
}

export default Page
