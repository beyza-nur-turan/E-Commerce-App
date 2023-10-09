import "../../css/categoryItem.css"
import category from "../../assets/img/categories/categories.png"
const CategoryItem = () => {
  return (
    <li className="category-item">
      <a href="#">
        <img
          src={category}
          alt=""
          className="category-image"
        />
        <span className="category-title">Akıllı Saat</span>
      </a>
    </li>
  );
};

export default CategoryItem;