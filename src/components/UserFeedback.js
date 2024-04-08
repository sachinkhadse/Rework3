import Component from "./Component";
import "./UserFeedback.css";

const UserFeedback = () => {
  return (
    <section className="user-feedback">
      <div className="data-aggregator">
        <div className="shape-organizer-parent">
          <div className="shape-organizer">
            <h1 className="success-stories">
              <span>{`Success `}</span>
              <span className="stories">Stories</span>
            </h1>
          </div>
          <div className="link-connector">
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-1@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-2@2x.png" />
          </div>
        </div>
        <div className="shape-transformer">
          <div className="image-editor">
            <div className="link-creator" />
            <div className="link-creator1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFeedback;
