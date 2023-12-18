import {
  BarChartOutlined,
  HeatMapOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Header } from "..";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";

const AppLayout: React.FC = () => {
  type MenuItem = Required<MenuProps>["items"][number];
  const navigate = useNavigate();
  const location = useLocation();

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group",
    disabled?: boolean,
  ): MenuItem {
    return {
      label,
      key,
      icon,
      children,
      type,
      disabled,
    } as MenuItem;
  }

  const menus: MenuItem[] = [
    getItem("Dashboard", "/", <WindowsOutlined />),
    getItem("Chart", "/chart", <BarChartOutlined />),
    getItem("Coming Soon", "3", <HeatMapOutlined />, undefined, undefined, true),
  ];

  const items: MenuProps["items"] = [
    getItem("Second Chance", "grp", null, menus, "group"),
  ];

  const onClick: MenuProps["onClick"] = (e) => {
      navigate(e.key);
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100dvh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "#ffffff"
        }}
        >
        <Menu
          onClick={onClick}
          defaultSelectedKeys={[location.pathname]}
          mode="inline"
          items={items}
          />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial', height: "100dvh" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
