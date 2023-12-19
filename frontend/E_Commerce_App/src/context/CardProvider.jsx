import { createContext, useContext, useEffect, useState } from "react";
import ProductsData from "../data.json";
const CardContext = createContext();
function CardProvider({ children }) {
  const [cardItems, setCardItems] = useState(
    localStorage.getItem("cardItems")
      ? JSON.parse(localStorage.getItem("cardItems"))
      : []
  );
  const [products] = useState(ProductsData);
  useEffect(() => {
    localStorage.setItem("cardItems", JSON.stringify(cardItems));
  }, [cardItems]);
  console.log("cardıtem", cardItems);
  const addToCard = (cardItem) => {
    setCardItems((prevCard) => [...prevCard, {
      ...cardItem,quantity:cardItem.quantity ? cardItem.quantity : 1
    }]);
  };
  const removeFromCard = (itemId) => {
    const filteredCardItems = cardItems.filter((cardItem) => {
      return cardItem._id !== itemId;
    });

    setCardItems(filteredCardItems);
  };

  const data = { cardItems, setCardItems, products, addToCard, removeFromCard };
  return <CardContext.Provider value={data}>{children}</CardContext.Provider>;
}
export const useCardContext = () => useContext(CardContext);
export default CardProvider;
