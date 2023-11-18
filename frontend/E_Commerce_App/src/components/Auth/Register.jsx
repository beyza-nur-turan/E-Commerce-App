import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertService } from "../../services/AlertService";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
   const apiUrl = import.meta.env.VITE_API_REGISTER_URL;
  // const handleInputSubmit = (e) => {
  //   try {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   } catch (error) {
  //     console.error("Input değeri ayarlanırken hata oluştu:", error);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form gönderildi:", formData);
  // };

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
      console.log("dönen data:",response)
      

      if (response.ok) {
        const data = await response.json();
        // const { password, ...rest } = data; password ü çıkart data ya o şekilde kaydet dedik yani datada password hariç bilgiler olacak
        console.log("gelen data",data)
        
        localStorage.setItem("user", JSON.stringify(data));//dönen datayı localstorageyede kaydetmek için kullanıldı
        AlertService.showOk()
        navigate("/");
      } else {
        AlertService.showError()
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };

  return (
    <div className="account-column">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>
            <span>
              Username <span className="required">*</span>
            </span>
            <input type="text" onChange={handleInputChange} name="username" required />
          </label>
        </div>
        <div>
          <label>
            <span>
              Email address <span className="required">*</span>
            </span>
            <input type="email" onChange={handleInputChange} name="email" required />
          </label>
        </div>
        <div>
          <label>
            <span>
              Password <span className="required">*</span>
            </span>
            <input
              type="password"
              onChange={handleInputChange}
              name="password"
              required
            />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <a href="#">privacy policy.</a>
          </p>
          <button className="btn btn-sm">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
