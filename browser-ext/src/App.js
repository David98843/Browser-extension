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
  const [originalDetails, setOriginalDetails] = useState([]);
  // const [showActive, setShowActive] = useState(true);
  // const bgColor = () => {};
  // const loader = "Loading...";

  useEffect(() => {
    const cardDetails = async () => {
      // const getDetails = await getCardDetails();
    setDetails([
      {
        "id": 0,
        "logo": "./images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
      },
      {
        "id": 1,
        "logo": "./images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
      },
      {
        "id": 2,
        "logo": "./images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
      },
      {
        "id": 3,
        "logo": "./images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
      },
      {
        "id": 4,
        "logo": "./images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
      },
      {
        "id": 5,
        "logo": "./images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
      },
      {
        "id": 6,
        "logo": "./images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
      },
      {
        "id": 7,
        "logo": "./images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
      },
      {
        "id": 8,
        "logo": "./images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
      },
      {
        "id": 9,
        "logo": "./images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
      },
      {
        "id": 10,
        "logo": "./images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
      },
      {
        "id": 11,
        "logo": "./images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
      }
    ]);
    setOriginalDetails([
      {
        "id": 0,
        "logo": "./images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
      },
      {
        "id": 1,
        "logo": "./images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
      },
      {
        "id": 2,
        "logo": "./images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
      },
      {
        "id": 3,
        "logo": "./images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
      },
      {
        "id": 4,
        "logo": "./images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
      },
      {
        "id": 5,
        "logo": "./images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
      },
      {
        "id": 6,
        "logo": "./images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
      },
      {
        "id": 7,
        "logo": "./images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
      },
      {
        "id": 8,
        "logo": "./images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
      },
      {
        "id": 9,
        "logo": "./images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
      },
      {
        "id": 10,
        "logo": "./images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
      },
      {
        "id": 11,
        "logo": "./images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
      }
    ])
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

  const setItemActive = (id) => {

    setDetails(
      details.map((detail, index) => {
        if (index === id) {
          return { ...detail, isActive: !detail.isActive };
        }else{
          return detail;
        }
    }))
    
    setOriginalDetails(
      details.map((detail, index) => {
        if (index === id) {
          return { ...detail, isActive: !detail.isActive };
        }else{
          return detail;
        }
    }))
    
  }
  
  const filterItems = (status) => {
    console.log(status);
    let res = [];
    
    if (status === "All") {
      res = originalDetails.filter((detail) => detail);
    } else if (status === "Active") {
      res = originalDetails.filter((detail) => detail.isActive);
    } else if (status === "Inactive") {  
      res = originalDetails.filter((detail) => !detail.isActive);
    }

    console.log(res);
    setDetails(res);
  };

const deleteItem = (id) => {
  let newArr = [];
  details.forEach((detail) => {
    if (detail.id !== id) {
      newArr.push(detail);
    }
  })

  setDetails(newArr);
  setOriginalDetails(newArr);

  setTimeout(() => {  
    console.error(details)
  }, 2000);
  
  // const newDetails = details.filter(detail => detail.id !== id);
  // setDetails(newDetails);

  // const newOriginalDetails = originalDetails.filter(detail => detail.id !== id);
  // setOriginalDetails(newOriginalDetails);
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

      <SubHeader details={details} darkMode={darkMode} filterItems={filterItems}/>
      <ExtensionCards darkMode={darkMode} details={details} setItemActive={setItemActive} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
