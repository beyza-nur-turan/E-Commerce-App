
import PropTypes from "prop-types";
const BrandItem = ({brandItem}) => {
  console.log(brandItem.img)
    return (
      <li className="brand-item">
        <a href="#">
          <img style={{width:"5rem",height:"5rem",}} src={brandItem.img} alt="" />
        </a>
      </li>
    );
  };
 
  
  export default BrandItem;
  BrandItem.propTypes = {
    brandItem: PropTypes.shape({
      img: PropTypes.string.isRequired,
    }),
  };