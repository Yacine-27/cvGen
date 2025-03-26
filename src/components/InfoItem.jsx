import "../styles/infoItem.css";
function InfoItem({ id, from, to, description, onRemove, section }) {
  return (
    <li id={id} className="info-item">
      <p className="info-item-date">
        {from} - {to}
      </p>
      <p className="info-item-description">{description}</p>
      <button
        onClick={() => {
          onRemove(id, section);
        }}
        className="info-item-remove-button"
      >
        X
      </button>
    </li>
  );
}
export default InfoItem;
