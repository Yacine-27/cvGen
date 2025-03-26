import { useState } from "react";

import InfoControlItem from "./InfoControlItem";

import "../../styles/forms/form.css";

function GeneralInfoForm({ items, onSubmit, onRemove }) {
  const [showForm, setShowForm] = useState(false);
  const [input, setInput] = useState("");
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(input);
    setInput("");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <button
          className="form-header-container"
          type="button"
          onClick={handleToggleForm}
        >
          <p>General Info</p>
          <p className="form-header-arrow"> {showForm ? "↑" : "↓"}</p>
        </button>

        {showForm && (
          <div
            className={`widget-container ${
              showForm ? "animate-reveal" : "animate-hide"
            }`}
          >
            {items.length > 0 && (
              <div className="info-items">
                <h2 className="info-items-header">Info</h2>
                <ul className="info-items-list">
                  {items.map((item) => (
                    <InfoControlItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      onRemove={onRemove}
                    />
                  ))}
                </ul>
              </div>
            )}
            <div className="form-widget">
              <label htmlFor="name" className="form-label">
                Add a new info :{" "}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="form-input"
              />
            </div>
          </div>
        )}
      </form>
    </>
  );
}

export default GeneralInfoForm;
