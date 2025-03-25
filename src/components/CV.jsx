import GeneralInfo from "./GeneralInfo";
import InfoItem from "./InfoItem";
import "../styles/cv.css";
import "../styles/info.css";
function CV({ info, onRemove }) {
  const sections = Object.keys(info).filter((key) => key !== "generalInfo");

  return (
    <div className="cv">
      <GeneralInfo
        name={info.generalInfo.name}
        email={info.generalInfo.email}
        phone={info.generalInfo.phone}
      />
      <div className="info-container">
        {sections.map((section) => (
          <div key={section} className="info-set">
            <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
            <ul className="info-list">
              {info[section].map((item) => (
                <InfoItem
                  key={item.id}
                  id={item.id}
                  from={item.from}
                  to={item.to}
                  description={item.description}
                  section={section}
                  onRemove={onRemove}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CV;
