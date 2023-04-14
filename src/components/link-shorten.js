import BG from "../images/bg-shorten-desktop.svg";

const LinkShorten = (props) => {
  return (
    <div id='link-shorten-container' style={{ backgroundImage: `url(${BG})` }}>
      <div id='warning'>Please add a link</div>
      <input id='link-input' type='text' placeholder='Shorten a link here...' />
      <span onClick={props.click}>Shorten It!</span>
    </div>
  );
};

export default LinkShorten;
