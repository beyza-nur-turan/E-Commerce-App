import ProductItem from "../Products/ProductItem";
import "../../css/products.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductsData from "../../data.json";
import { useCardContext } from "../../context/CardProvider";
import { AlertService } from "../../services/AlertService";

function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
};

function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}

PrevBtn.propTypes = {
  onClick: PropTypes.func,
};
const Products = () => {
  const {cardItems}=useCardContext()
  console.log(cardItems);

  const [products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          AlertService.showError()
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchProducts();
  }, [apiUrl]);

  const sliderSettings = {
   
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="products">
      {console.log("data:", ProductsData[0].img.thumbs[0])}
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
          {/* Data:{cardItems} */}
        </div>
        <div className="product-wrapper product-carousel">
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <ProductItem productItem={product}  key={product._id} />
              
            ))}
          </Slider>
         
        </div>
      </div>
    </section>
  );
};

export default Products;
