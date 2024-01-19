import { useEffect, useState } from "react";
import "../../css/contact.css";
import { AlertService } from "../../services/AlertService";
import { Card } from "antd";

const Contact = () => {
  const [dataSource, setDataSource] = useState([0]);
  useEffect(() => {
    fetchOfficeInfo();
  }, []);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const fetchOfficeInfo = async () => {
    try {
      const response = await fetch(`${apiUrl}/officeInfo`);
      console.log("response:", response);

      if (response.ok) {
        const data1 = await response.json();
        setDataSource(data1);
      } else {
        AlertService.showError();
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response.status);
      if (response.ok) {
        console.log("İletişim bilgileri başarıyla gönderildi.");
        // İletişim bilgileri başarıyla gönderildiğinde başka bir işlem yapabilirsiniz.
      } else {
        console.error("İletişim bilgileri gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("API ile iletişim hatası:", error.message);
    }
  };
  console.log(dataSource);
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.9120135437784!2d32.773348375598935!3d39.898602187012095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3471e04b8e267%3A0xa7f72c21bd33c403!2sODTU%20TEKNOKENT%20Y%C3%B6netim%20A.S.!5e0!3m2!1str!2str!4v1704380197232!5m2!1str!2str"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          
          <div className="contact-elements">
          <div className="contact-left">
          <div className="contact-titles">
            <h2>İletişime Geç</h2>
            <p>Sorun, istek ve şikayetlerinizi bize bildirebilirsiniz.</p>
          </div>
            <form className="contact-form">
              <div className="">
                
                <input
                placeholder="Kullanıcı Adı"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  type="text"
                  required
                />
              </div>
              <div className="">
                
                <input placeholder="E-Mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="text"
                  required
                />
              </div>
              <div className="">
                
                <input placeholder="Açıklama"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  required
                />
              </div>
              <div className="">
                
                <textarea placeholder="Mesajınız"
                  id="author"
                  name="message"
                  type="text"
                  defaultValue={formData.message}
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-sm form-button"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
            <Card  className="card-info">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <h1> {dataSource[0].officeName}</h1>
                  <p className="contact-street">
                    {dataSource[0].officeAddress}
                  </p>
                  <a href="tel:Phone: +1 1234 567 88">{`Telefon: ${dataSource[0].officePhone}`}</a>
                  <a href="mailto:Email: contact@example.com">
                    {`E-mail : ${dataSource[0].officeMail}`}
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Çalışma Saatleri</strong>
                  <p className="contact-date">
                    {dataSource[0].officeOpenWeekday}
                  </p>
                  <p>{`Haftasonu : ${dataSource[0].officeOpenWeekend}`}</p>
                </div>
              </div>
            </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
