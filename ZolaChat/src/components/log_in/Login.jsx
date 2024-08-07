import React, { useEffect, useState } from "react";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import { Card, Form, Input, Button, Row, Col, message, Spin } from "antd";
import { Link } from "react-router-dom";
import "./login.scss";
import logoWeb from "../../assets/L.gif";
import { useDispatch } from "react-redux";
import { setShowSignUpForm } from "../../redux/slide/MyState";
import { setIsLogin } from "../../redux/slide/MyState";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
export const Login = (props) => {
  // init
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // handle
  const handleLogin = async (value) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      console.log("ID token: ", idToken);
      localStorage.setItem("token", idToken);
      dispatch(setIsLogin(true));
      message.success("Đăng nhập thành công!");
    } catch (error) {
      message.error("Email hoặc mật khẩu không đúng ! ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrap">
      <Spin spinning={loading} fullscreen={true} />
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
            {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email không hợp lệ!",
            },
          ]}
        >
          <Input
            prefix={<MdOutlineMailOutline />}
            placeholder="Nhập email..."
            type="email"
            size="large"
            autoFocus
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
            autoComplete="off"
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
