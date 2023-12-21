import PropTypes from 'prop-types';
import "../../css/sliderItem.css"
import { useSlideContext } from '../../context/SlideProvider';
const SliderItem = ({imageSrc,currentSlide}) => {
  const { slideData } = useSlideContext();
    return (
      <div className="slider-item fade">
        <div className="slider-image">
          <img src={imageSrc} className="img-fluid" alt="" />
        </div>
        <div className="container1">
          <p className="slider-title">{slideData[currentSlide].title}</p>
          <h2 className="slider-heading">{slideData[currentSlide].heading}</h2>
          <a href="#" className="btn">
           {slideData[currentSlide].btnName}
          </a>
        </div>
      </div>
    );
  }; 
  SliderItem.propTypes={
    imageSrc: PropTypes.string.isRequired,
    currentSlide:PropTypes.number.isRequired
  }
  export default SliderItem;