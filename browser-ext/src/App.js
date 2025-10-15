import "./App.css";
import moonLogo from "./components/images/icon-moon.svg";
import sunLogo from "./components/images/icon-sun.svg";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import ExtensionCards from "./components/ExtensionCards";
import HeaderIcon from "./components/HeaderIcon";
import Loader from "./components/Loader";
// import img1 from './components/images/'
const App = () => {
  const [details, setDetails] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [showActive, setShowActive] = useState(true);
  // const bgColor = () => {};
  // const loader = "Loading...";

  useEffect(() => {
    const cardDetails = async () => {
      const getDetails = await getCardDetails();
      setDetails([
    {
      "logo": "./images/logo-devlens.svg",
      "name": "DevLens",
      "description": "Quickly inspect page layouts and visualize element boundaries.",
      "isActive": true
    },
    {
      "logo": "./images/logo-style-spy.svg",
      "name": "StyleSpy",
      "description": "Instantly analyze and copy CSS from any webpage element.",
      "isActive": true
    },
    {
      "logo": "./images/logo-speed-boost.svg",
      "name": "SpeedBoost",
      "description": "Optimizes browser resource usage to accelerate page loading.",
      "isActive": false
    },
    {
      "logo": "./images/logo-json-wizard.svg",
      "name": "JSONWizard",
      "description": "Formats, validates, and prettifies JSON responses in-browser.",
      "isActive": true
    },
    {
      "logo": "./images/logo-tab-master-pro.svg",
      "name": "TabMaster Pro",
      "description": "Organizes browser tabs into groups and sessions.",
      "isActive": true
    },
    {
      "logo": "./images/logo-viewport-buddy.svg",
      "name": "ViewportBuddy",
      "description": "Simulates various screen resolutions directly within the browser.",
      "isActive": false
    },
    {
      "logo": "./images/logo-markup-notes.svg",
      "name": "Markup Notes",
      "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
      "isActive": true
    },
    {
      "logo": "./images/logo-grid-guides.svg",
      "name": "GridGuides",
      "description": "Overlay customizable grids and alignment guides on any webpage.",
      "isActive": false
    },
    {
      "logo": "./images/logo-palette-picker.svg",
      "name": "Palette Picker",
      "description": "Instantly extracts color palettes from any webpage.",
      "isActive": true
    },
    {
      "logo": "./images/logo-link-checker.svg",
      "name": "LinkChecker",
      "description": "Scans and highlights broken links on any page.",
      "isActive": true
    },
    {
      "logo": "./images/logo-dom-snapshot.svg",
      "name": "DOM Snapshot",
      "description": "Capture and export DOM structures quickly.",
      "isActive": false
    },
    {
      "logo": "./images/logo-console-plus.svg",
      "name": "ConsolePlus",
      "description": "Enhanced developer console with advanced filtering and logging.",
      "isActive": true
    }
  ]);
    };
    cardDetails();
  }, []);
  const getCardDetails = async () => {
    const BASE_URL = 'https://browser-extension-5wor.onrender.com'
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/details`);
      const data = res.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch");
    } finally {
      setIsLoading(false);
    }
  };

  const changebgColor = () => {
    setDarkMode(!darkMode);
  };
  // let setActive = true;
  return isLoading ? (
    <Loader />
  ) : (
    <div style={{ backgroundColor: darkMode ? "#050B21" : "" }} className="App">
      <Header
        darkMode={darkMode}
        hIcon={
          <HeaderIcon
            darkMode={darkMode}
            moonLogo={darkMode ? sunLogo : moonLogo}
            onClick={changebgColor}
          />
        }
      />

      <SubHeader details={details} darkMode={darkMode} />
      <ExtensionCards darkMode={darkMode} details={details} />
    </div>
  );
};

export default App;
