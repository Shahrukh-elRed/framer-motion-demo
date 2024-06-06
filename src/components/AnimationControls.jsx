import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
    const controls = useAnimationControls();

    const handleClick = () => {
        controls.start("flip");
    }

    return (
        <div className="basics_of_motion">
            <button onClick={handleClick} className="example_button">
                Flip it!
            </button>
            <motion.div 
                variants={{
                    initial: { 
                        rotate: "0deg" 
                    },
                    flip: {
                        rotate: "360deg"
                    }
                }}
                initial="initial"
                animate={controls}
                className="basics_of_motion_square">
            </motion.div>
        </div>
    )
}

export default AnimationControls