import "./home.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Login } from "../log_in/Login";
import { SignUp } from "../sign_up/SignUp";
import { FaSmileBeam } from "react-icons/fa";
import { setShowSignUpForm } from "../../redux/slide/MyState";
import { useDispatch, useSelector } from "react-redux";
export const Home = (props) => {
  // init
  const dispatch = useDispatch();
  const isShowSignUpForm = useSelector((state) => state.MyState.showSignUpForm);
  // handle

  return (
    <div className="home-page-wrap">
      <h1>
        Chào mừng bạn đến với Zola Chat
        <div className="icon-area">
          <FaSmileBeam />
          <FaSmileBeam />
          <FaSmileBeam />
        </div>
      </h1>
      <br />
      <h2>Zola Chat, Thêm bạn - Thêm vui !!!</h2>
      {isShowSignUpForm ? <SignUp /> : <Login />}
    </div>
  );
};
