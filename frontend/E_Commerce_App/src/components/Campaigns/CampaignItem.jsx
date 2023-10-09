import "../../css/campaignItem.css";

const CampaignItem = () => {
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">
        Fashion Month <br />
        Ready in Capital <br />
        Shop
      </h3>
      <p className="campaign-desc">
        Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
      </p>
      <a href="#" className="btn ">
        View All
        <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  );
};

export default CampaignItem;