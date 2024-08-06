import React, { useEffect, useState } from "react";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import { Card, Form, Input, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./login.scss";
import logoWeb from "../../assets/L.gif";
import { useDispatch } from "react-redux";
import { setShowSignUpForm } from "../../redux/slide/MyState";
import { setIsLogin } from "../../redux/slide/MyState";
export const Login = (props) => {
  // init
  const dispatch = useDispatch();

  // handle
  const handleLogin = (value) => {
    console.log(value);
    dispatch(setIsLogin(true));
  };

  return (
    <div className="login-wrap">
      <Form name="loginForm" onFinish={handleLogin}>
        <Form.Item>
          <img
            src={logoWeb}
            alt=""
            style={{
              width: 120,
              height: 150,
            }}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Email!",
            },
          ]}
        >
          <Input
            prefix={<MdOutlineMailOutline />}
            placeholder="Nhập email..."
            type="email"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<MdLockOutline />}
            placeholder="Nhập mật khẩu..."
            type="password"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Link>
            <strong>Quên mật khẩu ?</strong>
          </Link>
          <br />

          <Button
            onClick={() => {
              dispatch(setShowSignUpForm(true));
            }}
            type="link"
            danger
            className="my-button-link"
          >
            <strong> Chưa có tài khoản ? Đăng ký ngay</strong>
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
