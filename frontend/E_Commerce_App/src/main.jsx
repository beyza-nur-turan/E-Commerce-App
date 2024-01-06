import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Layout } from "./layouts/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProvider from "./context/CardProvider";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LogoProvider from "./context/LogoProvider";
import SlideProvider from "./context/SlideProvider";
import { StripeProvider} from "./context/StripeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <StripeProvider>
    <CardProvider>
      <LogoProvider>
        <SlideProvider>
          <Layout>
            <App />
          </Layout>
        </SlideProvider>
      </LogoProvider>
    </CardProvider>
    </StripeProvider>
  </BrowserRouter>
);
