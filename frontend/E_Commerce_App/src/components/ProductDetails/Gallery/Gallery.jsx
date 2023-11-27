import "../../../css/gallery.css";
import { useState } from "react";
import ProductsData from "../../../data.json";

const Gallery = ({singleProduct}) => {
  console.log(singleProduct.img[0])
  const [activeImg, setActiveImg] = useState(singleProduct.img[0]);

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={activeImg} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
            {singleProduct.img.map((itemImg, index) => (
              <li
                onClick={() => setActiveImg(itemImg)}
                key={index}
                className={`glide__slide ${
                  itemImg === activeImg ? "glide__slide--active" : ""
                }`}
              >
                <img
                  src={itemImg}
                  alt=""
                  className={`img-fluid ${
                    itemImg === activeImg ? "active" : ""
                  }`}
                />
              </li>
            ))}
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls"></div>
      </div>
    </div>
  );
};

export default Gallery;
