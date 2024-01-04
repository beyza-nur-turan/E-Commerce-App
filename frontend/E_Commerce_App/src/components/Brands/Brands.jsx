import BrandItem from "./BrandItem";
import "../../css/Brands.css";
import { useEffect, useState } from "react";
import { AlertService } from "../../services/AlertService";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetchOfficeInfo();
  }, []);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const fetchOfficeInfo = async () => {
    try {
      const response = await fetch(`${apiUrl}/brands`);
      console.log("response:", response);

      if (response.ok) {
        const data1 = await response.json();
        setBrands(data1);
      } else {
        AlertService.showError();
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };
  console.log(brands)
  return (
    <section className="brands">
      <div className="container">
        <ul className="brand-list">
        {brands.map((brand) => (
            <BrandItem brandItem={brand} key={brand._id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brands;