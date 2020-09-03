import React from "react";
import classes from "./carousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import instantLoanIcon from "../../assets/images/Instant_loan_icon@2x.png";
import credIcon from "../../assets/images/Credit_Card_icon@2x.png";
import persIcon from "../../assets/images/Personal_loan_icon@2x.png";
import homeIcon from "../../assets/images/Home_loan_icon@2x.png";
import businessIcon from "../../assets/images/business_loan_icon@2x.png";

const Carousel = (props) => {
  const {
    carouselWrapper,
    carouselItem,
    carouseItemOne,
    carouseItemTwo,
    searchBox,
    carouselContent,
    carouselTile,
    searchBoxWrapper,
    inputWrapper,
    carouselTilesWrapper,
    selectEl,
    searchBtn,
    celebrateWrapper,
    messageUsWrapper,
    messageUsTxt,
    whatsappWrapper,
    carouseItemThree,
    carouseItemFour,
  } = classes;
  const settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={carouselWrapper}>
      <div className={carouselContent}>
        <div className={searchBox}>
          <div className={searchBoxWrapper}>
            <div className={inputWrapper}>
              <span>
                <i className="fas fa-rupee-sign"></i>
              </span>
              <input type="text" />
            </div>
            <select className={selectEl}>
              <option value="Home Loan">Home Loan</option>
            </select>
            <button className={searchBtn}>Search</button>
          </div>
          <h3 className={celebrateWrapper}>CELEBRATE YOUR DREAMS</h3>
        </div>
        <div className={carouselTilesWrapper}>
          <ul>
            <li className={carouselTile}>
              <img src={instantLoanIcon} alt="instant-loan" />
              INSTANT LOAN
            </li>
            <li className={carouselTile}>
              <img src={persIcon} alt="instant-loan" />
              PERSONAL LOAN
            </li>
            <li className={carouselTile}>
              <img src={homeIcon} alt="instant-loan" />
              HOME LOAN
            </li>
            <li className={carouselTile}>
              <img src={businessIcon} alt="instant-loan" />
              BUSINESS LOAN
            </li>
            <li className={carouselTile}>
              <img src={credIcon} alt="instant-loan" />
              CREDIT CARD
            </li>
          </ul>
        </div>
        <div className={messageUsWrapper}>
          <span className={messageUsTxt}>Message Us</span>
          <span className={whatsappWrapper}>
            <i className="fab fa-whatsapp"></i>
          </span>
        </div>
      </div>
      <Slider {...settings}>
        <div className={carouselItem} id={carouseItemOne}></div>
        <div className={carouselItem} id={carouseItemTwo}></div>
        <div className={carouselItem} id={carouseItemThree}></div>
        <div className={carouselItem} id={carouseItemFour}></div>
      </Slider>
    </div>
  );
};

export default Carousel;
