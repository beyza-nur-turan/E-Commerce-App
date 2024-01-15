import { DashboardOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Navigate } from "react-router";

function personalImg() {
  const [collapsed, setCollapsed] = useState(false);
  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Siparişlerim",
      path: "/admin",
      onClick: () => {
        Navigate(`/admin`);
      },
    },
    {
      key: "2",
      icon: <DashboardOutlined />,
      label: "Adreslerim",
      path: "/admin",
      onClick: () => {
        Navigate(`/admin`);
      },
    },
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Favorilerim",
      path: "/admin",
      onClick: () => {
        Navigate(`/admin`);
      },
    },
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Şifre İşlemleri",
      path: "/admin",
      onClick: () => {
        Navigate(`/admin`);
      },
    },
  ];
  const getActiveKey = () => {
    for (const item of menuItems) {
      if (item.children) {
        for (const child of item.children) {
          if (child.path === window.location.pathname) {
            return child.key;
          }
        }
      } else {
        if (item.path === window.location.pathname) {
          return item.key;
        }
      }
    }
  };
  return (
    <div className="img-content">
      <img
        src="../../../../public/img/Avatars/photo-1438761681033-6461ffad8d80.avif"
        alt="Profil Resmi"
        className="avatar"
      />
      <div className="sidebar-list">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={menuItems}
            selectedKeys={[getActiveKey()]}
          />
        </Sider>
      </div>
    </div>
  );
}

export default personalImg;
