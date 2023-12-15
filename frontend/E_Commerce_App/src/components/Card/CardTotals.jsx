// import { useState } from "react";
// // import { loadStripe } from "@stripe/stripe-js";
// import { useCardContext } from "../../context/CardProvider";
// import { Spin, message } from "antd";

// const CardTotals = () => {
//   const [fastCargoChecked, setFastCargoChecked] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const { cardItems } = useCardContext();
  
//   // const stripePublicKey = import.meta.env.VITE_API_STRIPE_PUBLIC_KEY;
//   const apiUrl = import.meta.env.VITE_API_BASE_URL;
//   const user = localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user"))
//     : null;
//     const cardItemTotals = cardItems.map((item) => {
//       if (item.productItem && item.productItem.price && item.productItem.price.newPrice) {
//         const currentPrice = item.productItem.price.newPrice;
//         const itemTotal = currentPrice * item.quantity;
    
//         return itemTotal;
//       }
    
//       // Tanımlı değilse veya fiyat bilgisi eksikse, varsayılan olarak 0 döner
//       return 0;
//     });
    

//   const subTotals = cardItemTotals.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
//   }, 0);

//   const cargoFee = 15;

//   const cardTotals = fastCargoChecked
//     ? (subTotals + cargoFee).toFixed(2)
//     : subTotals.toFixed(2);

//   const handlePayment = async () => {
//     setLoading(true);
//     if (!user) {
//       return message.info("Ödeme yapabilmek için giriş yapmalısınız!");
//     }

//     const body = {
//       products: cardItems,
//       user: user,
//       cargoFee: fastCargoChecked ? cargoFee : 0,
//     };

//     try {
//       const res = await fetch(`${apiUrl}/payment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       if (!res.ok) {
//         return message.error("Ödeme işlemi başarısız oldu.");
//       }

//       // Yorum satırına aldık, çünkü Stripe olmadan kullanmıyoruz.
//       // const session = await res.json();

//       // Stripe olmadan, sadece başarılı bir ödeme durumunu loglayabiliriz.
//       console.log("Ödeme başarıyla gerçekleşti!");

//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="card-totals">
//       <h2>Card totals</h2>
//       <table>
//         <tbody>
//           <tr className="card-subtotal">
//             <th>Subtotal</th>
//             <td>
//               <span id="subtotal">${subTotals.toFixed(2)}</span>
//             </td>
//           </tr>
//           <tr>
//             <th>Shipping</th>
//             <td>
//               <ul>
//                 <li>
//                   <label>
//                     Fast Cargo: $15.00
//                     <input
//                       type="checkbox"
//                       id="fast-cargo"
//                       checked={fastCargoChecked}
//                       onChange={() => setFastCargoChecked(!fastCargoChecked)}
//                     />
//                   </label>
//                 </li>
//                 <li>
//                   <a href="#">Change Address</a>
//                 </li>
//               </ul>
//             </td>
//           </tr>
//           <tr>
//             <th>Total</th>
//             <td>
//               <strong id="card-total">${cardTotals}</strong>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="checkout">
//         <Spin spinning={loading}>
//           <button className="btn btn-lg" onClick={handlePayment}>
//             Proceed to checkout
//           </button>
//         </Spin>
//       </div>
//     </div>
//   );
// };

// export default CardTotals;




import { useContext, useState } from "react";
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

    try {
      const stripe = await loadStripe(stripePublicKey);

      const res = await fetch(`${apiUrl}/payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        return message.error("Ödeme işlemi başarısız oldu.");
      }

      const session = await res.json();

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
    <div className="card-totals">
      <h2>Card totals</h2>
      <table>
        <tbody>
          <tr className="card-subtotal">
            <th>Subtotal</th>
            <td>
              <span id="subtotal">${subTotals.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>
              <ul>
                <li>
                  <label>
                    Fast Cargo: $15.00
                    <input
                      type="checkbox"
                      id="fast-cargo"
                      checked={fastCargoChecked}
                      onChange={() => setFastCargoChecked(!fastCargoChecked)}
                    />
                  </label>
                </li>
                <li>
                  <a href="#">Change Address</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              <strong id="card-total">${cardTotals}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg" onClick={handlePayment}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CardTotals;