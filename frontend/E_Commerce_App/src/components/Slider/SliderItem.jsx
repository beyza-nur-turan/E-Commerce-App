import slider1 from "../../assets/img/slider/slider1.jpg"
import slider2 from "../../assets/img/slider/slider2.jpg"
import slider3 from "../../assets/img/slider/slider3.jpg"
import "../../css/sliderItem.css"
const SliderItem = () => {
    return (
      <div className="slider-item fade">
        <div className="slider-image">
          <img src={slider1} className="img-fluid" alt="" />
          <img src={slider2} className="img-fluid" alt="" />
          <img src={slider3} className="img-fluid" alt="" />
        </div>
        <div className="container1">
          <p className="slider-title">2023 Sonbahar</p>
          <h2 className="slider-heading">%60 &apos; a varan indirimler</h2>
          <a href="#" className="btn">
            Şimdi Keşfet
          </a>
        </div>
      </div>
    );
  };
  
  export default SliderItem;