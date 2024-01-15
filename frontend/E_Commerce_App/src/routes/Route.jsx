import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import CardPage from "../pages/CardPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import AuthPage from "../pages/AuthPage";
import CategoryPage from "../pages/Admin/Categories/CategoryPage";
import UpdateCategoryModal from "../modals/UpdateCategoryModal";
import CreateCategoryPage from "../pages/Admin/Categories/CreateCategoryPage";
import ProductPage from "../pages/Admin/Products/ProductPage";
import CreateProductPage from "../pages/Admin/Products/CreateProductPage";
import CouponPage from "../pages/Admin/Coupons/CouponPage";
import CreateCouponPage from "../pages/Admin/Coupons/CreateCouponPage";
import Success from "../pages/Success";
import OrderPage from "../pages/Admin/OrderPage";
import DashboardPage from "../pages/DashboardPage";
import LogoPage from "../pages/Admin/Logo/Logo";
import CreateLogoPage from "../pages/Admin/Logo/CreateLogo";
import SlidePage from "../pages/Admin/Sliders/Slider";
import CreateSlidePage from "../pages/Admin/Sliders/CreateSlider";
import AdminBlogPage from "../pages/Admin/Blogs/BlogPage"
import CreateBlogPage from "../pages/Admin/Blogs/CreateBlogPage";
import OfficeInfoPage from "../pages/Admin/Contact/OfficeInfo";
import ContactPage1 from "../pages/Admin/Contact/ContactPage"
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import Personal from "../components/Auth/personal/Personal";

function RouteFix() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/card" element={<CardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/success" element={<Success />} />
      <Route path="/admin/*">
        <Route index element={<DashboardPage />} />
        <Route path="contact" element={<ContactPage1/>}/>
        <Route path="officeInfo" element={<OfficeInfoPage/>}/>
        <Route path="blogs" element={<AdminBlogPage/>}/>
        <Route path="blogs/create" element={<CreateBlogPage />} />
        <Route path="logo" element={<LogoPage/>}/>
        <Route path="logo/create" element={<CreateLogoPage />} />
        <Route path="slides" element={<SlidePage/>}/>
        <Route path="slides/create" element={<CreateSlidePage/>}/>

        <Route path="categories" element={<CategoryPage />} />
        <Route
          path="categories/update/:categoryId"
          element={<UpdateCategoryModal />}
        />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="coupons" element={<CouponPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />
        <Route path="orders" element={<OrderPage />} />
      </Route>
    </Routes>
  );
}

export default RouteFix;
