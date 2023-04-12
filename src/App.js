import Section from "./components/section";
import Navbar from "./components/navbar";
import LinkShorten from "./components/link-shorten";
import "./styles.css";
import { useState } from "react";

const App = () => {
  const [links, setLinks] = useState([]);

  function handleShorten() {
    let link = document.getElementById("link-input").value;
    console.log(link);
    setLinks([...links, link]);
  }

  return (
    <div className="App">
      <Navbar type="top" />
      <Section type="top" />
      <LinkShorten click={handleShorten} />
      <Section type="middle" links={links} />
      <Section type="bottom" />
      <Navbar type="bottom" />
    </div>
  );
};
export default App;
