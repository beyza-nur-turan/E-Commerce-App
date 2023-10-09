import brandPhoto from "../../assets/img/Brands/brand.png"
const BrandItem = () => {
    return (
      <li className="brand-item">
        <a href="#">
          <img src={brandPhoto} alt="" />
        </a>
      </li>
    );
  };
  
  export default BrandItem;