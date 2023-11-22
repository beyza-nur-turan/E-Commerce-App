import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import CardPage from "../pages/CardPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import AuthPage from "../pages/AuthPage";
import Login from "../components/Auth/Login";
import UserPage from "../pages/Admin/UserPage";
import CategoryPage from "../pages/Admin/Categories/CategoryPage";
import UpdateCategoryModal from "../modals/UpdateCategoryModal";
import CreateCategoryPage from "../pages/Admin/Categories/CreateCategoryPage";
import ProductPage from "../pages/Admin/Products/ProductPage";
import CreateProductPage from "../pages/Admin/Products/CreateProductPage";

function RouteFix() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/card" element={<CardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/admin/*">
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/update/:categoryId" element={<UpdateCategoryModal />} />
        <Route path="categories/create" element={<CreateCategoryPage  />} />
        <Route path="products" element={<ProductPage  />} />
        <Route path="products/create" element={<CreateProductPage  />} />
      </Route>
    </Routes>
  );
}

export default RouteFix;
