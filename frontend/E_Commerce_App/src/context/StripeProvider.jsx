<<<<<<< Updated upstream
=======
// import { createContext, useContext, useReducer, useState } from "react"

// const initialState = {
//     totalRevenue: null,
//     totalProducts: null,
//     totalCustomers: null,
//   };
// const StripeContext=createContext();
// const reducer = (state, action) => {
//     switch (action.type) {
//       case "SET_TOTAL_REVENUE":
//         return { ...state, totalRevenue: action.payload };
//       case "SET_TOTAL_PRODUCTS":
//         return { ...state, totalProducts: action.payload };
//       case "SET_TOTAL_CUSTOMERS":
//         return { ...state, totalCustomers: action.payload };
//       default:
//         return state;
//     }
//   };
// function StripeProvider({children}) {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const [stripeData,setStripeData]=useState();
//     const apiUrl = import.meta.env.VITE_API_BASE_URL;
//   return <StripeContext.Provider value={{ state, dispatch }}>{children}</StripeContext.Provider>
// }
// const useStripeContext = () => {
//     const context=()=>useContext(StripeContext);
//     if (!context) {
//       throw new Error("useAppContext must be used within an AppProvider");
//     }
//     return useStripeContext;
//   };

// export {StripeProvider,useStripeContext}



>>>>>>> Stashed changes
import  { createContext, useReducer, useContext } from "react";

const initialState = {
  totalRevenue: null,
  totalProducts: null,
  totalCustomers: null,
};
<<<<<<< Updated upstream
const StripeContext = createContext();
=======

const AppContext = createContext();
>>>>>>> Stashed changes

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOTAL_REVENUE":
      return { ...state, totalRevenue: action.payload };
    case "SET_TOTAL_PRODUCTS":
      return { ...state, totalProducts: action.payload };
    case "SET_TOTAL_CUSTOMERS":
      return { ...state, totalCustomers: action.payload };
<<<<<<< Updated upstream
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
=======
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
>>>>>>> Stashed changes
  }
  return context;
};

<<<<<<< Updated upstream

=======
export { AppProvider, useAppContext };
>>>>>>> Stashed changes
