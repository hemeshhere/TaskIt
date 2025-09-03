import React from "react";
import "../index.css";
import { useSelector } from "react-redux";
const PopUp = ({ id, popup, setPopup }) => {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.filter((ele) => ele.id === id);

  const handleBackgroundClick = (e) => {
    console.log("Clicked background:", e.currentTarget === e.target);
    if (e.currentTarget === e.target) {
      setPopup(false);
    }
  };

  return (
    <div className="popupBackground" onClick={handleBackgroundClick}>
      <div className="popupContainer">
        <p>{singleUser[0].description}</p>
      </div>
    </div>
  );
};

export default PopUp;
