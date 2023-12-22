import Reviews from "../../components/Reviews/Reviews";
import "../../css/BlogDetails.css";
import blogPicture from "../../assets/img/Blogs/blog1.jpg"
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [blogData, setBlogData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const descArray = blogData ? blogData.map((blog) => blog.description) : [];
  

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
   const imgArray = blogData ? blogData.map((blog) => blog.img) : [];
   
   //console.log(blogData[0].description)
  return (
    <section className="single-blog">
      <div className="container">
        <article>
          <figure>
            <a href="#">
              <img src={imgArray} alt="" />
            </a>
          </figure>
          <div className="blog-wrapper">
            <div className="blog-meta">
              <div className="blog-category">
                <a href="#">COLLECTION</a>
              </div>
              <div className="blog-date">
                <a href="#">April 25, 2022</a>
              </div>
              <div className="blog-tags">
                <a href="#">products</a>,<a href="#">coats</a>
              </div>
            </div>
            <h1 className="blog-title">The Best Products That Shape Fashion</h1>
            <div className="blog-content">
            {descArray.map((value, index) => (
          currentSlide===index &&
          <p key={index}>{value}</p>
        ))}
            </div>
          </div>
        </article>
        <Reviews />
      </div>
    </section>
  );
};

export default BlogDetails;