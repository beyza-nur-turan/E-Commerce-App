import { useState } from "react";
import "../../css/contact.css";

const Contact = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

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

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9633698339308!2d28.929441087738052!3d41.04793012296828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1d021adf417%3A0xba3a3fdfdbb5f5d!2sEy%C3%BCp%20Sultan%20Camii!5e0!3m2!1str!2str!4v1665091191675!5m2!1str!2str"
            width="100%"
            height="500"
            style={{
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>Contact with us</h4>
            <h2>Get In Touch</h2>
            <p>
              In hac habitasse platea dictumst. Pellentesque viverra sem nec
              orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius
              vel leo a, pretium lobortis metus. Vivamus consectetur consequat
              justo.
            </p>
          </div>
          <div className="contact-elements">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="">
                <label>
                  Your Name
                  <span>*</span>
                </label>
                <input name="userName" value={formData.userName} onChange={handleChange} type="text" required />
              </div>
              <div className="">
                <label>
                  Your email
                  <span>*</span>
                </label>
                <input name="email" value={formData.email} onChange={handleChange} type="text" required />
              </div>
              <div className="">
                <label>
                  Subject
                  <span>*</span>
                </label>
                <input name="subject" value={formData.subject} onChange={handleChange} type="text" required />
              </div>
              <div className="">
                <label>
                  Your message
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="message"
                  type="text"
                  value={formData.message}
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button type="submit" className="btn btn-sm form-button">Send Message</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Clotya Store</strong>
                  <p className="contact-street">
                    Clotya Store Germany — 785 15h Street, Office 478/B Green
                    Mall Berlin, De 81566
                  </p>
                  <a href="tel:Phone: +1 1234 567 88">Phone: +1 1234 567 88</a>
                  <a href="mailto:Email: contact@example.com">
                    Email: contact@example.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong> Opening Hours</strong>
                  <p className="contact-date">Monday - Friday : 9am - 5pm</p>
                  <p>Weekend Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
