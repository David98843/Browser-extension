import headerLogo from "./images/logo.svg";

const Header = ({ hIcon, darkMode }) => {
  return (
    <div
      style={{ backgroundColor: darkMode ? "#1F2535" : "" }}
      className="header"
    >
      <img src={headerLogo} alt="" />
      {/* <input type="text" /> */}
      {hIcon}
    </div>
  );
};

export default Header;
