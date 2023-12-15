import { Button, Result } from "antd";
import {  useEffect } from "react";
import { Link } from "react-router-dom";
import { useCardContext } from "../context/CardProvider";

const Success = () => {
  const { setCardItems } = useCardContext();

  useEffect(() => {
    setCardItems([]);
  }, [setCardItems]);

  return (
    <div className="success-page">
      <div className="container">
        <Result
          status="success"
          title="Ödeme Başarılı!"
          subTitle="Siparişiniz başarıyla tamamlandı"
          extra={[
            <Link to={"/"} key="home">
              <Button type="primary">Ana Sayfa</Button>
            </Link>,

            <Button key="buy">Siparişlerim</Button>
          ]}
        />
      </div>
    </div>
  );
};

export default Success;