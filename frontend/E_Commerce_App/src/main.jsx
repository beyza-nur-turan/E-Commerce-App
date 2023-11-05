
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardProvider from "./context/CardProvider";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
    <CardProvider>
      <MainLayout>
      <App />
    </MainLayout>
    </CardProvider></BrowserRouter>
);