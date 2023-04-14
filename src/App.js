import Section from "./components/section";
import Navbar from "./components/navbar";
import LinkShorten from "./components/link-shorten";
import "./styles.css";
import { useState } from "react";

const App = () => {
  const [links, setLinks] = useState([]);

  const handleShorten = async (e) => {
    let link = document.getElementById("link-input").value;

    if (link) {
      await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then((response) => response.json())
        .then((data) => {
          const linkObj = {
            shorten: data.result["full_short_link"],
            original: link,
          };
          setLinks([...links, linkObj]);
        });
    } else {
      document.getElementById("warning").style.display = "block";
      document.getElementById("link-input").style.border = "1px solid red";
      document.getElementById("link-input").style.color = "red";
      setTimeout(() => {
        document.getElementById("warning").style.display = "none";
        document.getElementById("link-input").style.border = "none";
        document.getElementById("link-input").style.color = "";
      }, 1000);
    }
  };

  return (
    <div className='App'>
      <Navbar type='top' />
      <Navbar type='mobile' />
      <Section type='top' />
      <LinkShorten click={handleShorten} />
      <Section type='middle' links={links} />
      <Section type='bottom' />
      <Navbar type='bottom' />
    </div>
  );
};
export default App;
