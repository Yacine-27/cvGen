import "../styles/infoItem.css";
function InfoItem({ id, from, to, description, title }) {
  return (
    <li id={id} className="info-item">
      <p className="info-item-title">{title}</p>
      <p className="info-item-date">
        {from} - {to}
      </p>
      <p className="info-item-description">{description}</p>
    </li>
  );
}
export default InfoItem;
