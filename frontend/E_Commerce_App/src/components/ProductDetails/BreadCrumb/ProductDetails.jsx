import Breadcrumb from "../BreadCrumb/BreadCrumb";
import Gallery from "../Gallery/Gallery";
import Info from "../Info/Info";
import "../../../css/productDetails.css";
import Tabs from "../Tabs/Tabs";
import PropTypes from "prop-types";

const ProductDetails = ({singleProduct}) => {
  return (
    <section className="single-product">
      <div className="container" style={{marginTop:"50vw",marginBottom:"57vw"}}>
        <div className="single-product-wrapper">
          <Breadcrumb />
          <div className="single-content">
            <main className="site-main">
              <Gallery singleProduct={singleProduct} />
              <Info singleProduct={singleProduct} />
            </main>
          </div>
          <Tabs singleProduct={singleProduct} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
ProductDetails.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};