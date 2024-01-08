import Reviews from "../../Reviews/Reviews";
import "../../../css/tabs.css";
import { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({singleProduct,setSingleProduct}) => {
  const [activeTab,setActiveTab]=useState("info");
  const handleTabClick = (e,tab) =>{
    e.preventDefault()
    setActiveTab(tab)
  }
  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
        <a
            href="#"
            className={`tab-button ${activeTab === "desc" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "desc")}
          >
            Açıklama
          </a>
        </li>
        <li>
        <a
            href="#"
            className={`tab-button ${activeTab === "info" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "info")}
          >
            Ek Bilgiler
          </a>
        </li>
        <li>
        <a
            href="#"
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "reviews")}
          >
            Yorumlar
          </a>
        </li>
      </ul>
      <div className="tab-panel">
      <div
          className={`tab-panel-descriptions content ${
            activeTab === "desc" ? "active" : ""
          }`}
        >
          <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: singleProduct.description }}
          ></div>
        </div>
        <div
          className={`tab-panel-information content ${
            activeTab === "info" ? "active" : ""
          }`}
          id="info"
        >
          
          <table>
            <tbody>
              <tr>
                <th>Renk</th>
                <td>
                  <p>
                    {singleProduct.colors.join(" , ")}
                  </p>
                </td>
              </tr>
              <tr>
                <th>Beden</th>
                <td>
                  <p>{singleProduct.sizes.map((item,index)=>(
                    <span key={index}>{item.toUpperCase()}
                    {index < singleProduct.sizes.length -1 && ", "}</span>
                    
                  ))}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Reviews
        setSingleProduct={setSingleProduct}
        singleProduct={singleProduct}
          active={activeTab === "reviews" ? "content active" : "content"}
        />
      </div>
    </div>
  );
};

export default Tabs;
Tabs.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};