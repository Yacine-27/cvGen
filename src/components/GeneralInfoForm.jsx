import { useState } from "react";
import "../styles/form.css";

function GeneralInfoForm({ info, onChange }) {
  const [showForm, setShowForm] = useState(false);
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <form className="form">
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
          <div className="form-widget">
            <label htmlFor="name" className="form-label">
              Name:{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={info.name}
              onChange={onChange}
              className="form-input"
            />
          </div>
          <div className="form-widget">
            <label htmlFor="email" className="form-label">
              Email:{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={info.email}
              onChange={onChange}
              className="form-input"
            />
          </div>
          <div className="form-widget">
            <label htmlFor="phone" className="form-label">
              Phone:{" "}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={info.phone}
              onChange={onChange}
              className="form-input"
            />
          </div>
        </div>
      )}
    </form>
  );
}

export default GeneralInfoForm;
