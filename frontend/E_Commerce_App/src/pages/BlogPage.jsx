
import Blogs from "../components/Blogs/Blogs";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import "../App.css"
const BlogPage = () => {
  return (
    <>
      <Header/>
      <div className="blog-page">
        <Blogs/>
      </div>
      <Footer />
    </>
  );
};
export default BlogPage;