import "./MingaDetailsComponent.scss";
import MovingImage from "../../assets/images/moving-large.png";
import IconBar from "../../assets/icons/icon-bar.jpg";
import EventIcon from "../../assets/icons/calendar-icon.svg";
import LocationIcon from "../../assets/icons/location-icon.svg";
import CarAd from "../../assets/images/car-ad.png";
import AvatarComponent from "../AvatarComponent/AvatarComponent";
import KijijiUser from "../../assets/images/kijiji-user.png";

const MingaDetailsComponent = () => {
  return (
    <div className="MD">
      <div className="MD__main">
        <div className="MD__icon-bar-wrapper">
          <img className="MD__icon-bar" src={IconBar} alt="icons"></img>
        </div>
        <div className="MD__main-wrapper">
          <div className="MD__main-section">
            <h1 className="MD__title">
              Join Our Spring Garden Minga! BBQ & Music Included!
            </h1>
            <p className="MD__subtitle">5-10 people needed</p>
            <img className="MD__photo" src={MovingImage} alt="moving"></img>
            <div className="MD__details-wrapper">
              <div className="MD__details-left">
                <div className="MD__label-wrapper">
                  <h2 className="MD__label">
                    <img
                      className="MD__event-icon"
                      src={EventIcon}
                      alt="icons"
                    ></img>
                    Event Type:
                  </h2>
                  <h3 className="MD__input">Minga</h3>
                </div>
                <div className="MD__label-wrapper">
                  <h2 className="MD__label">
                    <img
                      className="MD__event-icon"
                      src={EventIcon}
                      alt="icons"
                    ></img>
                    Event Start:
                  </h2>
                  <h3 className="MD__input">Saturday, May 4th, 2024 10:00am</h3>
                </div>
              </div>

              <div className="MD__details-right">
                <div className="MD__label-wrapper">
                  <h2 className="MD__label">
                    <img
                      className="MD__event-icon"
                      src={EventIcon}
                      alt="icons"
                    ></img>
                    Event End:
                  </h2>
                  <h3 className="MD__input">Saturday, May 4th, 2024 4:00pm</h3>
                </div>
                <div className="MD__label-wrapper">
                  <h2 className="MD__label">
                    <img
                      className="MD__event-icon"
                      src={LocationIcon}
                      alt="icons"
                    ></img>
                    Location:
                  </h2>
                  <h3 className="MD__input">
                    Community Garden, 7601 Obed Ave, Victoria, BC.
                  </h3>
                </div>
              </div>
            </div>

            <div className="MD__wrapper">
              <h2 className="MD__description-label">Description</h2>
              <p className="MD__description">
                We're seeking green-thumbed enthusiasts to help with planting,
                weeding, and sprucing up our garden beds. No experience
                necessary—just bring your enthusiasm and a pair of gardening
                gloves! Let's sow the seeds of friendship and community spirit
                this spring!
                <br></br>
                <br></br>
                After a rewarding day of gardening, we'll fire up the grill for
                a sizzling BBQ feast! Enjoy mouthwatering burgers, refreshing
                beverages, and toe-tapping tunes as we celebrate our
                accomplishments together.
                <br></br>
                <br></br>
                RSVP to reserve your spot and let us know if you have any
                dietary preferences. Can't wait to see you there!
              </p>
            </div>
          </div>

          <div className="MD__join-discussion">
            <div className="MD__avatar-container">
              <AvatarComponent color="#9144A6" letter="A" />
            </div>
            <div className="MD__comment-input-wrapper">
              <input
                type="text"
                className="MD__comment-input"
                placeholder="Join the discussion..."
              />
              <button className="MD__submit-comment">Comment</button>
            </div>
          </div>

          <div className="MD__comments-list">
            <div className="MD__comments-section">
              <div className="MD__avatar-container">
                <AvatarComponent color="#F2911B" letter="K" />
              </div>
              <p className="MD__comment">
                Very interested in joining with some friends! would love for you
                to join my event too
              </p>
            </div>
            <div className="MD__comments-section">
              <div className="MD__avatar-container">
                <AvatarComponent color="#2681DA" letter="R" />
              </div>
              <p className="MD__comment">
                Looking forward to the BBQ after. I’m vegetarian, please count
                me in for veggie burgers! 🍔
              </p>
            </div>
            <div className="MD__comments-section">
              <div className="MD__avatar-container">
                <AvatarComponent color="#F24957" letter="M" />
              </div>
              <p className="MD__comment">
                Does anyone want to carpool from downtown Victoria? 🚗💨
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="MD__ad-wrapper">
        <img className="MD__ad" src={CarAd} alt="ad"></img>
        <img className="MD__kijiji-user" src={KijijiUser} alt="user-info"></img>
      </div>
    </div>
  );
};

export default MingaDetailsComponent;
