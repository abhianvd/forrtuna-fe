import React from "react";
import classes from "./footer.module.css";

const Footer = (props) => {
  const {
    footerWrapper,
    footerColumnItem,
    footerItem,
    footerItemsWrapper,
    copyrightWrapper,
    socialIconsWrapper,
    socialItem,
    footerListItem,
    linkedInWrapper,
    twitterWrapper,
    fbWrapper,
    whatsappWrapper,
    instWrapper,
    ytWrapper,
  } = classes;

  return (
    <div className={footerWrapper}>
      <div className={footerItemsWrapper}>
        <div className={footerColumnItem}>
          <h3>Company</h3>
          <ul>
            <li className={footerListItem}>
              <a href="#">About Us</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Founders</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Advisory Board</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Privacy Policy</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Terms & Conditions</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Disclaimer</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className={footerColumnItem}>
          <h3>Services</h3>
          <ul>
            <li className={footerListItem}>
              <a href="#">Instant Loans</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Personal Loans</a>
            </li>
            <li className={footerListItem}>
              <a href="#">SME Loans</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Home Loans</a>
            </li>
            <li className={footerListItem}>
              <a href="#">LAP</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Education Loans</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Credit Cards</a>
            </li>
          </ul>
        </div>
        <div className={footerColumnItem}>
          <h3>Tools</h3>
          <ul>
            <li className={footerListItem}>
              <a href="#">Forrtuna Index</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Eligibility Calculator</a>
            </li>
            <li className={footerListItem}>
              <a href="#">EMI Calculator</a>
            </li>
            <li className={footerListItem}>
              <a href="#">BT Calculator</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Loan Comparison Calculator</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Home Loan Tax Rebate Calculator</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Track Your Application</a>
            </li>
          </ul>
        </div>
        <div className={footerColumnItem}>
          <h3>Contact</h3>
          <ul>
            <li className={footerListItem}>
              <a href="#">Partner with us</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Corporate Office Address</a>
            </li>

            <li className={footerListItem}>
              <a href="#"></a>
            </li>
            <li className={footerListItem}>
              <a href="#">contact@forrtuna.com</a>
            </li>
            <li className={footerListItem}>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={copyrightWrapper}>
        <h4>Copyright &copy; Forrtuna. All Rights Reserved.</h4>
        <div className={socialIconsWrapper}>
          <div className={`${socialItem} ${linkedInWrapper}`}>
            <i className="fab fa-linkedin"></i>
          </div>
          <div className={`${socialItem} ${twitterWrapper}`}>
            <i className="fab fa-twitter"></i>
          </div>
          <div className={`${socialItem} ${fbWrapper}`}>
            <i className="fab fa-facebook-square"></i>
          </div>
          <div className={`${socialItem} ${whatsappWrapper}`}>
            <i className="fab fa-whatsapp"></i>
          </div>
          <div className={`${socialItem} ${instWrapper}`}>
            <i className="fab fa-instagram"></i>
          </div>
          <div className={`${socialItem} ${ytWrapper}`}>
            <i className="fab fa-youtube-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
