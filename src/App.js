import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import "antd/dist/antd.css";
import {
  Navbar,
  Carousel,
  WhyChoose,
  HowItWorks,
  OurProducts,
  BankingPartners,
  CustomerFeedback,
  DownloadApp,
  Footer,
  DSASignUp,
} from "./components";

function App() {
  const [dsaSignUpModalVisible, setDsaSignUpVisible] = useState(false);

  return (
    <div className="App">
      <DSASignUp
        dsaSignUpModalVisible={dsaSignUpModalVisible}
        setDsaSignUpVisible={setDsaSignUpVisible}
      />
      <div>
        <Carousel
          dsaSignUpModalVisible={dsaSignUpModalVisible}
          setDsaSignUpVisible={setDsaSignUpVisible}
        />
      </div>
      <div>
        <WhyChoose />
      </div>
      <div className="expAdvice">
        <h4>Unable to decide or want our expert advice?</h4>
        <button className="getInTouchBtn">GET IN TOUCH WITH US</button>
      </div>
      <div>
        <HowItWorks />
      </div>
      <div className="expAdvice">
        <h4>
          <i className="fas fa-phone-alt"></i> Call us on +91 90000 90000{"   "}
          <strong> OR </strong>
        </h4>
        <button className="getInTouchBtn callBackBtn">GET A CALL BACK</button>
      </div>
      <div>
        <OurProducts />
      </div>
      <div>
        <BankingPartners />
      </div>
      <div>
        <CustomerFeedback />
      </div>
      <div>
        <DownloadApp />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
