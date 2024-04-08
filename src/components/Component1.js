import "./Component1.css";

const Component1 = ({
  reworkHasBeenAGreatWayToM,
  bezierBuilder,
  theresaWebb,
  hRManagerAmazon,
}) => {
  return (
    <div className="component-16">
      <div className="rework-has-been">{reworkHasBeenAGreatWayToM}</div>
      <div className="bezier-builder-parent">
        <img
          className="bezier-builder-icon"
          loading="lazy"
          alt=""
          src={bezierBuilder}
        />
        <div className="container1">
          <div className="theresa-webb">{theresaWebb}</div>
          <div className="hr-manager-amazon">{hRManagerAmazon}</div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
