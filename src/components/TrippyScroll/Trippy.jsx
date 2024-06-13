import { motion } from "framer-motion";
import { Section } from "./Section";

const NUM_SECTIONS = 25;

const Trippy = ({ rotate }) => {
  const generateSections = (count, color, rotate) => {
    if (count === NUM_SECTIONS) {
      return <></>;
    }

    const nextColor = color === "black" ? "white" : "black";

    return (
      <Section rotate={rotate} background={color}>
        {generateSections(count + 1, nextColor, rotate)}
      </Section>
    );
  };

  return (
    <motion.div className="absolute inset-0 overflow-hidden bg-black">
      {generateSections(0, "black", rotate)}
    </motion.div>
  );
};

export default Trippy;
