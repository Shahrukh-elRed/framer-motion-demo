import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimationControls from "./components/AnimationControls";
import BasicsOfMotion from "./components/BasicsOfMotion";
import Gestures from "./components/Gestures";
import ScrollAnimations from "./components/ScrollAnimationMasterclass/ScrollAnimations";
import ViewBasedAnimations from "./components/ViewBasedAnimations";
import Error404Page from "./components/Error404Page";
import Layout from "./components/Layout";
import HorizontalScrollCarouselPage from "./components/HorizontalScrollCarouselPage/HorizontalScrollCarouselPage";
import LayeredParallaxScroll from "./components/LayeredParallaxScroll/LayeredParallaxScroll";
import NotionKanbanDragDrop from "./components/NotionKanbanDragDrop/NotionKanbanDragDrop";
import ComplexAnimations from "./components/ComplexAnimations/ComplexAnimations";
import AuroraEffect from "./components/AuroraEffect/AuroraEffect";
import TextImageParallax from "./components/TextImageParallax/TextImageParallax";
import HoverTiltCard from "./components/HoverTiltCard/HoverTiltCard";
import SwipeCarousel from "./components/SwipeCarousel/SwipeCarousel";
import ShiftingDropDown from "./components/ShiftingDropDown/ShiftingDropDown";
import FlyoutLinkExample from "./components/FlyoutLinkExample/FlyoutLinkExample";
import RevealBento from "./components/RevealBento/RevealBento";
import HoverImageLinks from "./components/HoverImageLinks/HoverImageLinks";
import StripeAnimatedLinks from "./components/StripeAnimatedLinks/StripeAnimatedLinks";
import SlideTabsExample from "./components/SlideTabsExample/SlideTabsExample";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BasicsOfMotion />} />
          <Route path="gestures" element={<Gestures />} />
          <Route path="animation-controls" element={<AnimationControls />} />
          <Route
            path="view-based-animations"
            element={<ViewBasedAnimations />}
          />
          <Route
            path="scroll-based-animations"
            element={<ScrollAnimations />}
          />
          <Route
            path="horizontal-scroll-carousel"
            element={<HorizontalScrollCarouselPage />}
          />
          <Route
            path="layered-parallax-scroll"
            element={<LayeredParallaxScroll />}
          />
          <Route
            path="advanced-sortable-drag-and-drop"
            element={<NotionKanbanDragDrop />}
          />
          <Route
            path="complex-animations-with-framer-motion"
            element={<ComplexAnimations />}
          />
          <Route
            path="scroll-animations-masterclass"
            element={<ScrollAnimations />}
          />
          <Route path="aurora-effect" element={<AuroraEffect />} />
          <Route path="text-image-parallax" element={<TextImageParallax />} />
          <Route
            path="mouse-hover-tilt-card-effect"
            element={<HoverTiltCard />}
          />
          <Route path="swipe-carousel" element={<SwipeCarousel />} />
          <Route path="shifting-dropdown" element={<ShiftingDropDown />} />
          <Route path="flyout-link" element={<FlyoutLinkExample />} />
          <Route path="modern-grid-landing-page" element={<RevealBento />} />
          <Route path="hover-image-links" element={<HoverImageLinks />} />
          <Route
            path="stripe-animated-links"
            element={<StripeAnimatedLinks />}
          />
          <Route path="animated-slide-navbar" element={<SlideTabsExample />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
