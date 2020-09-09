import React from "react";
import classes from "./bankingPartners.module.css";
import hdfcIcon from "../../assets/images/hdfc-icon.png";
import iciciIcon from "../../assets/images/icici-icon.png";
import indusIndIcon from "../../assets/images/indusind-icon.png";
import bajajIcon from "../../assets/images/bajaj-icon.jpg";
import axisIcon from "../../assets/images/axis-icon.png";

import tataCapitalIcon from "../../assets/images/tatacapital.jpg";
import kotakIcon from "../../assets/images/kotak.png";
import dhflIcon from "../../assets/images/dhfl.png";
import pnbIcon from "../../assets/images/pnb.png";
import idfcIcon from "../../assets/images/idfc.jpg";
import citiIcon from "../../assets/images/citi@2x.png";
import sbiIcon from "../../assets/images/sbi.png";
import indiaBullsIcon from "../../assets/images/indbulls.png";
import barodaIcon from "../../assets/images/baroda.png";
import rblIcon from "../../assets/images/rbl.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BankingPartners = (props) => {
  const {
    bankingPartnersWrapper,
    bankingPartnersItemWrapper,
    bankingPartnerItem,
    title,
    colorOverlay,
  } = classes;

  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    className: "centerA",
    centerMode: true,
    slidesToShow: 5,
  };

  return (
    <div className={bankingPartnersWrapper}>
      <h3 className={`${title} bottomBorderCenter`}>Banking / NBFC Partners</h3>
      <div className={bankingPartnersItemWrapper}>
        <Slider {...settings}>
          <div className={bankingPartnerItem}>
            <img src={iciciIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={hdfcIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={indusIndIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={axisIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={bajajIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={tataCapitalIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={kotakIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={dhflIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={pnbIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={idfcIcon} alt="banking-partner" />
          </div>

          <div className={bankingPartnerItem}>
            <img src={citiIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={sbiIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={indusIndIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={barodaIcon} alt="banking-partner" />
          </div>
          <div className={bankingPartnerItem}>
            <img src={rblIcon} alt="banking-partner" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BankingPartners;
