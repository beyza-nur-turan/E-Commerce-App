import PropTypes from "prop-types";
import { useCardContext } from "../../context/CardProvider";
const CardItem = ({ cardItem }) => {
  
  const { removeFromCard } = useCardContext();
  const currentPrice = (cardItem && cardItem.price && cardItem.price) || 0;
  const formattedPrice = currentPrice.toFixed(2);
  return (
    <tr className="cart-item">
    <td></td>
    <td className="cart-image">
      <img style={{width:"5em", height:"6em"}} src={cardItem.img[0]} alt="" />
      <i
        className="bi bi-x delete-cart"
        onClick={() => removeFromCard(cardItem._id)}
      ></i>
    </td>
    <td>{cardItem.name}</td>
    {console.log("cardıtemm:",cardItem)}
    <td>${formattedPrice}</td>
    <td className="product-quantity">{cardItem.quantity}</td>
    <td className="product-subtotal">
      ${(currentPrice * cardItem.quantity).toFixed(2)}
    </td>
  </tr>
);
};

export default CardItem;
CardItem.propTypes = {
  cardItem: PropTypes.object,
};
