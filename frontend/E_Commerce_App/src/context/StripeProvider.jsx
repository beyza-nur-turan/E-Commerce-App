import  { createContext, useReducer, useContext } from "react";

const initialState = {
  totalRevenue: null,
  totalProducts: null,
  totalCustomers: null,
};
const StripeContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOTAL_REVENUE":
      return { ...state, totalRevenue: action.payload };
    case "SET_TOTAL_PRODUCTS":
      return { ...state, totalProducts: action.payload };
    case "SET_TOTAL_CUSTOMERS":
      return { ...state, totalCustomers: action.payload };
      case "SET_TOTAL_CUSTOMERS_BY_MONTH":
      return { ...state, totalCustomersByMonth: action.payload };
      case "SET_TOTAL_SALES_BY_MONTH":
      return { ...state, totalSalesByMonth: action.payload };
    default:
      return state;
      
    
      
  }
};

export const StripeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StripeContext.Provider value={{ state, dispatch }}>
      {children}
    </StripeContext.Provider>
  );
};

export const useStripeContext = () => {
  const context = useContext(StripeContext);
  if (!context) {
    throw new Error("useStripecontext bir StripeProvider içinde kullanılmalıdır");
  }
  return context;
};


