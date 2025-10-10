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
      setDetails(getDetails);
    };
    cardDetails();
  }, []);
  const getCardDetails = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:5000/details");
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
