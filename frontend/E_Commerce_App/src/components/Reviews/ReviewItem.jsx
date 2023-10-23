import avatar from "../../assets/img/Avatars/avatar1.jpg"
const ReviewItem = () => {
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
            <time>April 23, 2022</time>
          </div>
          <div className="comment-description">
            <p>
              Sed perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>
      </li>
    );
  };
  
  export default ReviewItem;