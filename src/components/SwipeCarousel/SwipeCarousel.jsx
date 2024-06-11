import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { imgs } from "./carouselImages";
import Images from "./Images";
import Dots from "./Dots";
import GradientEdges from "./GradientEdges";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((prev) => {
          if (prev === imgs.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []); // eslint-disable-line

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="h-[300px] bg-neutral-950" />
      <div className="relative overflow-hidden bg-neutral-950 py-8">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex cursor-grab items-center active:cursor-grabbing"
        >
          <Images imgIndex={imgIndex} imgs={imgs} />
        </motion.div>

        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={imgs} />
        <GradientEdges />
      </div>
    </>
  );
};

export default SwipeCarousel;
