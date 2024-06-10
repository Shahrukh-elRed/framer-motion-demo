import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const UseScrollWithContainer = () => {
    const containerRef = useRef(null);
    const targetRef = useRef(null);

    const { scrollXProgress } = useScroll({
      container: containerRef,
      target: targetRef,
      axis: "x",
      offset: ["end start", "start start"],
    });
  
    return (
      <div
        ref={containerRef}
        className="flex w-[calc(100vw - 20px)] overflow-x-auto bg-indigo-500/50 py-8"
      >
        <div className="w-screen shrink-0" />
            <motion.div
            ref={targetRef}
            style={{ opacity: scrollXProgress }}
            className="mx-auto size-48 shrink-0 bg-zinc-50"
            />
        <div className="w-screen shrink-0" />
      </div>
    );
};

export default UseScrollWithContainer