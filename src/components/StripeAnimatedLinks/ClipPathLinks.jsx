import {
  SiAdobe,
  SiApple,
  SiFacebook,
  SiGoogle,
  SiLinkedin,
  SiShopify,
  SiSoundcloud,
  SiSpotify,
  SiTiktok,
} from "react-icons/si";
import LinkBox from "./LinkBox";

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900">
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox Icon={SiGoogle} />
        <LinkBox Icon={SiShopify} />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <LinkBox Icon={SiApple} />
        <LinkBox Icon={SiSoundcloud} />
        <LinkBox Icon={SiAdobe} />
        <LinkBox Icon={SiFacebook} />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox Icon={SiTiktok} />
        <LinkBox Icon={SiSpotify} />
        <LinkBox Icon={SiLinkedin} />
      </div>
    </div>
  );
};

export default ClipPathLinks;
