import React, { useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, NavLink } from "react-router-dom";
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
          {/* <Menu.Item
            icon={<CloseOutlined />}
            onClick={() => setmenu((prev) => !prev)}
          >
            Close
          </Menu.Item> */}
          <div
            className="flex px-5 mb-3 cursor-pointer"
            onClick={() => setmenu((prev) => !prev)}
          >
            <CloseOutlined />
            <p className="my-auto px-3">Close</p>
          </div>
          <Menu.Item icon={<HomeOutlined />} key="home">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "bg-blue-500 text-white z-100 px-3 rounded-md"
                    : null
                }  hover:text-[#ec598f8c]`
              }
            >
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} key="Cryptocurrencies">
            <NavLink
              to="/Cryptocurrencies"
              className={({ isActive }) =>
                ` ${
                  isActive ? "bg-blue-500 text-white px-3 rounded-md" : null
                }  hover:text-[#ec598f8c]`
              }
            >
              Crypto Currencies
            </NavLink>
          </Menu.Item>

          <Menu.Item icon={<BulbOutlined />} key="news">
            <NavLink
              to="/news"
              className={({ isActive }) =>
                ` ${
                  isActive ? "bg-blue-500 text-white px-3 rounded-md" : null
                }  hover:text-[#ec598f8c]`
              }
            >
              News
            </NavLink>
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
