import "../../css/campaignItem.css";

const CampaignItem = () => {
  return (
    <div className="campaign-item">
      <h3 className="campaign-title">
        Moda Haftası <br />
        Alışveriş Zamanı! <br />
        
      </h3>
      <p className="campaign-desc">
        Tarzınızı yenilemenin zamanı belkide çoktan gelmiştir.
      </p>
      <a  href="#" className="btn ">
        Tümünü Gör  
        <i style={{marginLeft:"0.5em"}} className="bi bi-arrow-right"></i>
      </a>
    </div>
  );
};

export default CampaignItem;