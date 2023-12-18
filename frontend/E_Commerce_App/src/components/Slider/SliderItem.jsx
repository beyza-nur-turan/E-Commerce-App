import PropTypes from 'prop-types';
import "../../css/sliderItem.css"
const SliderItem = ({imageSrc}) => {
    return (
      <div className="slider-item fade">
        <div className="slider-image">
          <img src={imageSrc} className="img-fluid" alt="" />
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
  SliderItem.propTypes={
    imageSrc: PropTypes.string.isRequired,
  }
  export default SliderItem;