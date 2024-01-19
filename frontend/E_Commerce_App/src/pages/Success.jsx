import { Button } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCardContext } from "../context/CardProvider";
import "../css/success.css"

const Success = () => {
  const { setCardItems } = useCardContext();

  useEffect(() => {
    setCardItems([]);
  }, [setCardItems]);

  return (
    <div
      
      className="success-page"
    >
      <div
        
        className="container"
      >
        <img className="success-img"
          
          src="../../public/img/success/success.png"
        />
        <div className="success-content"
         
        >
          <h2>Ödeme İşlemi Başarılı !</h2>
          <p> Siparişiniz başarıyla tamamlandı.</p>
          <div className="buttons"
            
          >
            <Link to={"/"} key="home">
              <Button className="home-button"
                style={{
                  backgroundColor: "#25AE89",
                  
                }}
                
              >
                Ana Sayfa
              </Button>
            </Link>
            <Button
              style={{
                backgroundColor: "#000E26",
                
              }}
              key="buy"
            >
              Siparişlerim
            </Button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Success;
