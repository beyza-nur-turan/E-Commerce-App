// import "../../../css/gallery.css";
// import { useState } from "react";
// import ProductsData from "../../../data.json";

// const Gallery = ({singleProduct}) => {
//   console.log(singleProduct.img[0])
//   const [activeImg, setActiveImg] = useState(singleProduct.img[0]);

//   return (
//     <div className="product-gallery">
//       <div className="single-image-wrapper">
//         <img src={activeImg} id="single-image" alt="" />
//       </div>
//       <div className="product-thumb">
//         <div className="glide__track" data-glide-el="track">
//           <ol className="gallery-thumbs glide__slides">
//             {singleProduct.img.map((itemImg, index) => (
//               <li
//                 onClick={() => setActiveImg(itemImg)}
//                 key={index}
//                 className={`glide__slide ${
//                   itemImg === activeImg ? "glide__slide--active" : ""
//                 }`}
//               >
//                 <img
//                   src={itemImg}
//                   alt=""
//                   className={`img-fluid ${
//                     itemImg === activeImg ? "active" : ""
//                   }`}
//                 />
//               </li>
//             ))}
//           </ol>
//         </div>
//         <div className="glide__arrows" data-glide-el="controls"></div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;



import { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "../../../css/gallery.css";
import { useEffect } from "react";

function PrevBtn({ onClick }) {
  return (
    <button
      className="glide__arrow glide__arrow--left"
      data-glide-dir="<"
      onClick={onClick}
      style={{
        zIndex: "2",
      }}
    >
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}

function NextBtn({ onClick }) {
  return (
    <button
      className="glide__arrow glide__arrow--right"
      data-glide-dir=">"
      onClick={onClick}
      style={{
        zIndex: "2",
      }}
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
};

PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Gallery = ({ singleProduct }) => {
  const [activeImg, setActiveImg] = useState({
    img: "",
    imgIndex: 0,
  });

  useEffect(() => {
    setActiveImg({ img: singleProduct.img[0], imgIndex: 0 });
  }, [singleProduct.img]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={`${activeImg.img}`} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
            <Slider {...sliderSettings}>
              {singleProduct.img.map((itemImg, index) => (
                <li
                  className="glide__slide glide__slide--active"
                  key={index}
                  onClick={() =>
                    setActiveImg({
                      img: itemImg,
                      imgIndex: index,
                    })
                  }
                >
                  <img
                    src={`${itemImg}`}
                    alt=""
                    className={`img-fluid ${
                      activeImg.imgIndex === index ? "active" : ""
                    } `}
                  />
                </li>
              ))}
            </Slider>
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls"></div>
      </div>
    </div>
  );
};

export default Gallery;

Gallery.propTypes = {
  singleProduct: PropTypes.object,
};

