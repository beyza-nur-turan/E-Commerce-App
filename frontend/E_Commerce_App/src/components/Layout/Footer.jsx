import React from "react";
import "../../css/footer.css";
import paymant from "../../../public/img/footer/cards.png";
import appStore from "../../../public/img/footer/app-store.png";
import googlePlay from "../../../public/img/footer/google-play.png";
import { Link } from "react-router-dom";
import { useLogoContext } from "../../context/LogoProvider";
const Footer = () => {
  const { logoData } = useLogoContext();
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="subscribe-row">
          <div className="container">
            <div className="footer-row-wrapper">
              <div className="footer-subscribe-wrapper">
                <div className="footer-subscribe">
                  <div className="footer-subscribe-top">
                    <h3 className="subscribe-title">
                      İndirimler ve yeni haberlerden haberdar olmak için
                      e-mailinizi girin!
                    </h3>
                    <p className="subscribe-desc">
                      500 TL üzeri alışverişlerinizde 50 TL&apos;lik indirim
                      kuponu bizden.
                    </p>
                  </div>
                  <div className="footer-subscribe-bottom">
                    <form>
                      <input
                        type="text"
                        placeholder="Enter your email address."
                      />
                      <button className="btn">Katıl</button>
                    </form>
                    <p className="privacy-text">
                      Abone olarak{" "}
                      <a href="#">
                        şartlar ve koşullarımız ile gizlilik ve çerezler
                        politikamızı{" "}
                      </a>
                      kabul etmiş olursunuz
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-contact-wrapper">
                <div className="footer-contact-top">
                  <h3 className="contact-title">
                    Yardıma mı ihtiyacınız var? <br />
                    (+90) 456 78 90
                  </h3>
                  <p className="contact-desc">08.00-18.00 arası açığız</p>
                </div>
                <div className="footer-contact-bottom">
                  <div className="download-app">
                    <a href="#">
                      <img src={appStore} alt="" />
                    </a>
                    <a href="#">
                      <img src={googlePlay} alt="" />
                    </a>
                  </div>
                  <p className="privacy-text">
                    <strong>Uygulama:</strong> View in Your Room
                    özelliğimizi deneyin, kayıtları yönetin ve ödeme
                    bilgilerinizi kaydedin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widgets-row">
          <div className="container">
            <div className="footer-widgets">
              <div className="brand-info">
                <div className="footer-logo">
                  <Link to={"/"} className="logo">
                    <img
                      style={{
                        width: "12vh",
                        height: "12vh",
                        marginLeft: "20vh",
                      }}
                      src={logoData && logoData.length > 0 && logoData[0].img}
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="footer-desc">
                  <p>
                    {" "}
                    İhsan Doğramacı Blv. Üniversiteler Mah. No:31-1, ODTÜ
                    TEKNOKENT 06800 Çankaya/Ankara
                  </p>
                </div>
                <div className="footer-contact">
                  <p>
                    <a href="tel:555 555 55 55">(+90) 534 83 90</a> <br />{" "}
                    <br />
                    <a href="mailto:info@example.com">info@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="widget-nav-menu">
                <h4>Bilgilendirme</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="#">Gizlilik Politikası</a>
                  </li>
                  <li>
                    <a href="#">İade Politikası</a>
                  </li>
                  <li>
                    <a href="#">Alışveriş Politikası</a>
                  </li>
                  <li>
                    <a href="#">Hızlı Kargo</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Hesap</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Admin Paneli</a>
                  </li>
                  <li>
                    <a href="#">Siparişlerim</a>
                  </li>
                  <li>
                    <a href="#">Dilek ve Şikayetler</a>
                  </li>
                  <li>
                    <a href="#">Hesap Detayları</a>
                  </li>
                  <li>
                    <a href="#">Siparişimle ilgili İpucu</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Alışveriş</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Bağlı Kuruluşlar</a>
                  </li>
                  <li>
                    <a href="#">En İyi Satıcılar</a>
                  </li>
                  <li>
                    <a href="#">İndirim</a>
                  </li>
                  <li>
                    <a href="#">Son Ürünler</a>
                  </li>
                  <li>
                    <a href="#">İndirimli Ürünler</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Kategoriler</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Kadın</a>
                  </li>
                  <li>
                    <a href="#">Erkek</a>
                  </li>
                  <li>
                    <a href="#">Çocuk</a>
                  </li>
                  <li>
                    <a href="#">Ev ve Yaşam</a>
                  </li>

                  <li>
                    <a href="#">Ayakkabılar</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-row">
          <div className="container">
            <div className="footer-copyright">
              <div className="site-copyright">
                <p>
                  Tüm Hakları Saklıdır © 2023. BNT tarafından desteklenmektedir.
                </p>
              </div>
              <a href="#">
                <img src={paymant} alt="" />
              </a>
              <div className="footer-menu">
                <ul className="footer-menu-list">
                  <li className="list-item">
                    <a href="#">Gizlilik Politikası</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Şartlar ve Koşullar</a>
                  </li>
                  <li className="list-item">
                    <a href="#">İade Politikası</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
