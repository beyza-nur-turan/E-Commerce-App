import { useState } from "react";
import PropTypes from "prop-types";
import {AlertService} from "../../services/AlertService";
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
export const ReviewForm = ({ singleProduct,setSingleProduct }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const handleRating = (e, newRating) => {
    e.preventDefault();
    setRating(newRating);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // User kontrolü
    const userId = user ? (user.id || user._id) : null;
  
    const formData = {
      reviews: [
        ...singleProduct.reviews,
        { text: review, rating: parseInt(rating), user: userId },
      ],
    };
    console.log(formData);
  
    try {
      const res = await fetch(`${apiUrl}/products/${singleProduct._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        const data = await res.json();
        setSingleProduct(data);
        setReview(" ");
        setRating(0);
        AlertService.showOk();
      }
    } catch (error) {
      console.log(error);
      AlertService.showError();
    }
  };
  

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <p className="comment-notes">
      E-posta hesabınız gizli tutulacaktır.
        <span className="required">*</span>
      </p>
      <div className="comment-form-rating">
        <label>
          Puanınızı işaretleyin
          <span className="required">*</span>
        </label>
        <div className="stars">
          <a
            href="#"
            className={`star ${rating === 1 && "active"}`}
            onClick={(e) => handleRating(e, 1)}
          >
            <i className="bi bi-star-fill"></i>
          </a>
          <a
            href="#"
            className={`star ${rating === 2 && "active"}`}
            onClick={(e) => handleRating(e, 2)}
          >
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a
            href="#"
            className={`star ${rating === 3 && "active"}`}
            onClick={(e) => handleRating(e, 3)}
          >
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a
            href="#"
            className={`star ${rating === 4 && "active"}`}
            onClick={(e) => handleRating(e, 4)}
          >
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a
            href="#"
            className={`star ${rating === 5 && "active"}`}
            onClick={(e) => handleRating(e, 5)}
          >
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
        </div>
      </div>
      <div className="comment-form-comment form-comment">
        <label htmlFor="comment">
          Yorumunuzu yazın
          <span className="required">*</span>
        </label>
        <textarea
          id="comment"
          cols="50"
          rows="10"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </div>

      <div className="comment-form-cookies">
        <input id="cookies" type="checkbox" />
        <label htmlFor="cookies">
        Bir dahaki sefere yorum yaptığımda kullanılmak üzere adımı, e-posta adresimi ve web site adresimi bu tarayıcıya kaydet.
          
        </label>
      </div>
      <div className="form-submit">
        <input type="submit" className="btn submit" />
      </div>
    </form>
  );
};
export default ReviewForm;
ReviewForm.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct:PropTypes.func
};
