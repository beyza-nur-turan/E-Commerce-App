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
          <th className="product-name">ÜRÜN </th>
          <th className="product-price">ÜCRET</th>
          <th className="product-price">BEDEN</th>
          <th className="product-quantity">ADET</th>
          <th className="product-subtotal">ARA TOPLAM</th>
        </tr>
      </thead>
      <tbody className="cart-wrapper">
        {cardItems.map((item,index) => (
          <CardItem cardItem={item} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default CardTable;