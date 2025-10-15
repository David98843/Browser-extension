import Button from "./Button";
import { useRef, useState } from "react";
const SubHeader = ({ details, darkMode, filterItems }) => {
  const [active, setActive] = useState("All");
  // console.log(details);

  // const active = () => {};
  // const myRef = useRef(null);
  // console.log(myRef.current.className);

  // if (myRef.current.className === "btn active") {
  //   console.log("hey");
  // }
  return (
    <div className="subheader">
      <h3 style={{ color: darkMode ? "white" : "" }}>Extension List</h3>
      <div className="btns">
        <Button darkMode={darkMode} btnName="All" 
          onClick={
            () => {
              filterItems("All")
              setActive("All")
            }
          }
          active_={active === "All" ? true : false}
        />
        <Button darkMode={darkMode} btnName="Active" 
          onClick={
            () => {
              filterItems("Active")
              setActive("Active")
            }
          } 
          active_={active === "Active" ? true : false}
        />
        <Button darkMode={darkMode} btnName="Inactive" 
          onClick={() => {
            filterItems("Inactive")
            setActive("Inactive")
          }
        }
          active_={active === "Inactive" ? true : false}
        />

        {/* {console.log(myRef.current.className)} */}
      </div>
    </div>
  );
};

export default SubHeader;
