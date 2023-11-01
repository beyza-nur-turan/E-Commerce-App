import Breadcrumb from "../BreadCrumb/BreadCrumb";
import Gallery from "../Gallery/Gallery";
import Info from "../Info/Info";
import "../../../css/productDetails.css";
import Tabs from "../Tabs/Tabs";

const ProductDetails = () => {
  
  return (
    <section className="single-product">
      <div className="container" style={{marginTop:"50vw",marginBottom:"57vw"}}>
        <div className="single-product-wrapper">
          <Breadcrumb />
          <div className="single-content">
            <main className="site-main">
              <Gallery />
              <Info />
            </main>
          </div>
          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;