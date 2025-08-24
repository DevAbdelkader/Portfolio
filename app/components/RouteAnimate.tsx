import * as motion from "motion/react-client"

const RouteAnimate = ({id, className, children}: {id?: string, className?: string, children?: React.ReactNode}) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className={className} id={id}>
      {children}
    </motion.div>
  )
}

export default RouteAnimate
