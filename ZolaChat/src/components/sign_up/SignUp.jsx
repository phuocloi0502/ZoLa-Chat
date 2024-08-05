import React, { useEffect, useState } from "react";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import { Card, Form, Input, Button, Typography, Flex } from "antd";

const { Text, Link } = Typography;
import logoWeb from "../../assets/L-square.png";
import { useDispatch } from "react-redux";
import { setShowSignUpForm } from "../../redux/slide/MyState";
export const SignUp = (props) => {
  const handleLogin = (value) => {
    console.log(value);
  };
  // init
  const dispatch = useDispatch();

  // handle
  const handleShowSignUpForm = () => {
    dispatch(setShowSignUpForm(false));
  };
  return (
    <div className="login-wrap">
      <Form name="loginForm" onFinish={handleLogin}>
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
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập lại mật khẩu !",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Mật khẩu không khớp !"));
              },
            }),
          ]}
        >
          <Input.Password
            type="password"
            placeholder="Nhập lại mật khẩu..."
            prefix={<MdLockOutline />}
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Flex justify="space-around">
            <Button
              onClick={() => {
                dispatch(setShowSignUpForm(false));
              }}
              type="primary"
            >
              Quay lại
            </Button>
            <Button type="primary" danger htmlType="submit">
              Đăng Ký
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};
