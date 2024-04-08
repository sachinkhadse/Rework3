import FrameComponent4 from "../components/FrameComponent4";
import BoundingVolumeTree from "../components/BoundingVolumeTree";
import FrameComponent2 from "../components/FrameComponent2";
import NestedDecisionTree from "../components/NestedDecisionTree";
import FrameComponent1 from "../components/FrameComponent1";
import ColorPalette from "../components/ColorPalette";
import FrameComponent from "../components/FrameComponent";
import CalendarPicker from "../components/CalendarPicker";
import UserFeedback from "../components/UserFeedback";
import ColorManager from "../components/ColorManager";
import "./ForEmployers.css";

const ForEmployers = () => {
  return (
    <div className="for-employers">
      <section className="frame-parent">
        <FrameComponent4 />
        <BoundingVolumeTree />
      </section>
      <FrameComponent2 />
      <NestedDecisionTree />
      <FrameComponent1 />
      <div className="shape-container">
        <div className="simple-button">
          <div className="book-a-demo">Book a Demo</div>
          <div className="arrow">
            <img className="vector-icon" alt="" src="/vector-1.svg" />
            <img className="vector-icon1" alt="" src="/vector-2.svg" />
          </div>
        </div>
      </div>
      <ColorPalette />
      <FrameComponent />
      <CalendarPicker />
      <UserFeedback />
      <ColorManager />
      <section className="size-modifier">
        <div className="position-swapper">
          <div className="data-splinter">
            <h1 className="optimize-your-hiring">
              Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit
            </h1>
            <div className="discover-the-strengths">
              Discover the strengths and opportunities in your current hiring
              process. Our comprehensive Hiring Audit evaluates your strategy,
              identifies areas for improvement, and tailors a roadmap for
              success. Elevate your recruitment game with data-driven insights –
              because the right talent deserves the right approach.
            </div>
          </div>
          <div className="cta-button">
            <div className="request-your-free">
              Request Your Free Hiring Audit
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForEmployers;
