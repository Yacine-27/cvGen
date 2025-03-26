import "../../styles/info/infoControlItem.css";

function InfoControlItem({ id, name, onRemove }) {
  return (
    <li className="info-items-item animate-reveal">
      <p className="info-items-item-name">{name}</p>
      <button
        type="button"
        onClick={() => {
          onRemove(id);
        }}
        className="info-items-item-button"
      >
        X
      </button>
    </li>
  );
}

export default InfoControlItem;
