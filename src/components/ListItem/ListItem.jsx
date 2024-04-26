import "./ListItem.scss";
import heartIcon from "../../assets/icons/heart.png";

const listItem = ({ img, title, location, time, description }) => {
  console.log(img);
  return (
    <div className="listItem">
      <div className="listItem__image">
        <img src={img} alt={title} className="listItem__image" />
      </div>
      <div className="listItem__content-container">
        <div className="listItem__title">
          <p>{title}</p>
        </div>
        <div className="listItem__info-wrapper">
          <div className="listItem__location">
            <p>{location}</p>
          </div>

          <div className="listItem__time">
            <p>{time}</p>
          </div>
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
