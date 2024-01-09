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
        deneme
        
       
      </Card>
      <Card className="account-column">
        
        <div className="auth-title">HOŞGELDİNİZ</div>
        <form onSubmit={handleLogin}>
          <div>
            <label>
              <span>
                E-Posta Adresi 
              </span>
              <input
                type="text"
                name="email"
                onChange={handleInputChange}
                
              />
            </label>
          </div>
          <div>
            <label>
              <span>
                Şifre 
              </span>
              <input
                type="password"
                name="password"
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
            <label>
              <input type="checkbox" />
              <span>Beni hatırla</span>
            </label>
            <a href="#" className="form-link">
              Lost your password?
            </a>
            <button className="btn btn-sm">Giriş Yap</button>
            <span> Daha önce kayıt yaptırmadınız mı?
            <Link>Kaydol</Link>
            </span>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
