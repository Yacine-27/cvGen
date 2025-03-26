import GeneralInfo from "./GeneralInfo";
import InfoItem from "./InfoItem";

import "../../styles/info/cv.css";
import "../../styles/info/infoContainer.css";

import Work from "../../../public/work.svg";
import Education from "../../../public/graduate.svg";

function CV({ info }) {
  return (
    <div className="cv">
      <GeneralInfo info={info.generalInfo} />
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
                title={item.title}
                from={item.from}
                to={item.to}
                description={item.description}
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
                title={item.title}
                from={item.from}
                to={item.to}
                description={item.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CV;
