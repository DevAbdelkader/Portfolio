"use client"

import dynamic from "next/dynamic"

const Canvas = dynamic(() => import('./Canvas'),{
  ssr: false,
  loading: () => <span className="loading loading-ring loading-xl absolute left-1/2 -translate-x-1/2 top-1/2"></span>
})

const CanvasContainer = () => {
  return (
    <div className="absolute h-full w-full top-0 left-0"><Canvas /></div>
  )
}

export default CanvasContainer
