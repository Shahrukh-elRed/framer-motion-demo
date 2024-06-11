import { motion } from "framer-motion";
import HeaderBlock from "./HeaderBlock";
import SocialsBlock from "./SocialsBlock";
import AboutBlock from "./AboutBlock";
import LocationBlock from "./LocationBlock";
import EmailListBlock from "./EmailListBlock";
import Footer from "./Footer";
import Logo from "./Logo";

const RevealBento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 pt-48 pb-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

export default RevealBento;
