import Header from "../components/Layout/Header";
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import CampaignSingle from "../components/Campaigns/CampaignSingle"
import Policy from "../components/Layout/Policy"
import Footer from "../components/Layout/Footer"
function ShopPage() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
      <Policy />
      <Footer />
    </>
  );
}

export default ShopPage;
