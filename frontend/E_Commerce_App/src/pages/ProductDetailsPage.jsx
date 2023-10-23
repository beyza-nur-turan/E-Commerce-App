import { Fragment } from "react";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/ProductDetails/BreadCrumb/ProductDetails";
import Footer from "../components/Layout/Footer";

const ProductDetailsPage = () => {
  return (
    <Fragment>
      <Header />
      <ProductDetails />
      <Footer />
    </Fragment>
  );
};

export default ProductDetailsPage;