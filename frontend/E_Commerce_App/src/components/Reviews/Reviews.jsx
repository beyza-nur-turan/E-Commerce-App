import ReviewForm from "../../components/Reviews/ReviewForm";
import ReviewItem from "../../components/Reviews/ReviewItem";
import "../../css/Reviews.css";

const Reviews = () => {
  return (
    <div className="tab-panel-reviews">
     
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </ol>
      </div>
      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewForm />
      </div>
    </div>
  );
};

export default Reviews;