import Blogs from "../components/Blogs/Blogs"
import Brands from "../components/Brands/Brands"
import CampaignSingle from "../components/Campaigns/CampaignSingle"
import Campaigns from "../components/Campaigns/Campaigns"
import Categories from "../components/Categories/Categories"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
import Policy from "../components/Layout/Policy"
import Products from "../components/Products/Products"
import Sliders from "../components/Slider/Sliders"


function HomePage() {
  return (
    <>
        <Header/>
        <Sliders/>
        <Categories/>
        <Products/>
        <Campaigns/>
        <Blogs/>
        <Brands/>
        <CampaignSingle/>
        <Policy/>
        <Footer/>

    </>
  )
}

export default HomePage
