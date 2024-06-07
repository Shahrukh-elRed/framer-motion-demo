import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MultiLayerParallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);

    return (
        <div ref={ref} className="w-full h-[110vh] overflow-hidden relative grid justify-center">
            <motion.h1 className="font-bold text-white text-7xl md:text-9xl relative z-10 mt-[18vh]"
                style={{ y: textY }}
            >
                PARALLAX
            </motion.h1>
            <motion.div 
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0 layered_parallax_image_full"
            />
            <div
                className="absolute inset-0 z-20 layered_parallax_image_cropped"
        />
        </div>
    )
}

export default MultiLayerParallax