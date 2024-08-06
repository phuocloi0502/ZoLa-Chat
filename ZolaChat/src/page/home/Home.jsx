import "./home.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Login } from "../../components/log_in/Login";
import { SignUp } from "../../components/sign_up/SignUp";
import { FaSmileBeam } from "react-icons/fa";
import { setShowSignUpForm } from "../../redux/slide/MyState";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "../../components/menu/Menu";
import { Outlet } from "react-router-dom";

import { Header } from "../../components/header/Header";
export const Home = (props) => {
  // init
  const dispatch = useDispatch();
  const isShowSignUpForm = useSelector((state) => state.MyState.showSignUpForm);
  const isLogin = useSelector((state) => state.MyState.isLogin);
  // handle

  return (
    <div className="home-page-wrap">
      {isLogin ? (
        <div className="content-area">
          <div className="navigate-wrap">
            <Navigate />
          </div>
          <div className="main-wrap">
            <Header />
            <div className="main-content-area">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div className="login-or-signup-area">
          <h2>
            Zola Chat <br /> Thêm bạn - Thêm vui !
          </h2>
          {isShowSignUpForm ? <SignUp /> : <Login />}
        </div>
      )}
    </div>
  );
};
