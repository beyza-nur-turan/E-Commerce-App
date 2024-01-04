import { useState } from "react";
import PropTypes from "prop-types";
import {
  UserOutlined,
  LaptopOutlined,
  RollbackOutlined,
  BarcodeOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined 
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.role : null;
};

function AdminLayout({children}) {
  const navigate = useNavigate();
  const userRole = getUserRole();
  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      path:"/admin",
      onClick: () => {
        navigate(`/admin`);
      },
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Kategoriler",
      path: "/",
      children: [
        {
          key: "3",
          label: "Kategori Listesi",
          path: "/admin/categories",
          onClick: () => {
            navigate(`/admin/categories`);
          },
        },
        {
          key: "4",
          label: "Yeni Kategori Oluştur",
          path: "/admin/categories/create",
          onClick: () => {
            navigate("/admin/categories/create");
          },
        },
      ],
    },
    {
      key: "5",
      icon: <LaptopOutlined />,
      label: "Ürünler",
      path: "/",
      children: [
        {
          key: "6",
          label: "Ürün Listesi",
          path: "/admin/products",
          onClick: () => {
            navigate(`/admin/products`);
          },
        },
        {
          key: "7",
          label: "Yeni Ürün Oluştur",
          path: "/admin/products/create",
          onClick: () => {
            navigate("/admin/products/create");
          },
        },
      ],
    },
    {
      key: "8",
      icon: <BarcodeOutlined />,
      label: "Kuponlar",
      path: "/admin/coupons",
      children: [
        {
          key: "9",
          label: "Kupon Listesi",
          path: "/admin/coupons",
          onClick: () => {
            navigate(`/admin/coupons`);
          },
        },
        {
          key: "10",
          label: "Yeni Kupon Oluştur",
          path: "/admin/coupons/create",
          onClick: () => {
            navigate("/admin/coupons/create");
          },
        },
      ],
    },
    {
      key: "11",
      icon: <UserOutlined />,
      label: "Kullanıcı Listesi",
      path: "/admin/users",
      onClick: () => {
        navigate("/admin/users");
      },
    },
    {
      key: "12",
      icon: <ShoppingCartOutlined />,
      label: "Siparişler",
      path:"/admin/orders",
      onClick: () => {
        navigate(`/admin/orders`);
      },
    },
    {
      key: "13",
      icon: <LogoutOutlined />,
      label: "Logolar",
      path: "/admin/logo",
      children: [
        {
          key: "14",
          label: "Logo Listesi",
          path: "/admin/logo",
          onClick: () => {
            navigate(`/admin/logo`);
          },
        },
        {
          key: "15",
          label: "Yeni Logo Oluştur",
          path: "/admin/logo/create",
          onClick: () => {
            navigate("/admin/logo/create");
          },
        },
      ],
    },
    {
      key: "16",
      icon: <LogoutOutlined />,
      label: "Sliderler",
      path: "/admin/slides",
      children: [
        {
          key: "17",
          label: "Slider Listesi",
          path: "/admin/slides",
          onClick: () => {
            navigate(`/admin/slides`);
          },
        },
        {
          key: "18",
          label: "Yeni Slide Oluştur",
          path: "/admin/slides/create",
          onClick: () => {
            navigate("/admin/slides/create");
          },
        },
      ],
    },
    {
      key: "19",
      icon: <LogoutOutlined />,
      label: "Bloglar",
      path: "/admin/blogs",
      children: [
        {
          key: "20",
          label: "Blog Listesi",
          path: "/admin/blogs",
          onClick: () => {
            navigate(`/admin/blogs`);
          },
        },
        {
          key: "21",
          label: "Yeni Blog Oluştur",
          path: "/admin/blogs/create",
          onClick: () => {
            navigate("/admin/blogs/create");
          },
        },
      ],
    },
    {
      key: "22",
      icon: <LogoutOutlined />,
      label: "İletişim",
      path: "/admin/officeInfo",
      children: [
        {
          key: "23",
          label: "Şube Listesi",
          path: "/admin/officeInfo",
          onClick: () => {
            navigate(`/admin/officeInfo`);
          },
        },
        {
          key: "24",
          label: "Yeni Şube Bilgisi Ekle",
          path: "/admin/officeInfo/create",
          onClick: () => {
            navigate("/admin/officeInfo/create");
          },
        },
        {
          key: "25",
          label: "İletişim Mesaj Listesi",
          path: "/admin/contact",
          onClick: () => {
            navigate(`/admin/contact`);
          },
        },
        
      ],
    },
    {
      key: "26",
      icon: <RollbackOutlined />,
      label: "Ana Sayfaya Git",
      onClick: () => {
        navigate(`/`);
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
  const getPageTitle = () => {
    for (const item of menuItems) {
      if (item.children) {
        for (const child of item.children) {
          if (child.path === window.location.pathname) {
            return child.label;
          }
        }
      } else {
        if (item.path === window.location.pathname) {
          return item.label;
        }
      }
    }
  };


  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  if (userRole === "admin") {
    return (
      <div className="admin-layout">
        <Layout style={{ minHeight: "100vh" }}>
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
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              <h2>{getPageTitle()}</h2>
              
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }  else {
    return (window.location.href = "/");
  }
}
export default AdminLayout;
AdminLayout.propTypes={
children:PropTypes.node
}