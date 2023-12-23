// BlogItem bileşeni
import "../../css/BlogItem.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BlogItem = ({ blog}) => {
  const { img, title, _id, createdAt,reviews } = blog;
  //console.log("blog",blog)

  const formatDate = (isoDateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDateString).toLocaleDateString('tr-TR', options);
  };
  
  const formattedDate = formatDate(blog.createdAt); 
  
  return (
    <li className="blog-item">
      <a href="#" className="blog-image">
        { <img  src={img} alt="" />}
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>{formattedDate} </span>-<span>{`  ${blog.reviews.length} yorum`}</span>
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
    createdAt:PropTypes.func.isRequired,
    reviews:PropTypes.func.isRequired
  }).isRequired,
 // currentSlide: PropTypes.number.isRequired,
  //index: PropTypes.number.isRequired,
  
};

export default BlogItem;
