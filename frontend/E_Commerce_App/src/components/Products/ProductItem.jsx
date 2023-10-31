import "../../css/productItem.css";
import resim1 from "../../assets/img/Products/Product1/1.png"
import resim2 from "../../assets/img/Products/Product1/2.png"
const ProductItem = () => {
  return (
    <div className="product-item glide__slide glide__slide --active">
      <div className="product-image">
        <a href="#">
          <img src={resim1} alt="" className="img1" />
          <img src={resim2} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
         Kadın Ekoseli Blazer Ceket
        </a>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">350 TL</strong>
          <span className="old-price">1240 TL</span>
        </div>
        <span className="product-discount">-25%</span>
        <div className="product-links">
          <button className="add-to-cart">
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <a href="#" className="product-link">
            <i className="bi bi-eye-fill"></i>
          </a>
          <a href="#">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;