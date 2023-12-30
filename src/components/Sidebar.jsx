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

function Sidebar() {
  return (
    <div className="hidden md:block  shadow-black  ">
      <Menu theme="dark" className=" w-max h-full ">
        <Menu.Item icon={<HomeOutlined />} key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} key="Cryptocurrencies">
          <Link to="/Cryptocurrencies">Crypto Currencies</Link>
        </Menu.Item>

        <Menu.Item icon={<BulbOutlined />} key="news">
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
      )
    </div>
  );
}

export default Sidebar;
