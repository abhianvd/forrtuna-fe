import React from "react";
import classes from "./downloadApp.module.css";
import mobileIcon from "../../assets/images/MobileApp_icon@2x.png";
import qrIcon from "../../assets/images/qr.png";

const DownloadApp = (props) => {
  const {
    downloadAppWrapper,
    leftWrapper,
    rightWrapper,
    title,
    qrTitle,
    getAppWrapper,
    appStore,
    iconWrapper,
    storeName,
    availableTxt,
  } = classes;

  return (
    <div className={downloadAppWrapper}>
      <div className={leftWrapper}>
        <h2 className={title}>
          Download Our <br /> Mobile App
        </h2>
        <img src={mobileIcon} alt="app-img" />
      </div>
      <div className={rightWrapper}>
        <h4 className={qrTitle}>Scan to Download</h4>
        <div>
          <img src={qrIcon} alt="qr-code" />
        </div>
        <div className={getAppWrapper}>
          <div className={appStore}>
            <div className={iconWrapper}>
              <i className="fab fa-app-store-ios"></i>
            </div>
            <h5 className={availableTxt}>
              Available on the <br />
              <span className={storeName}>App Store</span>
            </h5>
          </div>
          <div className={appStore}>
            <div className={iconWrapper}>
              <i className="fab fa-google-play"></i>
            </div>
            <h5 className={availableTxt}>
              Android App on <br />
              <span className={storeName}>Google Play</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
