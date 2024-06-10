import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <nav>
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
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;