import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ViewBasedAnimations = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.01 });

    useEffect(() => {
        console.log(" is in view => ", isInView)
    }, [isInView])

    return (
        <div className="view_based_animations_container">
            <motion.div className="view_based_animations_box"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <div
                ref={ref}
                className={`view_based_animations_ref_div ${isInView ? "background-blue" : "background-red"}`}
            />
        </div>
    )
}

export default ViewBasedAnimations