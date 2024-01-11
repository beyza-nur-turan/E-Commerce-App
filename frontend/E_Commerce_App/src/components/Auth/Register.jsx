import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertService } from "../../services/AlertService";
import { Button } from "@mui/material";
import { Card } from "antd";

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

    <div className="register-container">
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
      <Card className="account-column-register">
      
        <form onSubmit={handleRegister}>
        <div className="auth-title">KAYIT OL</div>
          <div>
            <label>
              
              <input
              placeholder="Kullanıcı Adı"
                type="text"
                onChange={handleInputChange}
                name="username"
                required
              />
            </label>
          </div>
          <div>
            <label>
              
              <input
              placeholder="E-Mail"
                type="email"
                onChange={handleInputChange}
                name="email"
                required
              />
            </label>
          </div>
          <div>
            <label>
              <input
              placeholder="Şifre"
                type="password"
                onChange={handleInputChange}
                name="password"
                required
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
            <Button variant="outlined" className="btn">KAYDOL</Button>
          </div>
        </form>
     
    </Card>
    </div>
  );
};

export default Register;
