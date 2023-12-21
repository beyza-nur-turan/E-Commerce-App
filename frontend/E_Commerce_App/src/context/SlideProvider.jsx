import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const SlideContext=createContext();
function SlideProvider({children}){
  const location=useLocation()
    const [slideData, setSlideData] = useState(null);
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    console.log(slideData)

    useEffect(() => {
      const fetchSlideData = async () => {
        try {
          const response = await fetch(`${apiUrl}/slides`); 
          const data = await response.json();
          setSlideData(data);
        } catch (error) {
          console.error('Error fetching slides:', error);
        }
      }; 
      fetchSlideData();
    }, [location.pathname]);
    const data = { slideData};
  return <SlideContext.Provider value={data}>{children}</SlideContext.Provider>;
}
export const useSlideContext = () => useContext(SlideContext);
export default SlideProvider;