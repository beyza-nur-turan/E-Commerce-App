import { useState } from "react";
import "../../css/productItem.css";
import PropTypes from "prop-types";
const ProductItem = (productItem) => {
  const [cardItems,setCardItems]=useState([]);
  const addToCard=(cardItem)=>{
    setCardItems((prevCard)=>[...prevCard,cardItem])
  }
  {
    console.log(cardItems);
  }
  return (
    <div className="product-item glide__slide glide__slide --active">
      <div className="product-image">
        <a href="#">
          <img
            src={productItem.productItem.img.singleImage}
            alt=""
            className="img1"
          />
          <img
            src={productItem.productItem.img.thumbs[2]}
            alt=""
            className="img2"
          />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
          {productItem.productItem.name}
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
          <strong className="new-price">{productItem.productItem.price.newPrice} TL</strong>
          <span className="old-price">{productItem.productItem.price.oldPrice} TL</span>
        </div>
        <span className="product-discount">{productItem.productItem.discount}%</span>
        <div className="product-links">
          <button className="add-to-cart" >
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <a href="#" className="product-link">
            <i className="bi bi-eye-fill"></i>
          </a>
          <a href="#" onClick={addToCard}>
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
ProductItem.propTypes = {
  productItem: PropTypes.object,
};
