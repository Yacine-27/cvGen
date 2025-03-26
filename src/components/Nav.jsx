import "../styles/nav.css";
import CLose from "../../public/close.svg";
import Edit from "../../public/edit.svg";
import Icon from "../../public/icon.svg";
function Nav({ onToggleForm }) {
  return (
    <nav>
      <button className="icon-wrapper" onClick={onToggleForm}>
        <img src={Edit} alt="Edit button" className="svg-icon" />{" "}
      </button>
      <button className="icon-wrapper">
        <img src={Icon} alt="App icon" className="svg-icon" />
      </button>
    </nav>
  );
}

export default Nav;
