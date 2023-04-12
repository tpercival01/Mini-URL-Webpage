import illustration from "../images/illustration-working.svg";
import bottomBG from "../images/bg-boost-desktop.svg";

const Section = (props) => {
  if (props.type === "top") {
    return (
      <div id="top-section">
        <h1>More than just shorter links</h1>
        <div>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <span id="getstarted-button">Get Started</span>
        </div>
        <span>
          <img src={illustration} alt="person working at desk" />
        </span>
      </div>
    );
  } else if (props.type === "middle") {
    return (
      <div id="middle-section">
        <div id="stored-link-container">
          {props.links.map((item, key) => (
            <div key={key} className="storedLink">
              {item}
            </div>
          ))}
        </div>
        <div id="statistics">
          <p>Advanced Statistics</p>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div id="additional-info">
          <div id="brand" className="add-info">
            <p>Brand Recognition</p>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div id="records" className="add-info">
            <p>Detailed Records</p>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div id="custom" className="add-info">
            <p>Fully Customizable</p>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="bottom-section" style={{ backgroundImage: `url(${bottomBG})` }}>
        <p>Boost your links today </p>
        <span>Get Started</span>
      </div>
    );
  }
};

export default Section;
