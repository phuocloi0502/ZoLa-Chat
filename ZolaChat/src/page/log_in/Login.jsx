import React, { useEffect, useState } from "react";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import { Card, Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";
import "./login.scss";
import logoWeb from "../../assets/L-square.png";
import { useDispatch } from "react-redux";
import { setShowSignUpForm } from "../../redux/slide/MyState";
export const Login = (props) => {
  const handleLogin = (value) => {
    console.log(value);
  };
  // init
  const dispatch = useDispatch();

  // handle

  return (
    <div className="login-wrap">
      <Card>
        <Form name="loginForm" wrapperCol={24} onFinish={handleLogin}>
          <Form.Item>
            <img
              src={logoWeb}
              alt=""
              style={{
                width: 200,
                height: 200,
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
            <Link>Quên mật khẩu ?</Link>
            <br />

            <Button
              onClick={() => {
                dispatch(setShowSignUpForm(true));
              }}
              type="link"
              danger
              className="my-button-link"
            >
              Chưa có tài khoản ? Đăng ký ngay
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
