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
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 30 }}
      >
        <div className="nav_bar">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "active_nav_bar_item" : "nav_bar_item"
            }
          >
            <div>Home</div>
          </Link>
          <Link
            to="/gestures"
            className={
              location.pathname === "/gestures"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Gestures</div>
          </Link>
          <Link
            to="/animation-controls"
            className={
              location.pathname === "/animation-controls"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Animation Controls</div>
          </Link>
          <Link
            to="/view-based-animations"
            className={
              location.pathname === "/view-based-animations"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>View Based Animations</div>
          </Link>
          <Link
            to="/scroll-based-animations"
            className={
              location.pathname === "/scroll-based-animations"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Scroll Based Animations</div>
          </Link>
          <Link
            to="/horizontal-scroll-carousel"
            className={
              location.pathname === "/horizontal-scroll-carousel"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Horizontal Scroll Carousel</div>
          </Link>
          <Link
            to="/layered-parallax-scroll"
            className={
              location.pathname === "/layered-parallax-scroll"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Layered Parallax Scroll</div>
          </Link>
          <Link
            to="/advanced-sortable-drag-and-drop"
            className={
              location.pathname === "/advanced-sortable-drag-and-drop"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Notion Kanban Drag & Drop</div>
          </Link>
          <Link
            to="/complex-animations-with-framer-motion"
            className={
              location.pathname === "/complex-animations-with-framer-motion"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Complex Animations</div>
          </Link>
          <Link
            to="/scroll-animations-masterclass"
            className={
              location.pathname === "/scroll-animations-masterclass"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Scroll Animations Masterclass</div>
          </Link>
          <Link
            to="/aurora-effect"
            className={
              location.pathname === "/aurora-effect"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Aurora Effect</div>
          </Link>
          <Link
            to="/text-image-parallax"
            className={
              location.pathname === "/text-image-parallax"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Text Image Parallax</div>
          </Link>
          <Link
            to="/mouse-hover-tilt-card-effect"
            className={
              location.pathname === "/mouse-hover-tilt-card-effect"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Hover Tilt Card</div>
          </Link>
          <Link
            to="/swipe-carousel"
            className={
              location.pathname === "/swipe-carousel"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Swipe Carousel</div>
          </Link>
          <Link
            to="/shifting-dropdown"
            className={
              location.pathname === "/shifting-dropdown"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Shifting DropDown</div>
          </Link>
          <Link
            to="/flyout-link"
            className={
              location.pathname === "/flyout-link"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Flyout Link</div>
          </Link>
          <Link
            to="/modern-grid-landing-page"
            className={
              location.pathname === "/modern-grid-landing-page"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Modern Grid Landing Page</div>
          </Link>
          <Link
            to="/hover-image-links"
            className={
              location.pathname === "/hover-image-links"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Hover Image Links</div>
          </Link>
          <Link
            to="/stripe-animated-links"
            className={
              location.pathname === "/stripe-animated-links"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Stripe's Animated Links</div>
          </Link>
          <Link
            to="/animated-slide-navbar"
            className={
              location.pathname === "/animated-slide-navbar"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Animated Slide Navbar</div>
          </Link>
          <Link
            to="/button-hover-animation"
            className={
              location.pathname === "/button-hover-animation"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Button Hover Animation</div>
          </Link>
          <Link
            to="/animated-hamburger-menu-button"
            className={
              location.pathname === "/animated-hamburger-menu-button"
                ? "active_nav_bar_item"
                : "nav_bar_item"
            }
          >
            <div>Animated Hamburger</div>
          </Link>
        </div>
      </motion.nav>
      <Outlet />
    </>
  );
};

export default Layout;
