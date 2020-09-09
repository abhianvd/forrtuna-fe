import React from "react";
import classes from "./whyChoose.module.css";
import dataSec from "../../assets/images/data-security.png";
import cfIcon from "../../assets/images/CF_Icon@2x.png";
import dpIcon from "../../assets/images/DP_icon@2x.png";
import edIcon from "../../assets/images/ED_Icon@2x.png";
import ffIcon from "../../assets/images/FF_icon@2x.png";
import ltIcon from "../../assets/images/LT_icon@2x.png";
import mlIcon from "../../assets/images/MBO_Iocn@2x.png";

const WhyChoose = (props) => {
  const {
    whyChooseWrapper,
    whyChooseRow,
    whyChooseItem,
    whyChooseItemImgWrapper,
    title,
    bottomBorderCenter,
  } = classes;

  return (
    <div className={whyChooseWrapper}>
      <h2 className={`${title} ${bottomBorderCenter}`}>Why Choose Forrtuna</h2>
      <div className={whyChooseRow}>
        <div className={whyChooseItem}>
          <div className={whyChooseItemImgWrapper}>
            <img src={cfIcon} alt="img" />
          </div>
          <h3>CUSTOMER FRIENDLY</h3>
          <p>
            Forrtuna Index (An advanced AI based proprietary tool) guides you to
            select the best product and pathway to fulfill the dreams of your
            loved ones. Celebrate your dreams with Forrtuna.
          </p>
        </div>
        <div className={whyChooseItem}>
          <div className={whyChooseItemImgWrapper}>
            <img src={dpIcon} alt="img" />
          </div>
          <h3>DATA PRIVACY</h3>
          <p>
            Your personal data is absolutely safe with us and shared with
            selected Lenders only. No unwanted calls and data sharing with any
            other agency.
          </p>
        </div>
        <div className={whyChooseItem}>
          <div className={whyChooseItemImgWrapper}>
            <img src={edIcon} alt="img" />
          </div>
          <h3>ENTIRELY DIGITAL</h3>
          <p>
            A complete online process from eligibility check to finding the best
            offers and submission of application directly to Lenders. Online
            tracking of your application.
          </p>
        </div>
      </div>
      <div className={whyChooseRow}>
        <div className={whyChooseItem}>
          <div className={whyChooseItemImgWrapper}>
            <img src={ffIcon} alt="img" />
          </div>
          <h3>EASY AND FAST</h3>
          <p>
            We endeavour to help you in realising your dream from the comfort of
            your office/home. Download our user friendly app to experience our
            Easy process.
          </p>
        </div>
        <div className={whyChooseItem}>
          <div className={whyChooseItemImgWrapper}>
            <img src={ltIcon} alt="img" />
          </div>
          <h3>LATEST TECHNOLOGY</h3>
          <p>
            Check your credit score online, online PAN and Aadhar verification
            and enjoy the seamless process to submit your loan application.
          </p>
        </div>
        <div className={whyChooseItem}>
          <div className={whyChooseItemImgWrapper}>
            <img src={mlIcon} alt="img" />
          </div>
          <h3>MULTIPLE BEST OFFERS</h3>
          <p>
            Choose & apply to attractive / pocket friendly offers from multiple
            vendors with a simple click of the mouse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
