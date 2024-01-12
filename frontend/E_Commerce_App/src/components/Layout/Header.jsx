import Proptypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useCardContext } from "../../context/CardProvider";
import "../../css/header.css";
import { useLogoContext } from "../../context/LogoProvider";

const Header = ({ setIsSearchShow }) => {
  const { logoData } = useLogoContext();
  const { cardItems } = useCardContext();
  const user = localStorage.getItem("user");
  const { pathname } = useLocation();

  return (
    <header>
      <div className="global-notification" style={{background: "linear-gradient(to top left, #000E26, #0f3936 )"}}>
        <div className="container" >
        {/* #204e4a */}
          <p>
            Tüm atkılarda %50 indirim ve  ücretsiz teslimat fırsatını kaçırma
            <a style={{fontSize:"12px"}} href="shop.html"> ALIŞVERİŞE BAŞLA</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
                <img
                  style={{ width: "12vh", height: "12vh", marginLeft: "20vh" }}
                  src={logoData && logoData.length > 0 && logoData[0].img}
                  alt="Logo"
                />
                {/* <img src="../../../public/img/Logo/bnt.png"/> */}
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"}`}
                    >
                      Ana Sayfa
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <ul className="menu-dropdown-content">
                        <li>
                          <a href="#">Home Clean</a>
                        </li>
                        <li>
                          <a href="#">Home Collection</a>
                        </li>
                        <li>
                          <a href="#">Home Minimal</a>
                        </li>
                        <li>
                          <a href="#">Home Modern</a>
                        </li>
                        <li>
                          <a href="#">Home Parallax</a>
                        </li>
                        <li>
                          <a href="#">Home Strong</a>
                        </li>
                        <li>
                          <a href="#">Home Style</a>
                        </li>
                        <li>
                          <a href="#">Home Unique</a>
                        </li>
                        <li>
                          <a href="#">Home RTL</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${
                        pathname === "/shop" && "active"
                      }`}
                    >
                      ALIŞVERİŞ
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    <div className="menu-dropdown-wrapper">
                      <div className="menu-dropdown-megamenu">
                        <div className="megamenu-links">
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Shop Style
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Shop Standard</a>
                              </li>
                              <li>
                                <a href="#">Shop Full</a>
                              </li>
                              <li>
                                <a href="#">Shop Only Categories</a>
                              </li>
                              <li>
                                <a href="#">Shop Image Categories</a>
                              </li>
                              <li>
                                <a href="#">Shop Sub Categories</a>
                              </li>
                              <li>
                                <a href="#">Shop List</a>
                              </li>
                              <li>
                                <a href="#">Hover Style 1</a>
                              </li>
                              <li>
                                <a href="#">Hover Style 2</a>
                              </li>
                              <li>
                                <a href="#">Hover Style 3</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Filter Layout
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Sidebar</a>
                              </li>
                              <li>
                                <a href="#">Filter Side Out</a>
                              </li>
                              <li>
                                <a href="#">Filter Dropdown</a>
                              </li>
                              <li>
                                <a href="#">Filter Drawer</a>
                              </li>
                            </ul>
                          </div>
                          <div className="megamenu-products">
                            <h3 className="megamenu-products-title">
                              Shop Loader
                            </h3>
                            <ul className="megamenu-menu-list">
                              <li>
                                <a href="#">Shop Pagination</a>
                              </li>
                              <li>
                                <a href="#">Shop Infinity</a>
                              </li>
                              <li>
                                <a href="#">Shop Load More</a>
                              </li>
                              <li>
                                <a href="#">Cart Modal</a>
                              </li>
                              <li>
                                <a href="#">Cart Drawer</a>
                              </li>
                              <li>
                                <a href="#">Cart Page</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="megamenu-single">
                          <a href="#">
                            <img src="/img/mega-menu.jpg" alt="" />
                          </a>
                          <h3 className="megamenu-single-title">
                            JOIN THE LAYERING GANG
                          </h3>
                          <h4 className="megamenu-single-subtitle">
                            Suspendisse faucibus nunc et pellentesque
                          </h4>
                          <a
                            href="#"
                            className="megamenu-single-button btn btn-sm"
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/blog"}
                      className={`menu-link ${
                        pathname === "/blog" && "active"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${
                        pathname === "/contact" && "active"
                      }`}
                    >
                      İLETİŞİM
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/auth"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                {/* <a href="#">
                  <i className="bi bi-heart"></i>
                </a> */}
                <div className="header-cart">
                  <Link to={"/card"} className="header-cart-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-cart-count">
                      {cardItems.length}
                    </span>
                  </Link>
                </div>
                {user && (
                  <button
                    className="search-button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Çıkış yapmak istediğinize emin misiniz?"
                        )
                      ) {
                        {
                          localStorage.removeItem("user");
                          window.location.href = "/";
                        }
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setIsSearchShow: Proptypes.func,
};
