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
      <div className="global-notification" style={{background: "linear-gradient(to top left, #000E26, #3a7d83 )"}}>
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
                          <a href="#">Giyim</a>
                        </li>
                        <li>
                          <a href="#">Temizlik</a>
                        </li>
                        <li>
                          <a href="#">Ev Koleksiyon</a>
                        </li>
                        
                        <li>
                          <a href="#">Ev Modern</a>
                        </li>
                        
                       
                        <li>
                          <a href="#">Ev Stil</a>
                        </li>
                        <li>
                          <a href="#">Tek Kalanlar</a>
                        </li>
                        <li>
                          <a href="#">Ev RTL</a>
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
      Alışveriş Stili
    </h3>
    <ul className="megamenu-menu-list">
      <li>
        <a href="#">Standart Alışveriş</a>
      </li>
      <li>
        <a href="#">Tam Ekran Alışveriş</a>
      </li>
      <li>
        <a href="#">Sadece Kategorilere Göre Alışveriş</a>
      </li>
      <li>
        <a href="#">Resim Kategorilerine Göre Alışveriş</a>
      </li>
      <li>
        <a href="#">Alt Kategorilere Göre Alışveriş</a>
      </li>
      <li>
        <a href="#">Liste Stili Alışveriş</a>
      </li>
      <li>
        <a href="#">Üzerine Gelme Stili 1</a>
      </li>
      <li>
        <a href="#">Üzerine Gelme Stili 2</a>
      </li>
      <li>
        <a href="#">Üzerine Gelme Stili 3</a>
      </li>
    </ul>
  </div>
  <div className="megamenu-products">
    <h3 className="megamenu-products-title">
      Filtre Düzeni
    </h3>
    <ul className="megamenu-menu-list">
      <li>
        <a href="#">Yan Menü</a>
      </li>
      <li>
        <a href="#">Filtre Yan Dışa</a>
      </li>
      <li>
        <a href="#">Filtre Açılır Menü</a>
      </li>
      <li>
        <a href="#">Filtre Çekmece</a>
      </li>
    </ul>
  </div>
  <div className="megamenu-products">
    <h3 className="megamenu-products-title">
      Alışveriş Yükleyici
    </h3>
    <ul className="megamenu-menu-list">
      <li>
        <a href="#">Alışveriş Sayfalandırma</a>
      </li>
      <li>
        <a href="#">Alışveriş Sonsuz Kaydırma</a>
      </li>
      <li>
        <a href="#">Alışveriş Daha Fazla Yükleme</a>
      </li>
      <li>
        <a href="#">Sepet Modalı</a>
      </li>
      <li>
        <a href="#">Sepet Çekmecesi</a>
      </li>
      <li>
        <a href="#">Sepet Sayfası</a>
      </li>
    </ul>
  </div>
</div>

                        <div className="megamenu-single">
                          <a href="#">
                            <img style={{width:"10em",height:"8em"}} src="../../../public/img/mega_menu.jpg" alt="" />
                          </a>
                          <h3 className="megamenu-single-title">
                            Sende Ailemize Katıl
                          </h3>
                          <h4 className="megamenu-single-subtitle">
                            Tüm indirimlerden haberdar ol!
                          </h4>
                          <a
                            href="#"
                            className="megamenu-single-button btn btn-sm"
                          >
                            Alışverişe Başla
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
