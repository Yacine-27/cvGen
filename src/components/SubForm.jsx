import { useState } from "react";
import "../styles/form.css";

function SubForm({ onSubmit, name }) {
  const [inputs, setInputs] = useState({ from: "", to: "", description: "" });
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Number(inputs.from) > Number(inputs.to)) {
      setError(true);
      return;
    }
    setError(false);
    onSubmit(inputs, name);
    setInputs({ from: "", to: "", description: "" });
  };
  const handleToggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <button
        className="form-header-container"
        type="button"
        onClick={handleToggleForm}
      >
        <p>{name.slice(0, 1).toUpperCase() + name.slice(1)}</p>
        <p className="form-header-arrow"> {showForm ? "↑" : "↓"}</p>
      </button>

      {showForm && (
        <div
          className={`widget-container ${
            showForm ? "animate-reveal" : "animate-hide"
          }`}
        >
          {error && (
            <h4 className="error-message">
              "To" Year should be less than or equal to "From" year
            </h4>
          )}
          <div className="form-widget">
            <label className="form-label" htmlFor="from">
              {" "}
              From:{" "}
            </label>
            <input
              type="number"
              id="from"
              name="from"
              value={inputs.from}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-widget">
            <label className="form-label" htmlFor="to">
              {" "}
              To:{" "}
            </label>
            <input
              type="number"
              id="to"
              name="to"
              value={inputs.to}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-widget">
            <label className="form-label" htmlFor="description">
              {" "}
              Description:{" "}
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              required
              value={inputs.description}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-button">
            Add Item{" "}
          </button>
        </div>
      )}
    </form>
  );
}

export default SubForm;
