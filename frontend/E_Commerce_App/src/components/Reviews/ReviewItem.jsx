import avatar from "../../assets/img/Avatars/avatar1.jpg"
import PropTypes from "prop-types";
const ReviewItem = ({item}) => {
  const { avatar } = item; 
    return (
      <li className="comment-item">
        <div className="comment-avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="comment-text">
          <ul className="comment-star">
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
            <li>
              <i className="bi bi-star-fill"></i>
            </li>
          </ul>
          <div className="comment-meta">
            <strong>{item.user}</strong>
            <span>-</span>
            <time>April 23, 2022</time>
          </div>
          <div className="comment-description">
            <p>
              {console.log(item)}
              {item.text}
            </p>
          </div>
        </div>
      </li>
    );
  };
  
  export default ReviewItem;
  ReviewItem.propTypes = {
    item: PropTypes.object.isRequired, // Assuming item is an object with review details
  };