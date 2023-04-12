import BG from "../images/bg-shorten-desktop.svg";

const LinkShorten = (props) => {
  return (
    <div id="link-shorten-container" style={{ backgroundImage: `url(${BG})` }}>
      <input id="link-input" type="text" placeholder="Shorten a link here..." />
      <span onClick={props.click}>Shorten It!</span>
    </div>
  );
};

export default LinkShorten;
