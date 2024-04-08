import { useMemo } from "react";
import "./ShapeCollector.css";

const ShapeCollector = ({
  prop,
  month,
  prop1,
  propPadding,
  propPadding1,
  propWidth,
  propMinWidth,
  propMinWidth1,
  propMargin,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const audioClustererStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const dataFusionTreeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const monthStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div1Style = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className="shape-collector">
      <div className="image-clusterer-wrapper" style={frameDiv1Style}>
        <div className="image-clusterer">
          <div className="audio-clusterer" style={audioClustererStyle}>
            <div className="sorting-station">
              <div className="data-fusion-tree" style={dataFusionTreeStyle}>
                <div className="div" style={divStyle}>
                  {prop}
                </div>
              </div>
              <div className="month" style={monthStyle}>
                {month}
              </div>
            </div>
          </div>
          <div className="connection-analyzer">
            <div className="div1" style={div1Style}>
              ₹
            </div>
            <div className="div2">{prop1}</div>
            <div className="month1">/month</div>
          </div>
        </div>
      </div>
      <div className="audio-filter-wrapper">
        <div className="audio-filter">
          <div className="suitable-for-companies">
            Suitable for companies with 5-10 openings
          </div>
          <div className="connection-optimizer">
            <div className="shape-sorter">
              <img className="icons" loading="lazy" alt="" src="/icons.svg" />
              <div className="interview-ready-candidates">
                10 interview-ready candidates
              </div>
            </div>
            <div className="shape-sorter">
              <img className="icons" alt="" src="/icons.svg" />
              <div className="interview-ready-candidates">
                Unlimited job postings
              </div>
            </div>
            <div className="shape-sorter">
              <img className="icons2" alt="" src="/icons.svg" />
              <div className="receive-pre-vetted-profiles">
                Receive pre-vetted profiles within 48 hours
              </div>
            </div>
            <div className="shape-sorter">
              <img className="icons" alt="" src="/icons-3.svg" />
              <div className="interview-ready-candidates">
                Dedicated account manager
              </div>
            </div>
            <div className="shape-sorter">
              <img className="icons2" alt="" src="/icons-3.svg" />
              <div className="assistance-with-interview">
                Assistance with interview scheduling
              </div>
            </div>
            <div className="shape-sorter">
              <img className="icons" alt="" src="/icons-3.svg" />
              <div className="interview-ready-candidates">Custom reports</div>
            </div>
          </div>
        </div>
      </div>
      <div className="simple-button-wrapper">
        <div className="simple-button4">
          <div className="get-started2">Get Started</div>
          <div className="arrow4">
            <img className="vector-icon11" alt="" src="/vector-1.svg" />
            <img className="vector-icon12" alt="" src="/vector-2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShapeCollector;
