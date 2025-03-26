import { useState } from "react";

import Nav from "./components/Nav";
import CV from "./components/info/CV";
import GeneralInfoForm from "./components/forms/GeneralInfoForm";
import SubForm from "./components/forms/SubForm";

import "./styles/forms/formsContainer.css";

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
  const removeItemSubForm = (id, section) => {
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
              onRemove={removeItemSubForm}
              name="education"
            />
            <SubForm
              onSubmit={handleSubmitSubForm}
              items={info.work}
              onRemove={removeItemSubForm}
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
