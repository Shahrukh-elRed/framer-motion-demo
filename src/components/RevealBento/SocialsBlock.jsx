import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import Block from "./Block";

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <span className="grid h-full place-content-center text-3xl text-white cursor-pointer">
        <SiYoutube />
      </span>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <span className="grid h-full place-content-center text-3xl text-white cursor-pointer">
        <SiGithub />
      </span>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <span className="grid h-full place-content-center text-3xl text-black cursor-pointer">
        <SiTiktok />
      </span>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <span className="grid h-full place-content-center text-3xl text-white cursor-pointer">
        <SiTwitter />
      </span>
    </Block>
  </>
);

export default SocialsBlock;
