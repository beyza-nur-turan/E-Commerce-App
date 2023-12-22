// Blogs bileşeni
import BlogItem from "./BlogItem";
import "../../css/Blogs.css";
import { useEffect, useState } from "react";

const Blogs = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [blogData, setBlogData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${apiUrl}/blogs`);
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Bloglar çekilirken bir hata oluştu:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title">
          <h2>Bloğumuzdan</h2>
          <p>Sonbahar&apos;ın en şık parçaları</p>
        </div>
        <ul className="blog-list">
          {blogData.map((blog, index) => (
            <BlogItem key={index} blog={blog} currentSlide={currentSlide} index={index} blogData={blogData}/>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
