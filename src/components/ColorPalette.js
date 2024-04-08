import "./ColorPalette.css";

const ColorPalette = () => {
  return (
    <section className="color-palette">
      <div className="cta">
        <div className="icon-repository-parent">
          <div className="icon-repository">
            <h1 className="discover-the-future-container">
              <span>
                <span>{`Discover the Future of `}</span>
                <span className="talent-assessment">Talent Assessment!</span>
              </span>
            </h1>
            <div className="facing-challenges-in-container">
              <p className="facing-challenges-in">
                Facing challenges in traditional hiring?
              </p>
              <p className="facing-challenges-in">
                Uncover the costs, pitfalls, and the game-changing role of
                Generative AI in recruitment.
              </p>
            </div>
            <div className="facing-challenges-in-container">
              <p className="facing-challenges-in">
                <b>🔍 Inside this Whitepaper:</b>
              </p>
              <ul className="manual-vs-machine-based-hirin">
                <li className="the-truth-about-interview-as">
                  <span className="manual-vs-machine-based">{`Manual vs. Machine-based hiring: Costs & Challenges.`}</span>
                </li>
                <li className="the-truth-about-interview-as">
                  <span className="manual-vs-machine-based">
                    The truth about "Interview as a Service."
                  </span>
                </li>
                <li>
                  <span className="manual-vs-machine-based">
                    Generative AI: The simple explanation. Optimize Your Hiring
                    Process Today!
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="cta-button2">
            <div className="download-now-for">
              Download Now for Smarter Recruitment
            </div>
          </div>
        </div>
        <img
          className="cta-child"
          loading="lazy"
          alt=""
          src="/rectangle-39394@2x.png"
        />
      </div>
    </section>
  );
};

export default ColorPalette;
