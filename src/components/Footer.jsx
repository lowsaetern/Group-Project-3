import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import logo from "../assets/images/logo.png";

const footerAboutLinks = [
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
    path: "/about",
  },
];
const footerCustomerLinks = [
  {
    display: "Profile",
    path: "/",
  },
  {
    display: "Shopping Cart",
    path: "/",
  },
  {
    display: "FAQs",
    path: "/",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer_title">
              <strong> Thrift Shop</strong>
            </div>
            <div className="footer_content">
              <p>Group Project 3</p>
              <p>UCD Bootcamp</p>
              <p>E-commerce</p>
            </div>
          </div>
          <div>
            <div className="footer_title">
              <strong> Navigation</strong>
            </div>
            <div className="footer_content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer_title">
              <strong> Customer Links </strong>
            </div>
            <div className="footer_content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer_about">
            <p>
              <Link to="/">
                <img src={logo} className="footer_logo" alt="" />
              </Link>
            </p>
            <p>
              Low Saetern Nicole Verhulp Nathan Hur Christopher Mata
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
