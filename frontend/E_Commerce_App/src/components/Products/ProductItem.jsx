

//   return (
//     <div className="product-item glide__slide glide__slide --active">
//       <div className="product-image">
//         <a href="#">
//           <img
//             src={productItem.productItem.img.singleImage}
//             alt=""
//             className="img1"
//           />
//           <img
//             src={productItem.productItem.img.thumbs[2]}
//             alt=""
//             className="img2"
//           />
//         </a>
//       </div>
//       <div className="product-info">
//         <a href="$" className="product-title">
//           {productItem.productItem.name}
//         </a>
//         <ul className="product-star">
//           <li>
//             <i className="bi bi-star-fill"></i>
//           </li>
//           <li>
//             <i className="bi bi-star-fill"></i>
//           </li>
//           <li>
//             <i className="bi bi-star-fill"></i>
//           </li>
//           <li>
//             <i className="bi bi-star-fill"></i>
//           </li>
//           <li>
//             <i className="bi bi-star-half"></i>
//           </li>
//         </ul>
//         <div className="product-prices">
//           <strong className="new-price">{productItem.productItem.price.newPrice} TL</strong>
//           <span className="old-price">{productItem.productItem.price.oldPrice} TL</span>
//         </div>
//         <span className="product-discount">{productItem.productItem.discount}%</span>
//         <div className="product-links">
//         <button
//             className="add-to-cart"
//             onClick={() => addToCard(productItem)}
//           >
//             <i className="bi bi-basket-fill"></i>
//           </button>
//           <button>
//             <i className="bi bi-heart-fill"></i>
//           </button>
//           <a href="#" className="product-link">
//             <i className="bi bi-eye-fill"></i>
//           </a>
//           <a href="#" >
//             <i className="bi bi-share-fill" onClick={() => addToCard(productItem)}></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProductItem;
// ProductItem.propTypes = {
//   productItem: PropTypes.object,
//   setCardItems: PropTypes.func.isRequired,
// };

import { useState } from "react";
import "../../css/productItem.css";
import PropTypes from "prop-types";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCardContext } from "../../context/CardProvider";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";

  

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

  const ProductItem=(productItem)=> {
    
  const [expanded, setExpanded] = React.useState(false);
  const {cardItems,addToCard}=useCardContext()
  const value = 3.5;
 


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const filteredCard = cardItems.find(
    (cardItem) => cardItem.id === productItem.id
  );

  return (
    <Card className="cardContainer" sx={{ maxWidth: 500 }}>
      
      <div className="product-item glide__slide glide__slide --active">
       
      </div>
      <h4>{productItem.productItem.name}</h4>
      <Box 
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent:"center"
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />

    </Box >
      
      <div className="product-prices">
          <strong className="new-price">{productItem.productItem.price.newPrice} TL</strong>
           <span className="old-price">{productItem.productItem.price.oldPrice} TL</span>
         </div>
         <span className="product-discount">{productItem.productItem.discount}%</span>
        
      <CardActions disableSpacing>
      <IconButton  aria-label="add to card" onClick={() => addToCard(productItem)} 
      // disabled={filteredCard} 
      >
          <ShoppingBagIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Link to={`/product/${productItem.productItem.id}`}>
        <IconButton aria-label="share" >
          <VisibilityIcon />
        </IconButton></Link>
        
      </CardActions>
      
    </Card>
  );
}
export default ProductItem;
ProductItem.propTypes = {
  productItem: PropTypes.object,
  //setCardItems: PropTypes.func.isRequired,
};