
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails/BreadCrumb/ProductDetails";
import {useParams} from "react-router-dom"

const ProductDetailsPage = () => {
  const params=useParams();
  console.log("params:",params)
  const [singleProduct, setSingleProduct] = useState(null);
  const { id: productId } = useParams();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/products/${productId}`);

        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }

        const data = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchSingleProduct();
  }, [apiUrl, productId]);

  console.log(singleProduct);

  return singleProduct ? (
    <ProductDetails singleProduct={singleProduct} />
  ) : (
    <p>Ürün Yükleniyor</p>
  );
};

export default ProductDetailsPage;