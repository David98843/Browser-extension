import Button from "./Button";
import { useRef, useState } from "react";
const SubHeader = ({ details, darkMode }) => {
  // console.log(details);

  // const active = () => {};
  // const myRef = useRef(null);
  // console.log(myRef.current.className);

  // if (myRef.current.className === "btn active") {
  //   console.log("hey");
  // }
  return (
    <div className="subheader">
      <h3 style={{ color: darkMode ? "white" : "" }}>Extensions List</h3>
      <div className="btns">
        <Button darkMode={darkMode} btnName="All" />
        <Button darkMode={darkMode} btnName="Active" />
        <Button darkMode={darkMode} btnName="Inactive" />

        {/* {console.log(myRef.current.className)} */}
      </div>
    </div>
  );
};

export default SubHeader;
