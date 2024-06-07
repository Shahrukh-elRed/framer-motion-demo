import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimationControls from './components/AnimationControls';
import BasicsOfMotion from './components/BasicsOfMotion';
import Gestures from './components/Gestures';
import ScrollAnimations from './components/ScrollAnimations';
import ViewBasedAnimations from './components/ViewBasedAnimations';
import Error404Page from './components/Error404Page';
import Layout from './components/Layout';
import HorizontalScrollCarouselPage from './components/HorizontalScrollCarouselPage/HorizontalScrollCarouselPage';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<BasicsOfMotion />} />
                <Route path="gestures" element={<Gestures />} />
                <Route path="animation-controls" element={<AnimationControls />} />
                <Route path="view-based-animations" element={<ViewBasedAnimations />} />
                <Route path="scroll-based-animations" element={<ScrollAnimations />} />
                <Route path="horizontal-scroll-carousel" element={<HorizontalScrollCarouselPage />} />
                <Route path="*" element={<Error404Page />} />
            </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing