import { Row, Col } from "antd";
import "../../css/auth.css";
import { useState } from "react";

const Login = () => {
  const [formData,setFormData]=useState({
    username:"",
    email:"",
    password:"",
  });
  const handleInputSubmit=(e)=>{
    const {name,value}=e.target
    setFormData({...formData, [name]:value})//burada ilgili name ile eşleşen value değeerini alıp setliyor
  }

  return (
    <div className="container">
      <Row className="antd-row">
        <Col span={12} className="antd-col-logo"></Col>
        <Col span={12} className="antd-col-content">
          <div className="content-container">
            <h1 style={{ marginBottom: "7vh" }}>HOŞGELDİNİZ!</h1>
            <form className="form-container">
              <input
              onChange={handleInputSubmit}
                className="inputt"
                type="text"
                name="username"
                placeholder="İsminizi ve Soyisminizi girin"
              />
              <input
              onChange={handleInputSubmit}
                className="inputt"
                type="text"
                name="email"
                placeholder=" E-Mail adresinizi girin"
              />
              <input
              onChange={handleInputSubmit}
                className="inputt"
                type="text"
                name="password"
                placeholder="Şifrenizi girin"
              />
              

              <button className="form-btn" type="submit">
                Kayıt Ol
              </button>
            </form>
          </div>
          <div className="divv">
            Daha önce kayıt yaptırdınız mı?{" "}
            <button className="form-btn1">Giriş Yap</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
