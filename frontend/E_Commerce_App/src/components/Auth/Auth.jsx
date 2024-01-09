import Login from "./Login";
import Register from "./Register";
import "../../css/auth.css";
import NewLogin from "../../components/Auth/NewLogin"

const Auth = () => {
  return (
    <div className="account-page">
      
       
         <Login/>
          {/* <Register /> */}
        
      
    </div>
  );
};

export default Auth;