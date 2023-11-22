import "../../css/categoryItem.css"
import category from "../../assets/img/categories/categories.png"
const CategoryItem = () => {
  return (
    <li className="category-item">
      <a href="#">
        <img
          src={category.img}
          alt=""
          className="category-image"
        />
        <span className="category-title">{category.name}</span>
      </a>
    </li>
  );
};

export default CategoryItem;