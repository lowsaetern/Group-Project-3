import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/logo.png";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Catalog",
    path: "/catalog",
  },
  {
    display: "Profile",
    path: "/profile",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();

  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {};
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header shrink" ref={headerRef}>
      <div className="container">
        <div className="header_logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header_menu">
          <div className="header_menu_mobile-toggle" onClick={menuToggle}>
            <i class="bx bx-menu-alt-left"></i>
          </div>
          <div className="header_menu_left" ref={menuLeft}>
            <div className="header_menu_left_close" onClick={menuToggle}>
              <i class="bx bx-chevron-left"></i>
            </div>

            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header_menu_item
            header_menu_left_item ${index === activeNav} ? 'active' : ''}`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header_menu_right">
            <div className="header_menu_item header_menu_right_item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header_menu_item header_menu_right_item">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            <div className="header_menu_item header_menu_right_item">
              <Link to="http://localhost:3001/register"></Link>
              <i className="bx bx-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
