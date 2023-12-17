
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {Layout} from "./layouts/Layout";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardProvider from "./context/CardProvider";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
    <ScrollToTop/>
    <CardProvider>
      <Layout>
      <App />
    </Layout>
    </CardProvider></BrowserRouter>
);