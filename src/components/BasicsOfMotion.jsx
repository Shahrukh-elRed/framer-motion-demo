import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BasicsOfMotion = () => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className="basics_of_motion">
            <motion.button onClick={() => setIsVisible(!isVisible)} className="example_button" layout>
                Show / Hide
            </motion.button>
            <AnimatePresence mode="popLayout">
                {
                    isVisible && 
                        <motion.div 
                            initial={{
                                rotate: "0deg",
                                scale: 0
                            }}
                            animate={{
                                rotate: "180deg",
                                scale: 1
                            }}
                            exit={{
                                rotate: "0deg",
                                scale: 0
                            }}
                            transition={{
                                duration: 1,
                                ease: "backInOut"
                            }}
                            className="basics_of_motion_square">  
                        </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default BasicsOfMotion