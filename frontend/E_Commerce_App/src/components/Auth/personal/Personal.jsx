import PersonalContent from "./PersonalContent";
import PersonalTitle from "./PersonalTitle";
import PersonalImg from "./personalImg";
import "../../../css/personalInformation.css";
function Personal() {
  return (
    <div className="personal-container">
      <div className="personal-img">
        <PersonalImg />
      </div>
      <div className="personal-content">
      <PersonalTitle />
        <div className="ic">
          
          <PersonalContent />
        </div>
      </div>
    </div>
  );
}

export default Personal;
