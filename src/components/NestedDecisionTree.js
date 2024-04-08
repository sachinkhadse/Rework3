import Steps from "./Steps";
import "./NestedDecisionTree.css";

const NestedDecisionTree = () => {
  return (
    <section className="nested-decision-tree">
      <div className="multi-output-processor">
        <img className="final-merger-hub" alt="" src="/vector-13.svg" />
        <div className="steps1">
          <div className="advanced-condition">
            <h1 className="how-our-system-container">
              <span>{`How Our System `}</span>
              <span className="operates">Operates</span>
            </h1>
          </div>
          <div className="comparators-chain">
            <div className="nested-comparison-tree">
              <Steps
                uploadDocuments="Upload Documents"
                shortlistTheMostQualified="Shortlist the most qualified candidate and upload their details for the top companies"
                sequentialMergers="/frame-48095633.svg"
              />
              <div className="steps2">
                <div className="sign-up">Sign Up</div>
                <div className="follow-the-link">
                  Follow the link below to sign up and get access of the current
                  job postings
                </div>
                <img
                  className="mingcuteuser-add-line-icon"
                  loading="lazy"
                  alt=""
                  src="/mingcuteuseraddline.svg"
                />
              </div>
              <Steps
                uploadDocuments="Get Rewards"
                shortlistTheMostQualified="As soon as the candidate gets selected you get your benefits"
                sequentialMergers="/frame-48095633-1.svg"
                propPadding="0px 0px var(--padding-41xl) var(--padding-11xl)"
                propPadding1="0px var(--padding-mini)"
                propMinHeight="100px"
              />
            </div>
            <div className="advanced-comparators">
              <div className="simple-button3">
                <div className="get-started1">Get Started</div>
                <div className="arrow3">
                  <img className="vector-icon9" alt="" src="/vector-1.svg" />
                  <img className="vector-icon10" alt="" src="/vector-2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NestedDecisionTree;
