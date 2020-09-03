import React from "react";
import classes from "./howItWorks.module.css";
import expIcon from "../../assets/images/EG_Icon@2x.png";
import checkEligIcon from "../../assets/images/CE_Icon@2x.png";
import compareIcon from "../../assets/images/CCTBO_Icon@2x.png";
import applyOnlineIcon from "../../assets/images/AOUD_Icon@2x.png";
import celebrateIcon from "../../assets/images/CYD_Icon@2x.png";
const HowItWorks = (props) => {
  const {
    howItWorksWrapper,
    howItWorksItemsWrapper,
    howItWorksItem,
    howItWorksItemImg,
    howItWorksChevron,
    colorOverlay,
    title,
  } = classes;

  return (
    <div className={howItWorksWrapper}>
      <div className={colorOverlay}>
        <h3 className={title}>How It Works</h3>
        <div className={howItWorksItemsWrapper}>
          <div className={howItWorksItem}>
            <div className={howItWorksItemImg}>
              <img src={expIcon} alt="expert" />
            </div>
            <h4>Expert Guidance</h4>
            <p>
              AI based proprietary tool guides you to choose the right type of
              loan product to fulfill your dreams
            </p>
          </div>
          <div className={`${howItWorksItem} ${howItWorksChevron}`}>
            <i className="fas fa-chevron-right"></i>
          </div>

          <div className={howItWorksItem}>
            <div className={howItWorksItemImg}>
              <img src={checkEligIcon} alt="expert" />
            </div>

            <h4>Check Eligibility</h4>
            <p>
              Check your eligibility for loan amount and terms based on your
              occupation, income and other factors
            </p>
          </div>
          <div className={`${howItWorksItem} ${howItWorksChevron}`}>
            <i className="fas fa-chevron-right"></i>
          </div>

          <div className={howItWorksItem}>
            <div className={howItWorksItemImg}>
              <img src={compareIcon} alt="expert" />
            </div>
            <h4>Compare & choose the best offers</h4>
            <p>
              Our technology shortlists the best offers from various lenders and
              their terms as per your requirements
            </p>
          </div>
          <div className={`${howItWorksItem} ${howItWorksChevron}`}>
            <i className="fas fa-chevron-right"></i>
          </div>

          <div className={howItWorksItem}>
            <div className={howItWorksItemImg}>
              <img src={applyOnlineIcon} alt="expert" />
            </div>
            <h4>Apply online & upload documents</h4>
            <p>
              Submit your application and documents directly from your app to
              lenders
            </p>
          </div>
          <div className={`${howItWorksItem} ${howItWorksChevron}`}>
            <i className="fas fa-chevron-right"></i>
          </div>

          <div className={howItWorksItem}>
            <div className={howItWorksItemImg}>
              <img src={celebrateIcon} alt="expert" />
            </div>
            <h4>Celebrate your dreams</h4>
            <p>
              Track the status of your application from your app and
              disbursement directly to your bank account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
