import { backInOut, motion } from "framer-motion";

const BasicsOfMotion = () => {
  return (
    <div className="basics_of_motion">
        <motion.div 
            initial={{
                rotate: "0deg"
            }}
            animate={{
                rotate: "180deg"
            }}
            exit={{
                rotate: "0deg"
            }}
            transition={{
                duration: 1,
                ease: backInOut
            }}
            className="basics_of_motion_square">  
        </motion.div>
    </div>
  )
}

export default BasicsOfMotion