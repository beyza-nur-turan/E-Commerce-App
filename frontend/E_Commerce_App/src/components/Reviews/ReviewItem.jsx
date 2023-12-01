import avatar from "../../assets/img/Avatars/avatar1.jpg"
import PropTypes from "prop-types";
const ReviewItem = ({reviewItem}) => {
  const { text, createdAt } = reviewItem;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(createdAt).toLocaleDateString(
    "tr-TR",
    options
  ); 
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
            <strong>admin</strong>
            <span>-</span>
            <time>{formattedDate}</time>
          </div>
          <div className="comment-description">
            <p>
              {text}
            </p>
          </div>
        </div>
      </li>
    );
  };
  
  export default ReviewItem;
  ReviewItem.propTypes = {
    reviewItem:PropTypes.object
  };