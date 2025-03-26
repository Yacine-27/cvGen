import Nav from "./components/Nav";
import CV from "./components/CV";
import GeneralInfoForm from "./components/GeneralInfoForm";
import SubForm from "./components/SubForm";
import { useState } from "react";

import "./styles/formsContainer.css";

function App() {
  const [info, setInfo] = useState({
    generalInfo: {
      name: "Yacine",
      email: "leoezzat27@gamil.com",
      phone: "+201095565540",
    },
    education: [],
    work: [],
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };
  const handleGeneralInfoChange = (event) => {
    setInfo({
      ...info,
      generalInfo: {
        ...info.generalInfo,
        [event.target.name]: event.target.value,
      },
    });
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
              onChange={handleGeneralInfoChange}
              info={info.generalInfo}
            />
            <SubForm onSubmit={handleSubmitSubForm} name="education" />
            <SubForm onSubmit={handleSubmitSubForm} name="work" />
          </div>
        )}

        <CV info={info} onRemove={removeItem} />
      </div>
    </>
  );
}

export default App;

//TODO: try removing the general info form
//TODO: add a title section to the form.
