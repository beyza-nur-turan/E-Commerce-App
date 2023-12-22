import BlogItem from "./BlogItem";
import "../../css/Blogs.css";
import { useEffect, useState } from "react";

const Blogs = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [blogData, setBlogData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 3; // Her sayfada gösterilecek blog öğeleri sayısı

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

  const totalSlides = Math.ceil(blogData.length / itemsPerPage);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const visibleBlogs = blogData.slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage);

  return (
    <section  className="blogs">
      <div  className="containerBlog" >
        <div  className="section-title">
          <h2>Bloğumuzdan</h2>
          <p>Sonbahar&apos;ın en şık parçaları</p>
        </div>
        <div className="blog-slider-container">
          <ul className="blog-list">
            {visibleBlogs.map((blog, index) => (
              <BlogItem key={index} blog={blog} />
            ))}
          </ul>
          <div className="slider-controls">
            <button className="slider-control" onClick={handlePrev}>
              &lt;
            </button>
            <span className="slider-page-info">
            </span>
            <button className="slider-control" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
