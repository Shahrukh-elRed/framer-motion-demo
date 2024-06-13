import { useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Trippy from "./Trippy";

const TrippyScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);

  return (
    <div ref={targetRef} className="relative z-0 h-[800vh] bg-neutral-200">
      <div className="sticky top-0 h-screen bg-white">
        <Trippy rotate={rotate} />
      </div>
    </div>
  );
};

export default TrippyScroll;
