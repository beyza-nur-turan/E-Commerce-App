import { AlertService } from "../../services/AlertService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "../../css/auth.css";
import Register from "./Register";
import loginLogo from "../../../public/img/Logo/Minimalist k Letter Logo (6).gif";
import LoginLottie from "../Lottie/LoginLottie";
import { Card } from "antd";

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
        <Button onClick={()=>navigate("/register")} style={{ color: "white" }} variant="outlined">
          Kaydol
        </Button>
      </Card>
      <Card className="account-column">
        <form onSubmit={handleLogin}>
          <div className="auth-title">GİRİŞ YAP</div>
          <div>
            <label>
              <input
                type="text"
                placeholder="E-Mail"
                name="email"
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="password"
                name="password"
                placeholder="Şifre"
                onChange={handleInputChange}
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
                }}
              >
                <input type="checkbox" />
                <span>Beni hatırla</span>
              </label>
              <a href="#" className="form-link">
                Şifremi unuttum!
              </a>
            </div>
            <Button
              style={{
                background: "linear-gradient(to top left, #3b4352, #b0996e)",
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
