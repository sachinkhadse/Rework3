import { useMemo } from "react";
import "./Steps.css";

const Steps = ({
  uploadDocuments,
  shortlistTheMostQualified,
  sequentialMergers,
  propPadding,
  propPadding1,
  propMinHeight,
}) => {
  const stepsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const finalConditionsSetStyle = useMemo(() => {
    return {
      padding: propPadding1,
      minHeight: propMinHeight,
    };
  }, [propPadding1, propMinHeight]);

  return (
    <div className="steps" style={stepsStyle}>
      <div className="upload-documents">{uploadDocuments}</div>
      <div className="final-conditions-set" style={finalConditionsSetStyle}>
        <div className="advanced-merger-team">
          <div className="shortlist-the-most">{shortlistTheMostQualified}</div>
        </div>
      </div>
      <img
        className="sequential-mergers-icon"
        loading="lazy"
        alt=""
        src={sequentialMergers}
      />
    </div>
  );
};

export default Steps;
