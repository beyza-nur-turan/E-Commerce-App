import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertService } from "../../services/AlertService";
import { Button } from "@mui/material";
import { Card, Input, Tooltip } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  SafetyOutlined,
  MailOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_REGISTER_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault(); //formun varsayılan değeri alınıyor
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData)
      console.log("dönen data:", response);

      if (response.ok) {
        const data = await response.json();
        // const { password, ...rest } = data; password ü çıkart data ya o şekilde kaydet dedik yani datada password hariç bilgiler olacak
        console.log("gelen data", data);

        localStorage.setItem("user", JSON.stringify(data)); //dönen datayı localstorageyede kaydetmek için kullanıldı
        AlertService.showOk();
        navigate("/");
      } else {
        AlertService.showError();
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };

  return (
    <div className="account-page">
      <div className="register-container">
      <Card className="account-column-register-left">
        <h1> HOŞGELDİNİZ</h1>
        <label>
          Hayalinizdeki ürünleri keşfetmek ve satın almak için hemen kayıt olun.
        </label>
        <Button style={{cursor:"initial"}}
          onClick={() => navigate("/register")}
          
          variant="outlined"
        >
          <ArrowRightOutlined style={{fontSize:"28px"}} />
        </Button>
      </Card>
      <Card className="account-column-register-right">
        <form >
          <div className="auth-title">KAYIT OL</div>
          <div>
            <label>
            <Input
            name="username"
            onChange={handleInputChange}
      placeholder="Kullanıcı Adı"
      prefix={<UserOutlined className="site-form-item-icon" />} 
      
    />
            </label>
          </div>
          <div>
            <label>
            <Input
            name="email"
            onChange={handleInputChange}
      placeholder="E-Mail"
      prefix={<MailOutlined  className="site-form-item-icon" />} 
      
    />
            </label>
          </div>
          <div>
            <label>
            <Input
             name="password"
             type="password"
             onChange={handleInputChange}
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
          <div
            className="privacy-policy-text remember"
            style={{ display: "flex", alignItems: "center" }}
          >
            {/* <p>
              Kişisel verileriniz bu web sitesindeki deneyiminizi desteklemek,
              hesabınıza erişimi yönetmek ve{" "}
              <a href="#">gizlilik politikamızda </a>
              açıklanan diğer amaçlar için kullanılacaktır.
            </p> */}
            <Button
            onClick={handleRegister} style={{
                background: "linear-gradient(to top left, #000E26, #3a7d83)",
                marginTop: "2em",
              }} variant="outlined" className="btn">
              Kayıt Ol
            </Button>
          </div>
        </form>
      </Card>
    </div>
    </div>
  );
};

export default Register;
