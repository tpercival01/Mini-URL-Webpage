import Section from "./components/section";
import Navbar from "./components/navbar";
import LinkShorten from "./components/link-shorten";
import "./styles.css";
import { useState } from "react";

const App = () => {
  const [links, setLinks] = useState([]);

  const handleShorten = async () => {
    let link = document.getElementById("link-input").value;

    await fetch(`https://api.shrtco.de/v2/shortern?url=${link}`)
      .then((response) => response.json())
      .then((data) => {
        const linkObj = { shorten: data["full_short_link"], original: link };
        setLinks([...links, linkObj]);
      });
  };

  return (
    <div className="App">
      <Navbar type="top" />
      <Navbar type="mobile" />
      <Section type="top" />
      <LinkShorten click={handleShorten} />
      <Section type="middle" links={links} />
      <Section type="bottom" />
      <Navbar type="bottom" />
    </div>
  );
};
export default App;
