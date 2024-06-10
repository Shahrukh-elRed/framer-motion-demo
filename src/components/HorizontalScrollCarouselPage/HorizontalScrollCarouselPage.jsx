import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import { cardData } from "./cardData";

const HorizontalScrollCarouselPage = () => {
    return (
      <div className="bg-neutral-800">
        <div className="flex h-96 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500 pt-24">
            Scroll down
          </span>
        </div>
        <HorizontalScrollCarousel cardData={cardData} />
        <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll up
          </span>
        </div>
      </div>
    )
}

export default HorizontalScrollCarouselPage