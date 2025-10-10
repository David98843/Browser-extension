const HeaderIcon = ({ darkMode, moonLogo, onClick }) => {
  return (
    <img
      style={{
        cursor: "pointer",
        backgroundColor: darkMode ? "hsl(225, 23%, 24%)" : "",
      }}
      onClick={onClick}
      src={moonLogo}
      alt=""
    />
  );
};

export default HeaderIcon;
