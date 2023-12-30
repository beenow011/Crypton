import { useState } from "react";
import { Navbar, Sidebar, Home, MobileSidebar } from "./components/index";
import { Layout, Space, Typography } from "antd";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <div className="bg-[#547f90]">
        <Navbar />
      </div>

      <div className="main flex">
        <Sidebar />
        <MobileSidebar />
        <Layout>
          <div className="routes ">
            <Outlet />
          </div>
        </Layout>
      </div>
      <div className="footer  bg-[#001529] text-white">
        <Typography.Title level={5}>
          <div className="text-white text-center">
            Crypton <br /> All rights reserved
          </div>
        </Typography.Title>
        <div>
          <Space className="flex justify-center py-3">
            <Link to="/" className="px-2">
              Home
            </Link>
            <Link to="/exchanges" className="px-2">
              Exchanges
            </Link>
            <Link to="/news" className="px-2">
              News
            </Link>
            <Link to="https://github.com/beenow011/Crypton" className="px-2">
              Github
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
