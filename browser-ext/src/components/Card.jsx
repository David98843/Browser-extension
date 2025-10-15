import CardIcon from "./CardIcon";
import Button from "./Button";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { useEffect, useState } from "react";

const Card = ({ card, image, darkMode, setItemActive, deleteItem}) => {
  const [toggle, setToggle] = useState(card.isActive);
  const [cardID, setCardID] = useState(card.id)
  const [cardName, setCardName] = useState(card.name);
  const [cardDetails, setCardDetails] = useState(card.description);
  const [isActive, setIsActive] = useState(card.isActive);

  useEffect(() => {
    setToggle(card.isActive);
    setIsActive(card.isActive);
  } , [card]);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1F2535" : "",
        border: isActive ? '1px solid red' : darkMode ? "1px solid  hsl(217, 61%, 90%)" : "1px solid transparent",
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
        <Button darkMode={darkMode} btnName={"Remove"} onClick={() => deleteItem(cardID)}/>
        {toggle ? (
          //  details.map((d)=>(log))
          <BsToggleOn
          
            className="toggle"
            onClick={() => {
              setToggle(!toggle);
              setItemActive(cardID);
            }}
            style={{
              color: "hsl(3, 77%, 44%)",
            }}
          />
        ) : (
          <BsToggleOff
            onClick={() => {
              setToggle(!toggle);
              setItemActive(cardID);
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
