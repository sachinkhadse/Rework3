import FrameComponent3 from "./FrameComponent3";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="for-employers-inner">
      <div className="frame-group">
        <div className="our-amazing-benefits-helpful-f-wrapper">
          <h1 className="our-amazing-benefits-container">
            <span>{`Our Amazing Benefits `}</span>
            <span className="helpful-for-your">Helpful For Your Hiring</span>
          </h1>
        </div>
        <div className="frame-div" />
        <div className="frame-container">
          <FrameComponent3
            eosIconsai="/eosiconsai.svg"
            prop="60%"
            costReduce="Cost Reduce"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
          />
          <FrameComponent3
            eosIconsai="/eosiconsai-1.svg"
            prop="50% Faster"
            costReduce="Recruitment by TAT"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
            propLeft="428.2px"
            propTop="0px"
            propHeight="unset"
            propLineHeight="27.2px"
          />
          <div className="comparators-set">
            <div className="nested-logic-wrapper">
              <div className="nested-logic">
                <img
                  className="parallel-processors-icon"
                  alt=""
                  src="/vector-7.svg"
                />
                <img className="vector-icon7" alt="" src="/vector-8.svg" />
              </div>
            </div>
            <div className="highly-contextualized-intervie-parent">
              <div className="highly-contextualized-intervie-container">
                <p className="highly-contextualized">{`Highly Contextualized `}</p>
                <p className="interview">Interview</p>
              </div>
              <div className="al-models-generate">
                Al models generate highly contextualized interviews for the
                candidates based on your Company profile, Job description and
                Candidate's CV.
              </div>
            </div>
          </div>
          <div className="iterative-processor">
            <div className="iterative-processor-inner">
              <div className="vector-parent">
                <img className="vector-icon8" alt="" src="/vector-9.svg" />
                <img
                  className="nested-decision-icon"
                  alt=""
                  src="/vector-10.svg"
                />
                <img
                  className="parallel-filters-icon"
                  alt=""
                  src="/vector-11.svg"
                />
                <img
                  className="advanced-merger-icon"
                  alt=""
                  src="/vector-12.svg"
                />
              </div>
            </div>
            <div className="highly-contextualized-intervie-parent">
              <div className="automated-scheduling">
                <p className="highly-contextualized">{`Automated `}</p>
                <p className="interview2">Scheduling</p>
              </div>
              <div className="al-models-generate">{`Email & WhatsApp based communication for interview scheduling with automated reminders.`}</div>
            </div>
          </div>
          <FrameComponent3
            eosIconsai="/eosiconsai-2.svg"
            prop="AI generated Interviews"
            costReduce="On what matters"
            zeroOverheadInTheHiringPr="0 manual interventions, completely seamless experience for the candidates."
            propLeft="428.2px"
            propTop="308px"
            propHeight="66px"
            propLineHeight="unset"
          />
          <FrameComponent3
            eosIconsai="/fluenttasksapp20regular.svg"
            prop="in-built"
            costReduce="ATS"
            zeroOverheadInTheHiringPr={`To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.`}
            propLeft="856.3px"
            propTop="308px"
            propHeight="66px"
            propLineHeight="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
