import { Row, Col} from "antd";

import "../../css/auth.css";

const Login = () => {
  // const onFinish = (values) => {
  //   console.log("Form values:", values);
  // };
  return (
    <div className="container" >
      <Row className="antd-row">
        
        <Col span={12} className="antd-col-logo"></Col>
        <Col span={12} className="antd-col-content">
          <div className="content-container">
          <h1 style={{marginBottom:"7vh"}}>HOŞGELDİNİZ!</h1>
            <form className="form-container">
              <input  className="inputt" type="text" placeholder="Kullanıcı adınızı girin"/>
              <input className="inputt" type="password" placeholder="Şifrenizi girin"/>

              <button className="form-btn" type="submit">
                Giriş Yap
              </button>

            </form>
            
          </div>
          <div className="divv">Daha önce kayıt olmadınız mı? <button  className="form-btn1">Kayıt Ol</button></div>
        </Col>
        
      </Row>
    </div>
  );
};

export default Login;
