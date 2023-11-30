import PropTypes from "prop-types";
import { useCardContext } from "../../context/CardProvider";
const CardItem = ({ cardItem }) => {
  
  const { removeFromCard } = useCardContext();
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
    {/* {console.log("cardıtemm:",cardItem.price.current)} */}
    <td>${(cardItem.price?.current || 0).toFixed(2)}</td>
    <td className="product-quantity">{cardItem.quantity}</td>
    <td className="product-subtotal">
      ${(cardItem.current * cardItem.quantity)}
    </td>
  </tr>
);
};

export default CardItem;
CardItem.propTypes = {
  cardItem: PropTypes.object,
};
