import CardItem from "../Card/CardItem";
import { useCardContext } from "../../context/CardProvider";
const CardTable = () => {
  const {cardItems}=useCardContext()
  return (
    <table className="shop-table">
      <thead>
        <tr>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-name">Product</th>
          <th className="product-price">Price</th>
          <th className="product-quantity">Quantity</th>
          <th className="product-subtotal">Subtotal</th>
        </tr>
      </thead>
      <tbody className="cart-wrapper">
        {cardItems.map((item) => (
          <CardItem cardItem={item} key={item._id} />
        ))}
      </tbody>
    </table>
  );
};

export default CardTable;