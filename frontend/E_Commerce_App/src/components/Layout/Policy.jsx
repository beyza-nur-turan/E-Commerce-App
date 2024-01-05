import "../../css/policy.css";

const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck"></i>
            <div className="policy-texts">
              <strong>ÜCRETSİZ TESLİMAT</strong>
              <span>300 TL üzeri alışverişlerinizde</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset"></i>
            <div className="policy-texts">
              <strong>7/24 DESTEK HATTI</strong>
              <span>24 saat çevrimiçi</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise"></i>
            <div className="policy-texts">
              <strong> 30 GÜN İADE HAKKI</strong>
              <span>30 gün içerisinde ürünlerinizi iade edebilirsiniz</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-cart"></i>
            <div className="policy-texts">
              <strong> ÖDEME METODU</strong>
              <span>Güvenli ödeme</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;