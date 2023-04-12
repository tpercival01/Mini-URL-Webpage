import fb from "../images/icon-facebook.svg";
import tw from "../images/icon-twitter.svg";
import pin from "../images/icon-pinterest.svg";
import inst from "../images/icon-instagram.svg";

const Navbar = (props) => {
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
  } else {
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
  }
};

export default Navbar;
