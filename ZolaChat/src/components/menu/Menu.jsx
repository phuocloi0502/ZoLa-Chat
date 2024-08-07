import { Drawer, Menu, Badge, message, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaUserFriends, FaRegUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../redux/slide/MyState";
import "./menu.scss";
const items = [
  {
    key: "chat",
    label: "Chat",
    icon: <IoChatbubblesOutline />,
  },
  {
    key: "friends",
    label: "Bạn bè",
    icon: <FaUserFriends />,
  },
  {
    key: "my_page",
    label: "Trang của tôi",
    icon: <FaRegUserCircle />,
  },
  {
    key: "sign_out",
    label: "Đăng xuất",
    icon: <CiLogout />,
  },
];
const itemsMobile = [
  {
    key: "chat",
    icon: (
      <Badge count={599} className="custom-badge">
        <IoChatbubblesOutline />
      </Badge>
    ),
  },
  {
    key: "friends",

    icon: (
      <Badge count={599} className="custom-badge">
        <FaUserFriends />
      </Badge>
    ),
  },
  {
    key: "my_page",
    icon: <FaRegUserCircle />,
  },
  {
    key: "sign_out",
    icon: <CiLogout />,
  },
];

export const Navigate = (props) => {
  //init
  const nav = useNavigate();
  const dispatch = useDispatch();
  const defaultSelectedKey = "chat";
  const [loading, setLoading] = useState(false);
  // handle
  const onClick = (e) => {
    if (e.key == "sign_out") {
      localStorage.removeItem("token");
      dispatch(setIsLogin(false));
      message.info("Đã đăng xuất !");
      setLoading(true);
      setTimeout(() => {
        nav("/ZoLa-Chat/");
        setLoading(false);
      }, 500);
    } else {
      nav(e.key);
    }
  };
  useEffect(() => {
    onClick({ key: defaultSelectedKey });
  }, []);
  const onClose = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <div className="desktop-menu">
        <Spin spinning={loading} fullscreen={true} />
        <Menu
          onClick={onClick}
          items={items}
          defaultSelectedKeys={[defaultSelectedKey]}
          defaultOpenKeys={[defaultSelectedKey]}
          mode="inline"
        />
      </div>

      <div className="mobile-menu">
        <Menu
          onClick={onClick}
          mode="horizontal"
          items={itemsMobile}
          defaultSelectedKeys={[defaultSelectedKey]}
        />
      </div>
    </>
  );
};
