import { motion } from "framer-motion";

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

export const Section = ({ background, children, rotate }) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{
        background,
        rotate,
        padding: PADDING,
      }}
    >
      {children}
    </motion.div>
  );
};
