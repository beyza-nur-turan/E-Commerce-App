import "../../../css/gallery.css";
// import Slider from "react-slick";
import { useState } from "react";
import ProductsData from "../../../data.json";
// import PropTypes from "prop-types";
// function NextBtn({ onClick }) {
//   return (
//     <button
//     className="glide__arrow glide__arrow--right"
//     data-glide-dir=">" 
//     onClick={onClick}
//   >
//     <i className="bi bi-chevron-right"></i>
//   </button>
//   );
// }

// NextBtn.propTypes = {
//   onClick: PropTypes.func,
// };

// function PrevBtn({ onClick }) {
//   return (
//     <button
//             className="glide__arrow glide__arrow--left"
//             data-glide-dir="<"
//             onClick={onClick}
//           >
//             <i className="bi bi-chevron-left"></i>
//           </button>
//   );
// }

// PrevBtn.propTypes = {
//   onClick: PropTypes.func,
// };

const Gallery = () => {
  const [activeImg, setActiveImg] = useState(ProductsData[0].img.thumbs[0]);
  // const sliderSettings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 2,
    // slidesToScroll: 1,
    // nextArrow: <NextBtn />,
    // prevArrow: <PrevBtn />,
    // responsive: [
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 520,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  //};
  return (
    <div className="product-gallery">
      {console.log("data:", ProductsData[0].img.thumbs[0])}
      <div className="single-image-wrapper">
        <img src={activeImg} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
            
            {ProductsData[0].img.thumbs.map((itemImg, index) => (
              <li
                onClick={() => setActiveImg(itemImg)}
                key={index}
                className="glide__slide glide__slide--active"
              >
                <img
                  src={itemImg}
                  alt=""
                  className={`img-fluid ${
                    itemImg === activeImg ? "active" : ""
                  } `}
                />
              </li>
            ))}
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          
         
        </div>
      </div>
    </div>
  );
};

export default Gallery;
