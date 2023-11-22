import PropTypes from "prop-types";
import { useCardContext } from "../../context/CardProvider";
const CardItem = ({ cardItem }) => {
  const { removeFromCard } = useCardContext();
  return (
    <tr className="card-item">
      <td></td>
      <td className="card-image">
        <img src={cardItem.productItem.img[0]} alt="" />
        <button
          style={{ backgroundColor: "#EE403D" }}
          className="bi bi-x delete-card"
          onClick={() => removeFromCard(cardItem.productItem.id)}
        ></button>
      </td>
      {console.log("card", cardItem.productItem.img.singleImage)}
      <td>{cardItem.productItem.name}</td>
      <td>${cardItem.productItem.price.toFixed(2)}</td>
      <td className="product-quantity">{cardItem.quantity}</td>
      <td className="product-subtotal">
        ${(cardItem.productItem.price * cardItem.quantity).toFixed(2)}
      </td>
    </tr>
  );
};

export default CardItem;
CardItem.propTypes = {
  cardItem: PropTypes.object,
};
