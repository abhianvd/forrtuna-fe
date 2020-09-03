import React from "react";
import logo from "./logo.svg";
import "./App.css";
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
} from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div>
        <Carousel />
      </div>
      <div>
        <WhyChoose />
      </div>
      <div className="expAdvice">
        <h4>Unable to decide or want our expert advice?</h4>
        <button className="getInTouchBtn">Get in touch with us</button>
      </div>
      <div>
        <HowItWorks />
      </div>
      <div className="expAdvice">
        <h4>
          <i className="fas fa-phone-alt"></i> Call us on +91 90000 90000{"   "}
          <strong> OR </strong>
        </h4>
        <button className="getInTouchBtn callBackBtn">Get a call back</button>
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
