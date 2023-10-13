import "../../css/card.css";
import CardCoupon from "../Card/CardCoupon";
import CardProgress from "../Card/CardProgress";
import CardTable from "../Card/CardTable";
import CardTotals from "../Card/CardTotals";

const Card = () => {
  return (
    <section className="card-page">
      <div className="container">
        <div className="card-page-wrapper">
          <form className="card-form">
            <CardProgress />
            <div className="shop-table-wrapper">
              <CardTable />
              <CardCoupon />
            </div>
          </form>
          <div className="card-collaterals">
            <CardTotals />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;