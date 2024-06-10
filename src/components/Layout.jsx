import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    latest > previous && latest > 150 ? setHidden(true) : setHidden(false);
  });

  return (
    <>
      <motion.nav
        variants={{ 
          visible: { y: 0 },
          hidden: { y: "-100%"}
        }}
        animate={ hidden ? "hidden" : "visible" }
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 30 }}
      >
        <div className="nav_bar">
          <Link to="/" className={location.pathname === "/" ? "active_nav_bar_item" : "nav_bar_item"}>
            <div>Home</div>
          </Link>
          <Link to="/gestures" className={location.pathname === "/gestures" ? "active_nav_bar_item" : "nav_bar_item"}>
            <div>Gestures</div>
          </Link>
          <Link to="/animation-controls" className={location.pathname === "/animation-controls" ? "active_nav_bar_item" : "nav_bar_item"}>
            <div>Animation Controls</div>
          </Link>
          <Link to="/view-based-animations" className={location.pathname === "/view-based-animations" ? "active_nav_bar_item" : "nav_bar_item"}>
            <div>View Based Animations</div>
          </Link>
          <Link to="/scroll-based-animations" className={location.pathname === "/scroll-based-animations" ? "active_nav_bar_item" : "nav_bar_item"}>
            <div>Scroll Based Animations</div>
          </Link>
          <Link to="/horizontal-scroll-carousel" className={location.pathname === "/horizontal-scroll-carousel" ? "active_nav_bar_item" : "nav_bar_item"}>
            <div>Horizontal Scroll Carousel</div>
          </Link>
          <Link to="/layered-parallax-scroll" className={location.pathname === "/layered-parallax-scroll" ? "active_nav_bar_item" : "nav_bar_item"}>
            <div>Layered Parallax Scroll</div>
          </Link>
          <Link to="/advanced-sortable-drag-and-drop" className={location.pathname === "/advanced-sortable-drag-and-drop" ? "active_nav_bar_item" : "nav_bar_item"}>
            <div>Notion Kanban Drag & Drop</div>
          </Link>
          <Link to="/complex-animations-with-framer-motion" className={location.pathname === "/complex-animations-with-framer-motion" ? "active_nav_bar_item" : "nav_bar_item"}>
            <div>Complex Animations</div>
          </Link>
          <Link to="/scroll-animations-masterclass" className={location.pathname === "/scroll-animations-masterclass" ? "active_nav_bar_item" : "nav_bar_item"}>
            <div>Scroll Animations Masterclass</div>
          </Link>
          <Link to="/aurora-effect" className={location.pathname === "/aurora-effect" ? "active_nav_bar_item" : "nav_bar_item"}>
            <div>Aurora Effect</div>
          </Link>
        </div>
      </motion.nav>

      <Outlet />
    </>
  )
};

export default Layout;