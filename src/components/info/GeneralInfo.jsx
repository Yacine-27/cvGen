import Person from "../../../public/person.svg";

import "../../styles/info/generalInfo.css";
function GeneralInfo({ info }) {
  return (
    <div className="general-info-container">
      <div className="general-info-header">
        <img src={Person} alt="personal" className="person-icon" />
        <h2 className="general-info-title">General Info</h2>
      </div>
      <div className="general-info-content">
        {info.map((item) => (
          <div className="general-info-widget" key={item.id}>
            <p className="general-info-label">{item.name}: </p>
            <input className="general-info-input" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default GeneralInfo;
