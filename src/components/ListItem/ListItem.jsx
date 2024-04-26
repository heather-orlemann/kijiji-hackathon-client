import "./ListItem.scss";
import heartIcon from "../../assets/icons/heart.png";

const listItem = ({
  img,
  title,
  event,
  location,
  time,
  distance,
  description,
}) => {
  return (
    <div className="listItem">
      <div className="listItem__image">
        <img src={img} alt={title} className="listItem__image" />
      </div>
      <div className="listItem__content-container">
        <div className="listItem__title">
          <p>{title}</p>
        </div>
        <div className="listItem__event">
          <p className="listItem__event">{event}</p>
        </div>
        <div className="listItem__info-wrapper">
          <span className="listItem__location">{location}</span>
          <span className="listItem__distance">{distance}</span>
          <span className="listItem__time">{time}</span>
        </div>
        <div className="listItem__description">
          <p>{description}</p>
        </div>
      </div>
      <div className="listItem__heart-icon">
        <img src={heartIcon} alt="heart" />
      </div>
    </div>
  );
};

export default listItem;
