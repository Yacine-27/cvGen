import Generator from "../public/generator.svg";
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
      <div className="forms-container">
        <div className="form-title">
          <h1>cv-gen</h1> <img src={Generator} alt="App icon" />
        </div>
        <GeneralInfoForm
          onChange={handleGeneralInfoChange}
          info={info.generalInfo}
        />
        <SubForm onSubmit={handleSubmitSubForm} name="education" />
        <SubForm onSubmit={handleSubmitSubForm} name="work" />
      </div>

      <CV info={info} onRemove={removeItem} />
    </>
  );
}

export default App;
