import "../../../css/gallery.css";
import resim from "../../../assets/img/Products/Product2/1.png"
import resim1 from "../../../assets/img/Products/Product2/2.png"
import resim2 from "../../../assets/img/Products/Product2/3.png"

const Gallery = () => {
  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={resim} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol
            className="gallery-thumbs glide__slides"
          >
            <li
              className="glide__slide glide__slide--active"

            >
              <img
                src={resim1}
                alt=""
                className="img-fluid active"
              />
            </li>

            <li
              className="glide__slide"

            >
              <img src={resim2} alt="" className="img-fluid" />
            </li>

            <li className="glide__slide" >
              <img src={resim2} alt="" className="img-fluid" />
            </li>
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;