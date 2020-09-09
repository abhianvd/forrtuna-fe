import React from "react";
import classes from "./customerFeedback.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ratings from "react-ratings-declarative";
import personIcon from "../../assets/images/person.png";
import arrowIcon from "../../assets/images/Arrow_Icon@2x.png";

function Arrow(props) {
  const { mirrorImg, arrow } = classes;
  const { style, className, onClick, isLeft } = props;
  return (
    <img
      src={arrowIcon}
      onClick={onClick}
      style={style}
      className={`${isLeft ? mirrorImg : ""} ${className} ${arrow}`}
      alt="left-arrow"
    />
  );
}

const CustomerFeedback = (props) => {
  const {
    customerFeedbackWrapper,
    feedbackCarouselWrapper,
    carouselItem,
    feedbackHeader,
    feedbackText,
    feedbackPersonName,
    feedbackPersonImgWrapper,
    feedbackHeaderWrapper,
    sliderContent,
    bottomBorderCenter,
    title,
  } = classes;
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    className: "centerA",
    centerMode: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow isLeft={true} />,
    slidesToShow: 2,
  };

  return (
    <div className={customerFeedbackWrapper}>
      <h3 className={`${title} ${bottomBorderCenter}`}>Customer Feedback</h3>
      <div className={`${feedbackCarouselWrapper} feedbackWrapper`}>
        <Slider {...settings}>
          <div className={`sliderContent`}>
            <h4 className={feedbackPersonName}>Renuka Verma, Bangalore</h4>
            <div className={`${carouselItem} carouselCl`}>
              <Ratings rating={5} widgetRatedColors="#ffffff">
                <Ratings.Widget widgetDimension="24px" />
                <Ratings.Widget widgetDimension="24px" />
                <Ratings.Widget widgetDimension="24px" />
                <Ratings.Widget widgetDimension="24px" />
                <Ratings.Widget widgetDimension="24px" />
              </Ratings>

              <div>
                <h4 className={feedbackHeader}>
                  HDFC Bank Personal Loan Availed in Aug 2020
                </h4>
                <p className={feedbackText}>
                  The process was quick and easy. It was very good. Thanks
                </p>
              </div>
              <div className={feedbackPersonImgWrapper}>
                <img src={personIcon} alt="feedback-by" />
              </div>
            </div>
          </div>
          <div className={`sliderContent`}>
            <h4 className={feedbackPersonName}>Mukesh Singh, Delhi</h4>
            <div className={`${carouselItem} carouselCl`}>
              <Ratings rating={5} widgetRatedColors="#ffffff">
                <Ratings.Widget widgetDimension="24px" />
                <Ratings.Widget widgetDimension="24px" />
                <Ratings.Widget widgetDimension="24px" />
                <Ratings.Widget widgetDimension="24px" />
                <Ratings.Widget widgetDimension="24px" />
              </Ratings>

              <div>
                <h4 className={feedbackHeader}>
                  HDFC Bank Personal Loan Availed in Aug 2020
                </h4>
                <p className={feedbackText}>
                  Loan credited in the account on the given time. Really
                  appreciate your efforts.
                </p>
              </div>
              <div className={feedbackPersonImgWrapper}>
                <img src={personIcon} alt="feedback-by" />
              </div>
            </div>
          </div>
          <div className={`sliderContent`}>
            <h4 className={feedbackPersonName}>Ashish Jaiswal, Allahabad</h4>
            <div className={`${carouselItem} carouselCl`}>
              <Ratings rating={5} widgetRatedColors="#ffffff">
                <Ratings.Widget widgetDimension="24px" />
                <Ratings.Widget widgetDimension="24px" />
                <Ratings.Widget widgetDimension="24px" />
                <Ratings.Widget widgetDimension="24px" />
                <Ratings.Widget widgetDimension="24px" />
              </Ratings>

              <div>
                <h4 className={feedbackHeader}>
                  Yes Bank Personal Loan Availed in Aug 2020
                </h4>
                <p className={feedbackText}>
                  The process was quick and easy. It was very good. Thanks
                </p>
              </div>
              <div className={feedbackPersonImgWrapper}>
                <img src={personIcon} alt="feedback-by" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomerFeedback;
