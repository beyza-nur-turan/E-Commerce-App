import CategoryItem from "../Categories/CategoryItem";
import "../../css/categories.css";

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>Tüm Kategoriler</h2>
          <p>Sonbahar koleksiyonuna göz atın!</p>
        </div>
        <ul className="category-list">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ul>
      </div>
    </section>
  );
};

export default Categories;