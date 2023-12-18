import "../../css/card.css";
import { useCardContext} from "../../context/CardProvider"
import CardCoupon from "../Card/CardCoupon";
import CardProgress from "../Card/CardProgress";
import CardTable from "../Card/CardTable";
import CardTotals from "../Card/CardTotals";

const Card = () => {
  const {cardItems}=useCardContext()
  return (
    <section className="cart-page">
      <div className="container">
        {cardItems.length>0 ? (
          <div className="cart-page-wrapper">
          <form className="cart-form">
            <CardProgress />
            <div className="shop-table-wrapper">
              <CardTable />
              <CardCoupon />
            </div>
          </form>
          <div className="cart-collaterals">
            <CardTotals />
          </div>
        </div>
        ):(
          <h2>Sepette hiç ürün yok!</h2>
        )}
        
      </div>
    </section>
  );
};

export default Card;