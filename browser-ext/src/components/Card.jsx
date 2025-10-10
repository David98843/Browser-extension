import CardIcon from "./CardIcon";
import Button from "./Button";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { useState } from "react";

const Card = ({ cardName, cardDetails, image, darkMode }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1F2535" : "",
        border: darkMode ? "1px solid  hsl(217, 61%, 90%)" : "",
      }}
      className="card"
    >
      <div className="card-info">
        <CardIcon image={image} />
        <div className="text">
          <h4 style={{ color: darkMode ? "white" : "" }}>{cardName}</h4>
          <p style={{ color: darkMode ? "hsl(217, 61%, 90%)" : "" }}>
            {cardDetails}
          </p>
        </div>
      </div>
      <div className="card-btn">
        <Button darkMode={darkMode} btnName={"Remove"} />
        {toggle ? (
          //  details.map((d)=>(log))
          <BsToggleOn
            className="toggle"
            onClick={() => {
              setToggle(!toggle);
            }}
            style={{
              color: "hsl(3, 77%, 44%)",
            }}
          />
        ) : (
          <BsToggleOff
            onClick={() => {
              setToggle(!toggle);
            }}
            style={{
              color: "hsl(0, 0%, 78%)",
            }}
            className="toggle"
          />
        )}
        {/* {console.log(setActive)} */}
      </div>
    </div>
  );
};

export default Card;
