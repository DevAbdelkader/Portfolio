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
              title="Fish Finder"
              badge="Website"
              image={{
                src: "/images/projects/FishFinder-2.jpg"
              }}
              repo="https://github.com/DevAbdelkader/fish-finder"
              tailwind="project-[#93d1de]"
            >
              <p>
                FishFinder (virtual) company. Lightweight web app that helps you explore a curated collection of 3D fish models and related assets.
              </p>
            </Project>

            <Project
              title="GLB To Image"
              badge="Website"
              image={{
                src: "/images/projects/glb-to-image.jpg"
              }}
              repo="https://github.com/DevAbdelkader/glb-to-image"
              tailwind="project-[#d4a4f8]"
            >
              <p>
                A small client-side web app that lets you upload a GLB/GLTF 3D model, preview it interactively, and capture/export images from the viewport.
              </p>
            </Project>

            <Project
              title="My Shelf"
              badge="Website"
              image={{
                src: "/images/projects/My-Shelf.jpg"
              }}
              repo="https://github.com/DevAbdelkader/My-Shelf"
              tailwind="project-[#c4939b]"
            >
              <p>
                My-Shelf is a books management web application that provides an interface to view, search, and add books using their ISBN. It fetches book details from the ISBN Search API and stores data locally for offline access.
              </p>
            </Project>

          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Page
