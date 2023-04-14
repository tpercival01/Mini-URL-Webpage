import fb from "../images/icon-facebook.svg";
import tw from "../images/icon-twitter.svg";
import pin from "../images/icon-pinterest.svg";
import inst from "../images/icon-instagram.svg";
import { useState } from "react";

const Navbar = (props) => {
  const [visible, setVisible] = useState(false);

  function handleMobileNavbar() {
    if (!visible) {
      document.getElementById("mobile-navbar").style.display = "flex";
      setVisible((prevState) => !prevState);
    } else {
      document.getElementById("mobile-navbar").style.display = "none";
      setVisible((prevState) => !prevState);
    }
  }

  if (props.type === "top") {
    return (
      <div id="top-navbar">
        <h1>Shortly</h1>
        <div>
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
        <div>
          <p>Login</p>
          <p id="signup">Sign Up</p>
        </div>
      </div>
    );
  } else if (props.type === "bottom") {
    return (
      <div id="bottom-navbar">
        <h1>Shortly</h1>
        <div id="features-links">
          <p>Features</p>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div id="resources-links">
          <p>Resources</p>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div id="company-links">
          <p>Company</p>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div id="media-links">
          <img src={fb} alt="facebook icon" />
          <img src={tw} alt="twitter icon" />
          <img src={pin} alt="pinterest icon" />
          <img src={inst} alt="instagram icon" />
        </div>
      </div>
    );
  } else {
    return (
      <div id="mobile-container">
        <h1>Shortly</h1>
        <span id="mobile-hidden" onClick={handleMobileNavbar}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </span>
        <div id="mobile-navbar">
          <div>
            <p>Features</p>
            <p>Pricing</p>
            <p>Resources</p>
          </div>
          <div>
            <p>Login</p>
            <p id="signup">Sign Up</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
