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
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;