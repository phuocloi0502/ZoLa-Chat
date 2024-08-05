import { Menu } from "antd";
import React, { useEffect } from "react";
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

export const Navigate = (props) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const defaultSelectedKey = "chat";
  const onClick = (e) => {
    if (e.key == "sign_out") {
      dispatch(setIsLogin(false));
    } else {
      nav(e.key);
    }
  };
  useEffect(() => {
    onClick({ key: defaultSelectedKey });
  }, []);
  return (
    <div className="desktop-menu">
      <Menu
        onClick={onClick}
        items={items}
        style={{ height: "100%" }}
        defaultSelectedKeys={[defaultSelectedKey]}
        defaultOpenKeys={[defaultSelectedKey]}
        mode="inline"
      />
    </div>
  );
};
