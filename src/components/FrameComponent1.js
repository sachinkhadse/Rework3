import ShapeCollector from "./ShapeCollector";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="image-analyzer-parent">
      <div className="image-analyzer">
        <h1 className="choose-your-simple-container">
          <span>{`Choose Your Simple, `}</span>
          <span className="transparent-pricing">Transparent Pricing</span>
        </h1>
      </div>
      <div className="connection-hub">
        <div className="filter-bank">
          <ShapeCollector prop="1" month="Month" prop1="199.00" />
          <div className="shape-collector1">
            <div className="frame-parent1">
              <div className="frame-wrapper">
                <div className="frame-parent2">
                  <div className="frame-parent3">
                    <div className="wrapper">
                      <div className="div3">3</div>
                    </div>
                    <div className="months">Months</div>
                  </div>
                  <button className="audio-transformer">
                    <div className="most-popular">Most Popular</div>
                  </button>
                </div>
              </div>
              <div className="parent">
                <h1 className="h1">₹</h1>
                <div className="data-merger">149.00</div>
                <div className="month2">/month</div>
              </div>
            </div>
            <div className="shape-collector-inner">
              <div className="suitable-for-companies-with-5-parent">
                <div className="suitable-for-companies1">
                  Suitable for companies with 5-10 openings
                </div>
                <div className="frame-parent4">
                  <div className="icons-container">
                    <img className="icons6" alt="" src="/icons.svg" />
                    <div className="interview-ready-candidates1">
                      10 interview-ready candidates
                    </div>
                  </div>
                  <div className="icons-container">
                    <img className="icons6" alt="" src="/icons.svg" />
                    <div className="interview-ready-candidates1">
                      Unlimited job postings
                    </div>
                  </div>
                  <div className="icons-container">
                    <img className="icons8" alt="" src="/icons.svg" />
                    <div className="receive-pre-vetted-profiles1">
                      Receive pre-vetted profiles within 48 hours
                    </div>
                  </div>
                  <div className="icons-container">
                    <img className="icons6" alt="" src="/icons-3.svg" />
                    <div className="interview-ready-candidates1">
                      Dedicated account manager
                    </div>
                  </div>
                  <div className="icons-container">
                    <img className="icons8" alt="" src="/icons-3.svg" />
                    <div className="assistance-with-interview1">
                      Assistance with interview scheduling
                    </div>
                  </div>
                  <div className="icons-container">
                    <img className="icons6" alt="" src="/icons-3.svg" />
                    <div className="interview-ready-candidates1">
                      Custom reports
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="simple-button5">
              <div className="get-started3">Get Started</div>
              <div className="arrow5">
                <img className="vector-icon13" alt="" src="/vector-1.svg" />
                <img className="vector-icon14" alt="" src="/vector-2.svg" />
              </div>
            </div>
          </div>
          <ShapeCollector
            prop="6"
            month="Months"
            prop1="169.00"
            propPadding="0px var(--padding-17xl) 0px var(--padding-16xl-5)"
            propPadding1="0px var(--padding-38xl) 0px var(--padding-38xl-5)"
            propWidth="15px"
            propMinWidth="15px"
            propMinWidth1="58px"
            propMargin="0"
          />
        </div>
        {/* <div className="connection-hub-inner">
          <div className="step-3-wrapper">
            <h3 className="step-3">Step-3</h3>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FrameComponent1;
