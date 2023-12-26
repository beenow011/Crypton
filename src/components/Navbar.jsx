import React, { useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Icon from "../assets/logo.png";
function Navbar() {
  return (
    <div className="nav-container  ">
      <div className="logo-container flex my-auto bg-[#001529] px-4  ">
        <Avatar
          src={Icon}
          size={64}
          className="shadow-lg hover:shadow-green-300 m-3"
        />
        <Typography.Title level={1} className="logo mt-2 py-2 ">
          <Link to="/">Crypton</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
    </div>
  );
}

export default Navbar;
