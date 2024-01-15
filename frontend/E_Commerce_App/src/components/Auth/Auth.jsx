import Login from "./Login";
import "../../css/auth.css";
import { useEffect, useState } from "react";
import Personal from "./personal/Personal";

const Auth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const checkAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };
  useEffect(() => {
    checkAuthenticated();
  }, []);
  return (
    <div className="account-page">
      {isAuthenticated ? <Personal /> : <Login />}
    </div>
  );
};

export default Auth;
