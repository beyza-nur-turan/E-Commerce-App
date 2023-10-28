
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import CampaignSingle from "../components/Campaigns/CampaignSingle"
import Policy from "../components/Layout/Policy"
function ShopPage() {
  return (
    <>
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
      <Policy />
    </>
  );
}

export default ShopPage;
