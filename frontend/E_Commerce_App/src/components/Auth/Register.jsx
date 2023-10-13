import { Row, Col } from "antd";
import "../../css/auth.css";

const Login = () => {
  return (
    <div className="container">
      <Row className="antd-row">
        <Col span={12} className="antd-col-logo"></Col>
        <Col span={12} className="antd-col-content">
          <div className="content-container">
            <h1 style={{ marginBottom: "7vh" }}>HOŞGELDİNİZ!</h1>
            <form className="form-container">
              <input
                className="inputt"
                type="text"
                placeholder="İsminizi ve Soyisminizi girin"
              />
              <input
                className="inputt"
                type="text"
                placeholder=" E-Mail adresinizi girin"
              />
              <input
                className="inputt"
                type="text"
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
