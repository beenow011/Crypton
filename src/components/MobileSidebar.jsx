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
  const [menu, setmenu] = useState(false);
  return (
    <div className="absolute top-5 right-2 md:hidden h-max z-100 shadow-md  shadow-black">
      {menu ? (
        <Menu theme="dark" className=" w-max">
          <Menu.Item
            icon={<CloseOutlined />}
            onClick={() => setmenu((prev) => !prev)}
          >
            Close
          </Menu.Item>
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/Cryptocurrencies">Crypto Currencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      ) : (
        <Menu theme="dark" className=" w-max h-max">
          <Menu.Item
            icon={<MenuOutlined />}
            onClick={() => setmenu((prev) => !prev)}
          >
            {" "}
            Menu
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
}

export default Sidebar;
