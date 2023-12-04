import { message } from "antd";
import { useState } from "react";
import { useCardContext } from "../../context/CardProvider";

const CardCoupon = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [couponCode, setCouponCode] = useState("");
  const { setCardItems, cardItems } = useCardContext();
  //console.log(cardItems)

  const applyButton = async () => {
    try {
      const res = await fetch(`${apiUrl}/coupons/code/${couponCode}`);
      if (!res.ok) {
        return message.warning("Girdiğiniz kod hatalı");
      }
      const data = await res.json();

      const discountPercent = data.discountPercent;

      // Kart öğelerini güncellerken her bir öğenin 'updatePrice' özelliğini ekleyin.
      const updatedCardItems = cardItems.map((item) => {
        const updatePrice =
          item.productItem.price.newPrice * (1 - discountPercent / 100);
        return { ...item, updatePrice };
      });

      // Güncellenmiş kart öğelerini kart context'ine kaydedin.
      setCardItems(updatedCardItems);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="actions-wrapper">
      <div className="coupon">
        <input
          type="text"
          className="input-text"
          placeholder="Coupon code"
          onChange={(e) => setCouponCode(e.target.value)}
          value={couponCode}
        />
        <button className="btn" type="button" onClick={applyButton}>
          Apply Coupon
        </button>
      </div>
      <div className="update-card">
        <button className="btn">Update Cart</button>
      </div>
    </div>
  );
};

export default CardCoupon;
