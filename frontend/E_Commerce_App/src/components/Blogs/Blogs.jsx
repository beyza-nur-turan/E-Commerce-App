import BlogItem from "./BlogItem";
import "../../css/Blogs.css";

const Blogs = () => {
  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title">
          <h2>Bloğumuzdan</h2>
          <p>Sonbahar&apos;ın en şık parçaları</p>
        </div>
        <ul className="blog-list">
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </ul>
      </div>
    </section>
  );
};

export default Blogs;