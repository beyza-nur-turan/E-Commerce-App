import {  useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useCardContext } from "../../context/CardProvider";
import { message } from "antd";

const CardTotals = () => {
  const [fastCargoChecked, setFastCargoChecked] = useState(false);
  const { cardItems } = useCardContext();
  const stripePublicKey = import.meta.env.VITE_API_STRIPE_PUBLIC_KEY;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const cardItemTotals = cardItems.map((item) => {
    console.log(item)
     const itemTotal = item.price * item.quantity;
    
    return itemTotal;
  });
  const subTotals = cardItemTotals.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
  const cargoFee = 15;
  const cardTotals = fastCargoChecked
    ? (subTotals + cargoFee).toFixed(2)
    : subTotals.toFixed(2);

  const handlePayment = async () => {
    if (!user) {
      return message.info("Ödeme yapabilmek için giriş yapmalısınız!");
    }
    const body = {
      products: cardItems,
      user: user,
      cargoFee: fastCargoChecked ? cargoFee : 0,
    };
    console.log(body)

    try {
      const stripe = await loadStripe(stripePublicKey);
      const res = await fetch(`${apiUrl}/payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(res)

      if (!res.ok) {
        return message.error("Ödeme işlemi başarısız oldu.");
      }

      const session = await res.json();
      console.log("Stripe Session:", session);

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-totals">
      <h2>Sepet Toplamı</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Ara Toplam</th>
            <td>
              <span id="subtotal">${subTotals.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <th>Nakliye</th>
            <td>
              <ul>
                <li>
                  <label>
                    Hızlı Kargo: $15.00
                    <input
                      type="checkbox"
                      id="fast-cargo"
                      checked={fastCargoChecked}
                      onChange={() => setFastCargoChecked(!fastCargoChecked)}
                    />
                  </label>
                </li>
                <li>
                  <a href="#">Adres Değiştir</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Toplam</th>
            <td>
              <strong id="cart-total">${cardTotals}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg" onClick={handlePayment}>
          Ödemeyi Tamamla
        </button>
      </div>
    </div>
  );
};

export default CardTotals;