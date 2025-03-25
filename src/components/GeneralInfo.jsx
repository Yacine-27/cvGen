import Person from "../../public/person.svg";

import "../styles/generalInfoContainer.css";
function GeneralInfo({ name, email, phone }) {
  return (
    <div className="general-info-container">
      <div className="general-info-header">
        <img src={Person} alt="personal" className="person-icon" />
        <h2 className="general-info-title">General Info</h2>
      </div>

      <div className="general-info-content">
        <div className="general-info-item">
          <p className="general-info-label">Name: </p>
          <p className="general-info-data">{name}</p>
        </div>
        <div className="general-info-item">
          <p className="general-info-label">Email: </p>
          <p className="general-info-data">{email}</p>
        </div>
        <div className="general-info-item">
          <p className="general-info-label">Phone :</p>
          <p className="general-info-data">{phone}</p>
        </div>
      </div>
    </div>
  );
}
export default GeneralInfo;
