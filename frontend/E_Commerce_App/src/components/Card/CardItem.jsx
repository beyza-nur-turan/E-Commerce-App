import PropTypes from "prop-types";
import { useCardContext } from "../../context/CardProvider";
const CardItem = ({cardItem}) => {
  const {removeFromCard}=useCardContext()
    return (
      
      <tr className="card-item">
        <td></td>
        <td className="card-image">
          <img src={cardItem.productItem.img.singleImage} alt="" />
          <button className="bi bi-x delete-card" onClick={()=>removeFromCard(cardItem.productItem.id)} ></button>
        </td>{console.log("card",cardItem.productItem.img.singleImage)}
        <td>{cardItem.productItem.name}</td>
        <td>${cardItem.productItem.price.newPrice}</td>
        <td className="product-quantity">1</td>
        <td className="product-subtotal">$108.00</td>
      </tr>
    );
  };
  
  export default CardItem;
  CardItem.propTypes = {
    cardItem: PropTypes.object,
  };