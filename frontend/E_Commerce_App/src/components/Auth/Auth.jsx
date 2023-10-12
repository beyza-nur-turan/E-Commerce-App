import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import "../../css/auth.css";

const Auth = () => {
  return (
    <section className="account-page">
      <div className="container">
        <div className="account-wrapper">
          <Login />
          <Register />
        </div>
      </div>
    </section>
  );
};

export default Auth;