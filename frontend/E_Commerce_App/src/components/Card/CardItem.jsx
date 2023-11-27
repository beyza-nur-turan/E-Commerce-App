import PropTypes from "prop-types";
import { useCardContext } from "../../context/CardProvider";
const CardItem = ({ cardItem }) => {
  console.log(cardItem)
  const { removeFromCard } = useCardContext();
  return (
    <tr className="card-item">
    <td></td>
    <td className="card-image">
      <img src={cardItem.img[0]} alt="" />
      <i
        className="bi bi-x delete-card"
        onClick={() => removeFromCard(cardItem._id)}
      ></i>
    </td>
    <td>{cardItem.name}</td>
    <td>${cardItem.price.current.toFixed(2)}</td>
    <td className="product-quantity">{cardItem.quantity}</td>
    <td className="product-subtotal">
      ${(cardItem.price * cardItem.quantity).toFixed(2)}
    </td>
  </tr>
);
};

export default CardItem;
CardItem.propTypes = {
  cardItem: PropTypes.object,
};
