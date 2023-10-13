import CardItem from "../Card/CardItem";

const CardTable = () => {
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
      <tbody className="card-wrapper">
        <CardItem />
        <CardItem />
      </tbody>
    </table>
  );
};

export default CardTable;