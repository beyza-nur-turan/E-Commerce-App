import BlogDetails from "../components/BlogDetails/BlogDetails";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { Fragment } from "react";


const BlogDetailsPage = () => {
  return (
    <Fragment>
     <Header/>
     <BlogDetails/>
     <Footer/>
    </Fragment>
  );
};

export default BlogDetailsPage;