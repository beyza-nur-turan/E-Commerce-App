import { AlertService } from "../../services/AlertService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "../../css/auth.css";
import Register from "./Register";
import loginLogo from "../../../public/img/Logo/Minimalist k Letter Logo (6).gif";
import LoginLottie from "../Lottie/LoginLottie";
import { Card, Input, Tooltip } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  SafetyOutlined
} from '@ant-design/icons';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const apiUrlLogin = import.meta.env.VITE_API_LOGIN_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrlLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("response:", response);

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        AlertService.showOk();
        if (data.role === "admin") {
          window.location.href = "/admin";
        } else {
          navigate("/");
        }
      } else {
        AlertService.showError();
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };

  return (
    <div className="login-container">
      <Card
        className="account-column-left"
        style={{ flex: "1", height: "100%" }}
      >
        <h1> HOŞGELDİNİZ</h1>
        <label>
          Hayalinizdeki ürünleri keşfetmek ve satın almak için hemen kayıt olun.
        </label>
        <Button className="card-left-button" onClick={()=>navigate("/register")} style={{ color: "white" }} variant="outlined">
          Kaydol
        </Button>
      </Card>
      <Card className="account-column">
        <form onSubmit={handleLogin}>
          <div className="auth-title">GİRİŞ YAP</div>
          <div>
            <label>
            <Input
      placeholder="Kullanıcı Adı"
      prefix={<UserOutlined className="site-form-item-icon" />} 
      
    />
            </label>
          </div>
          <div>
            <label>
            <Input
      placeholder="Şifre"
      prefix={<SafetyOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <EyeInvisibleOutlined 
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
            </label>
          </div>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="remember"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <label
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: "2em",
                  border:"none"
                }}
              >
                <input  type="checkbox" />
                <span style={{color:"#000D25"}}>Beni hatırla</span>
              </label>
              <a href="#" className="form-link">
                Şifremi unuttum!
              </a>
            </div>
            <Button
              style={{
                background: "linear-gradient(to top left, #000E26, #5fb49c)",
                marginTop: "2em",
              }}
              variant="contained"
            >
              GİRİŞ YAP
            </Button>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
