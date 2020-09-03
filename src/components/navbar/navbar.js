import React from "react";
import classes from "./navbar.module.css";
import logo from "../../assets/images/logo.png";
import navIcon from "../../assets/images/icon_navigation_menu@2x.png";

const Navbar = (props) => {
  const {
    navWrapper,
    logoContainer,
    dropdownContentWrapper,
    dropdownUl,
    dropdownItem,
    navLeft,
    navRight,
    navItemWrapper,
    applyBtn,
    navItem,
    navLeftUl,
    navRightUl,
  } = classes;
  return (
    <div className={navWrapper}>
      <div className={logoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={navItemWrapper}>
        <div className={navLeft}>
          <ul className={navLeftUl}>
            <li className={navItem}>
              <a href="#">
                Dreams{" "}
                <span>
                  <i class="fas fa-chevron-down"></i>
                </span>
              </a>
            </li>
            <li className={navItem}>
              <a href="#">
                Loans{" "}
                <span>
                  <i class="fas fa-chevron-down"></i>
                </span>
              </a>
              <div className={dropdownContentWrapper}>
                <ul className={dropdownUl}>
                  <li className={dropdownItem}>INSTANT LOAN</li>
                  <li className={dropdownItem}>PERSONAL LOAN</li>
                  <li className={dropdownItem}>SME LOAN</li>
                  <li className={dropdownItem}>HOME LOAN</li>
                  <li className={dropdownItem}>LOAN AGAINST PROPERTY</li>
                  <li className={dropdownItem}>LOAN AGAINST INVESTMENT</li>
                  <li className={dropdownItem}>EDUCATIONAL LOAN</li>
                  <li className={dropdownItem}>GOLD LOAN</li>
                  <li className={dropdownItem}>CREDIT CARDS</li>
                </ul>
              </div>
            </li>
            <li className={navItem}>
              <a href="#">
                Tools{" "}
                <span>
                  <i className="fas fa-chevron-down"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className={navRight}>
          <ul className={navRightUl}>
            <li className={navItem}>
              <a href="#">Free Credit Score</a>
            </li>
            <li className={navItem}>
              <a href="#">Partner Now</a>
            </li>
            <li className={navItem}>Login</li>
            <li className={navItem}>
              <button className={applyBtn}>Apply Now</button>
            </li>
            <li className={navItem}>
              <img src={navIcon} alt="nav" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
