import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const LogoContext=createContext();
function LogoProvider({children}){
  const location=useLocation()
    const [logoData, setLogoData] = useState(null);
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
      const fetchLogoData = async () => {
        try {
          const response = await fetch(`${apiUrl}/logo`); 
          const data = await response.json();
          setLogoData(data);
        } catch (error) {
          console.error('Error fetching logo:', error);
        }
      };
  
      fetchLogoData();
    }, [location.pathname]);


    const data = { logoData};
  return <LogoContext.Provider value={data}>{children}</LogoContext.Provider>;
}
export const useLogoContext = () => useContext(LogoContext);
export default LogoProvider;