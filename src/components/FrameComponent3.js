import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  eosIconsai,
  prop,
  costReduce,
  zeroOverheadInTheHiringPr,
  propLeft,
  propTop,
  propHeight,
  propLineHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const costReduceStyle = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propHeight, propLineHeight]);

  return (
    <div className="eos-iconsai-parent" style={frameDivStyle}>
      <img className="eos-iconsai" alt="" src={eosIconsai} />
      <div className="cost-reduce" style={costReduceStyle}>
        <p className="p1">{prop}</p>
        <p className="cost-reduce1">{costReduce}</p>
      </div>
      <div className="zero-overhead-in">{zeroOverheadInTheHiringPr}</div>
    </div>
  );
};

export default FrameComponent3;
