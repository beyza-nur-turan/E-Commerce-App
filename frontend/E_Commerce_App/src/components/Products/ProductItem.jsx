// import "../../css/productItem.css";
// import PropTypes from "prop-types";
// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import { useCardContext } from "../../context/CardProvider";
// import Box from "@mui/material/Box";
// import Rating from "@mui/material/Rating";
// import StarIcon from "@mui/icons-material/Star";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import { Link } from "react-router-dom";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// const ProductItem = (productItem) => {
//   const [expanded, setExpanded] = React.useState(false);
//   const { cardItems, addToCard } = useCardContext();
//   const value = 3.5;

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//   const filteredCard = cardItems.find(
//     (cardItem) => cardItem._id === productItem._id
//   );
//   console.log("productitem:",productItem)
//   const originalPrice = productItem.productItem.price.current;
//   const discountPercentage = productItem.productItem.price.discount;

//   // İndirimli fiyatı hesaplama
//   const discountedPrice =
//     originalPrice - (originalPrice * discountPercentage) / 100;

//   return (
//     <Card className="cardContainer" sx={{ maxWidth: 500 }}>
//       <div className="product-item glide__slide glide__slide --active"></div>
//       <h4>{productItem.productItem.name}</h4>
//       <Box
//         sx={{
//           width: 200,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Rating
//           name="text-feedback"
//           value={value}
//           readOnly
//           precision={0.5}
//           emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//         />
//       </Box>
//       <div className="product-prices">
//           <strong className="new-price">${discountedPrice.toFixed(2)}</strong>
//           <span className="old-price">${originalPrice.toFixed(2)}</span>
//         </div>
//       <span className="product-discount">
//         {productItem.productItem.price.discount}%
//       </span>

//       <CardActions disableSpacing>
//         <IconButton
//           aria-label="add to card"
//           onClick={() =>
//             addToCard({
//               ...productItem,
//               price: discountedPrice,
//             })
//           }
//           // disabled={filteredCard}
//         >
//           <ShoppingBagIcon />
//         </IconButton>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <Link to={`/product/${productItem.productItem._id}`}>
//           <IconButton aria-label="share">
//             <VisibilityIcon />
//           </IconButton>
//         </Link>
//       </CardActions>
//     </Card>
//   );
// };
// export default ProductItem;
// ProductItem.propTypes = {
//   productItem: PropTypes.object,
//   //setCardItems: PropTypes.func.isRequired,
// };


import PropTypes from "prop-types";
import {useCardContext} from "../../context/CardProvider"
import "../../css/productItem.css";
import { Link } from "react-router-dom";

const ProductItem = ({ productItem }) => {
  const { cardItems, addToCard } = useCardContext();

  const filteredCard = cardItems.find(
    (cardItem) => cardItem._id === productItem._id
  );

  const originalPrice = productItem.price.current;
  const discountPercentage = productItem.price.discount;

  // İndirimli fiyatı hesaplama
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

  return (
    <div className="product-item glide__slide glide__slide--active">
      <div className="product-image">
        <a href="#">
          <img src={productItem.img[0]} alt="" className="img1" />
          <img src={productItem.img[1]} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
          {productItem.name}
        </a>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">${discountedPrice.toFixed(2)}</strong>
          <span className="old-price">${originalPrice.toFixed(2)}</span>
        </div>
        <span className="product-discount">-{productItem.price.discount}%</span>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={() =>
              addToCard({
                ...productItem,
                price: discountedPrice,
              })
            }
            disabled={filteredCard}
          >
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <Link to={`product/${productItem._id}`} className="product-link">
            <i className="bi bi-eye-fill"></i>
          </Link>
          <a href="#">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  productItem: PropTypes.object,
  setCardItems: PropTypes.func,
};
