// import icon from "./data.json";
const CardIcon = ({ image }) => {
  return (
    <>
      {console.log(image)}
      {image && <img className="icon-img" src={image} alt="Icon" />}
      {/* {console.log(image)} */}
    </>
  );
};

export default CardIcon;
