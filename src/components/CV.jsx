import Work from "../../public/work.svg";
import Education from "../../public/graduate.svg";

import GeneralInfo from "./GeneralInfo";
import InfoItem from "./InfoItem";
import "../styles/cv.css";
import "../styles/info.css";
function CV({ info, onRemove }) {
  return (
    <div className="cv">
      <GeneralInfo
        name={info.generalInfo.name}
        email={info.generalInfo.email}
        phone={info.generalInfo.phone}
      />
      <div className="info-container">
        <div className="info-set">
          <div className="info-set-header">
            <img
              src={Education}
              alt="education icon"
              className="info-set-icon"
            />
            <h2 className="info-set-title">Education</h2>
          </div>

          <ul className="info-list">
            {info.education.map((item) => (
              <InfoItem
                key={item.id}
                id={item.id}
                from={item.from}
                to={item.to}
                description={item.description}
                section="education"
                onRemove={onRemove}
              />
            ))}
          </ul>
        </div>

        <div className="info-set">
          <div className="info-set-header">
            <img src={Work} alt="work icon" className="info-set-icon" />
            <h2 className="info-set-title">Experience</h2>
          </div>
          <ul className="info-list">
            {info.work.map((item) => (
              <InfoItem
                key={item.id}
                id={item.id}
                from={item.from}
                to={item.to}
                description={item.description}
                section="work"
                onRemove={onRemove}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CV;
