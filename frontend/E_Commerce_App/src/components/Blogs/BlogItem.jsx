// BlogItem bileşeni
import "../../css/BlogItem.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BlogItem = ({ blog, currentSlide, index }) => {
  const { img, title, _id } = blog;

  return (
    <li className="blog-item">
      <a href="#" className="blog-image">
        {currentSlide === index && <img src={img} alt="" />}
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>9 Ekim 2023 </span>-<span>10 yorum</span>
        </div>
        <div className="blog-info-center">
          <a href="#">{title}</a>
        </div>
        <div className="blog-info-bottom">
          <Link to={`/blog/${_id}`}>Daha Fazla</Link>
        </div>
      </div>
    </li>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  currentSlide: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default BlogItem;
