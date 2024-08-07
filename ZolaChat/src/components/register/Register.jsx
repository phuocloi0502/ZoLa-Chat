import React, { useEffect, useState } from "react";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import {
  Card,
  Form,
  Input,
  Button,
  Typography,
  Flex,
  Spin,
  message,
} from "antd";
import { auth } from "../../firebase";

const { Text, Link } = Typography;
import logoWeb from "../../assets/L.gif";
import { useDispatch } from "react-redux";
import { setShowSignUpForm } from "../../redux/slide/MyState";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Resigter = (props) => {
  // init
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  // handle
  const handleLogin = async (value) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );
      dispatch(setShowSignUpForm(false));
      form.resetFields();
      message.success("Đăng ký thành công !");
    } catch (error) {
      if (error.message == "Firebase: Error (auth/email-already-in-use).") {
        message.error("Tài khoản này đã tồn tại !");
      } else {
        message.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrap">
      <Spin spinning={loading} fullscreen={true} />
      <Form name="loginForm" onFinish={handleLogin} form={form}>
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
            {
              min: 6,
              message: "Mật khẩu phải có ít nhất 6 kí tự !",
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
