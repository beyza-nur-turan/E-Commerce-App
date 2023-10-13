const CardCoupon = () => {
    return (
      <div className="actions-wrapper">
        <div className="coupon">
          <input type="text" className="input-text" placeholder="Coupon code" />
          <button className="btn">Apply Coupon</button>
        </div>
        <div className="update-card">
          <button className="btn">Update Cart</button>
        </div>
      </div>
    );
  };
  
  export default CardCoupon;