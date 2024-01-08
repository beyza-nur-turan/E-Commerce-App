import { AlertService } from "../../services/AlertService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import "../../css/auth.css"
import Register from "./Register";

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
    <div className="account-column">
      <div className="muiButton">
        <Button variant="text">GİRİŞ YAP</Button> 
        <div className="verticalLine"></div>
        <Button onClick={()=>{
          navigate("/register")
        }} variant="text">Üye Ol</Button>
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            <span>
              E-Posta Adresi <span className="required">*</span>
            </span>
            <input
              type="text"
              name="email"
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Şifre <span className="required">*</span>
            </span>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <p style={{display:"flex", justifyContent:"center",alignItems:"center"}} className="remember">
          <label>
            <input type="checkbox" />
            <span>Beni hatırla</span>
          </label>
          <a href="#" className="form-link">
          Lost your password?
        </a>
          <button className="btn btn-sm">Giriş Yap</button>
        </p>
        
      </form>
    </div>
  );
};

export default Login;
