import React from "react";
import classes from "./ourProducts.module.css";
import instLoan from "../../assets/images/IL_icon@2x.png";
import persLoan from "../../assets/images/PL_icon.png";
import smeLoan from "../../assets/images/SME_Icon@2x.png";
import homeLoan from "../../assets/images/HL_icon@2x.png";
import lapLoan from "../../assets/images/LAP_icon@2x.png";
import laiLoan from "../../assets/images/LAI_icon@2x.png";
import elLoan from "../../assets/images/EL_icon@2x.png";
import gldLoan from "../../assets/images/GL_icon@2x.png";
import ccLoan from "../../assets/images/CC_icon@2x.png";

const OurProducts = (props) => {
  const {
    ourProductsWrapper,
    ourProductsItem,
    ourProductsItemImg,
    applyNowBtn,
    ourProductsItemsWrapper,
    title,
  } = classes;

  return (
    <div className={ourProductsWrapper}>
      <h3 className={title}>OUR PRODUCTS</h3>
      <div className={ourProductsItemsWrapper}>
        <div className={ourProductsItem}>
          <div className={ourProductsItemImg}>
            <img src={instLoan} alt="img" />
          </div>
          <h4>INSTANT LOAN</h4>
          <button className={applyNowBtn}>APPLY NOW</button>
        </div>
        <div className={ourProductsItem}>
          <div className={ourProductsItemImg}>
            <img src={persLoan} alt="img" />
          </div>
          <h4>PERSONAL LOAN</h4>
          <button className={applyNowBtn}>APPLY NOW</button>
        </div>
        <div className={ourProductsItem}>
          <div className={ourProductsItemImg}>
            <img src={smeLoan} alt="img" />
          </div>
          <h4>SME LOAN</h4>
          <button className={applyNowBtn}>APPLY NOW</button>
        </div>
        <div className={ourProductsItem}>
          <div className={ourProductsItemImg}>
            <img src={homeLoan} alt="img" />
          </div>
          <h4>HOME LOAN</h4>
          <button className={applyNowBtn}>APPLY NOW</button>
        </div>
        <div className={ourProductsItem}>
          <div className={ourProductsItemImg}>
            <img src={lapLoan} alt="img" />
          </div>
          <h4>LOAN AGAINST PROPERTY</h4>
          <button className={applyNowBtn}>APPLY NOW</button>
        </div>
        <div className={ourProductsItem}>
          <div className={ourProductsItemImg}>
            <img src={laiLoan} alt="img" />
          </div>
          <h4>LOAN AGAINST INVESTMENT</h4>
          <button className={applyNowBtn}>APPLY NOW</button>
        </div>
        <div className={ourProductsItem}>
          <div className={ourProductsItemImg}>
            <img src={elLoan} alt="img" />
          </div>
          <h4>EDUCATION LOAN</h4>
          <button className={applyNowBtn}>APPLY NOW</button>
        </div>
        <div className={ourProductsItem}>
          <div className={ourProductsItemImg}>
            <img src={gldLoan} alt="img" />
          </div>
          <h4>GOLD LOAN </h4>
          <button className={applyNowBtn}>APPLY NOW</button>
        </div>
        <div className={ourProductsItem}>
          <div className={ourProductsItemImg}>
            <img src={ccLoan} alt="img" />
          </div>
          <h4>CREDIT CARD</h4>
          <button className={applyNowBtn}>APPLY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
