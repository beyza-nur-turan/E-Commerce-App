import "../../css/BlogItem.css"
import blogphoto from "../../../public/img/Blogs/blog1.jpg"
const BlogItem = () => {
  return (
    <li className="blog-item">
      <a href="#" className="blog-image">
        <img src={blogphoto} alt="" />
      </a>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>9 Ekim 2023 </span>-<span>10 yorum</span>
        </div>
        <div className="blog-info-center">
          <a href="#">Kıyafet sektörü yeniden canlanıyor!!</a>
        </div>
        <div className="blog-info-bottom">
          <a href="#">Daha fazla</a>
        </div>
      </div>
    </li>
  );
};

export default BlogItem;