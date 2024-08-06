import React from "react";
import { FaBell } from "react-icons/fa";
import "./header.scss";
export const Header = (props) => {
  return (
    <div className="header-area">
      <div className="user-infomation-area">
        <div className="avatar-area"></div>
        <span>LoiNoble</span>
      </div>
      <strong className="bell-icon">
        {" "}
        <FaBell />
      </strong>
    </div>
  );
};
