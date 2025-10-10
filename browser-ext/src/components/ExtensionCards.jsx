import Card from "./Card";
// import { useState } from "react";
// import logo from "./data.json";
import devlens from "./images/logo-devlens.svg";
import stylespy from "./images/logo-style-spy.svg";
import speedboost from "./images/logo-speed-boost.svg";
import jsonwizard from "./images/logo-json-wizard.svg";
import tabmaster from "./images/logo-tab-master-pro.svg";
import viewport from "./images/logo-viewport-buddy.svg";
import markup from "./images/logo-markup-notes.svg";
import gridguide from "./images/logo-grid-guides.svg";
import palette from "./images/logo-palette-picker.svg";
import linkchecker from "./images/logo-link-checker.svg";
import snapshot from "./images/logo-dom-snapshot.svg";
import consoleplus from "./images/logo-console-plus.svg";

const ExtensionCards = ({ details, darkMode }) => {
  // const [count, setCount] = useState(-1);
  const arr = [
    devlens,
    stylespy,
    speedboost,
    jsonwizard,
    tabmaster,
    viewport,
    markup,
    gridguide,
    palette,
    linkchecker,
    snapshot,
    consoleplus,
  ];

  return (
    <div className="card-container">
      {details.map((d, i) => (
        <Card
          // img={d.logo}
          // setActive={setActive}
          key={i}
          darkMode={darkMode}
          image={arr[i]}
          // image={d.logo}
          cardName={d.name}
          cardDetails={d.description}
        />
      ))}
    </div>
  );
};

export default ExtensionCards;
