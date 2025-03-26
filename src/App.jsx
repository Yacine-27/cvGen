import Nav from "./components/Nav";
import CV from "./components/CV";
import GeneralInfoForm from "./components/GeneralInfoForm";
import SubForm from "./components/SubForm";
import { useState } from "react";

import "./styles/formsContainer.css";

function App() {
  const [info, setInfo] = useState({
    generalInfo: [
      { name: "Name", id: crypto.randomUUID() },
      { name: "Email", id: crypto.randomUUID() },
      { name: "Phone", id: crypto.randomUUID() },
    ],
    education: [],
    work: [],
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const addGeneralInfoItem = (item) => {
    setInfo({
      ...info,
      generalInfo: [
        ...info.generalInfo,
        { name: item, id: crypto.randomUUID() },
      ],
    });
  };
  const removeGeneralInfoItem = (id) => {
    const newGeneralInfoArray = info.generalInfo.filter(
      (item) => item.id !== id
    );
    setInfo({ ...info, generalInfo: newGeneralInfoArray });
  };
  const toggleFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };
  const handleSubmitSubForm = (inputs, section) => {
    const newArray = [
      ...info[`${section}`],
      { ...inputs, id: crypto.randomUUID() },
    ];
    setInfo({ ...info, [`${section}`]: newArray });
  };
  const removeItem = (id, section) => {
    const newArray = [...info[`${section}`].filter((item) => item.id !== id)];
    setInfo({ ...info, [`${section}`]: newArray });
  };
  return (
    <>
      <Nav onToggleForm={toggleFormOpen} />
      <div className="app-container">
        {isFormOpen && (
          <div
            className={`forms-container ${
              isFormOpen ? "animate-container-reveal" : "animate-container-hide"
            }`}
          >
            <GeneralInfoForm
              onSubmit={addGeneralInfoItem}
              items={info.generalInfo}
              onRemove={removeGeneralInfoItem}
            />
            <SubForm
              onSubmit={handleSubmitSubForm}
              items={info.education}
              onRemove={removeItem}
              name="education"
            />
            <SubForm
              onSubmit={handleSubmitSubForm}
              items={info.work}
              onRemove={removeItem}
              name="work"
            />
          </div>
        )}
        <CV info={info} />
      </div>
    </>
  );
}

export default App;
