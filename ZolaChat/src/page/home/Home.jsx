import "./home.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Login } from "../../components/log_in/Login";
import { Resigter } from "../../components/register/Register";
import { FaSmileBeam } from "react-icons/fa";
import { setShowSignUpForm } from "../../redux/slide/MyState";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "../../components/menu/Menu";
import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "../../components/header/Header";
import { getToken } from "../../units/constant";
export const Home = (props) => {
  // init
  const dispatch = useDispatch();
  const nav = useNavigate();
  const isShowSignUpForm = useSelector((state) => state.MyState.showSignUpForm);
  const isLogin = useSelector((state) => state.MyState.isLogin);
  const token = getToken();
  console.log("isLogin", isLogin);
  // handle
  useEffect(() => {
    if (token === null && !isLogin) {
      nav("/ZoLa-Chat/"); // Điều hướng nếu không có token và không đăng nhập
    }
  }, [isLogin, token]);
  return (
    <div className="home-page-wrap">
      {console.log("re load")}
      {token != null || isLogin ? (
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
          {isShowSignUpForm ? <Resigter /> : <Login />}
        </div>
      )}
    </div>
  );
};
