import React from "react";
import classes from "./howItWorks.module.css";
import expIcon from "../../assets/images/EG_Icon@2x.png";
import checkEligIcon from "../../assets/images/CE_Icon@2x.png";
import compareIcon from "../../assets/images/CCTBO_Icon@2x.png";
import applyOnlineIcon from "../../assets/images/AOUD_Icon@2x.png";
import celebrateIcon from "../../assets/images/CYD_Icon@2x.png";
import { Steps } from "antd";
const { Step } = Steps;

const HowItWorks = (props) => {
  const {
    title,
    howItWorksWrapper,
    howItWorksTitleWrapper,
    stepsWrapper,
    worksWrapper,
    howItWorksContentWrapper,
    bottomBorderCenter,
  } = classes;

  return (
    <div className={`${howItWorksWrapper} howItWorksCl`}>
      <h2 className={`${title} ${bottomBorderCenter}`}>How it Works</h2>
      <div className={howItWorksContentWrapper}>
        <div className={howItWorksTitleWrapper}>
          <img
            src="http://themazine.com/html/alons/images/loan-card.png"
            alt=""
          />
        </div>
        <div className={stepsWrapper}>
          <Steps direction="vertical" current={6}>
            <Step
              title="Expert Guidance"
              description="AI based proprietary tool guides you to choose the right type of loan product to fulfill your dreams."
            />
            <Step
              title="Check Eligibility"
              description="Check your eligibility for loan amount and terms based on your occupation, income and other factors"
            />
            <Step
              title="Compare & Choose"
              description="Our technology shortlists the best offers from various lenders and their terms as per your requirements"
            />
            <Step
              title="Apply Online"
              description="Submit your application and documents directly from your app to lenders"
            />
            <Step
              title="Celebrate your dreams"
              description="Track the status of your application from your app and disbursement directly to your bank account."
            />
          </Steps>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
