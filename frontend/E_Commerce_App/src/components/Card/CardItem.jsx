import PropTypes from "prop-types";
import { useCardContext } from "../../context/CardProvider";
const CardItem = ({ cardItem }) => {
  
  const { removeFromCard } = useCardContext();
  const currentPrice = (cardItem.productItem && cardItem.productItem.price && cardItem.productItem.price.newPrice) || 0;
  const formattedPrice = currentPrice.toFixed(2);
  return (
    <tr className="card-item">
    <td></td>
    <td className="card-image">
      <img src={cardItem.img} alt="" />
      <i
        className="bi bi-x delete-card"
        onClick={() => removeFromCard(cardItem._id)}
      ></i>
    </td>
    <td>{cardItem.name}</td>
    {console.log("cardıtemm:",cardItem.productItem.price.newPrice)}
    <td>${formattedPrice}</td>
    <td className="product-quantity">{cardItem.quantity}</td>
    <td className="product-subtotal">
      ${(currentPrice * cardItem.quantity)}
    </td>
  </tr>
);
};

export default CardItem;
CardItem.propTypes = {
  cardItem: PropTypes.object,
};
