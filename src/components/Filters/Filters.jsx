import "./Filters.scss";
import downIcon from "../../assets/icons/chevron-down.svg";
import upIcon from "../../assets/icons/category-dots.svg";

const Filters = () => {
  return (
    <div className="filters ">
      <div className=" filters__header filters__container">
        <p className="filters__title">Filters</p>
      </div>

      <div className="filters__category filters__container">
        <p className="filters__title">Category</p>
        <img
          src={downIcon}
          alt="up"
          className="filters__icon filters__upIcon"
        />
        <div className="filters__sub-category">
          <p className=" filters__level-one">All categories</p>
          <p className="filters__content ">Community (41)</p>
          <p className="filters__content filters__selected">Mingas (3)</p>
          <p className="filters__content">Events (12)</p>
          <p className="filters__content">Classes & Groups (5)</p>
          <p className="filters__content">Artistis & Musicians (4)</p>
          <p className="filters__content filters__view-more">View more</p>
        </div>
      </div>

      <div className="filters__location filters__container">
        <p className="filters__title">Location</p>
        <img src={downIcon} alt="up" className="filters__icon" />
        <p className="filters__level-two">
          Victoria, BC <span>·</span> 50km
        </p>
      </div>

      {/* <div className="filters__price "> */}
      <div className="filters__price filters__container">
        <p className="filters__title">Price</p>
        <div className="filters__price-inputs">
          <input
            type="text"
            placeholder="from"
            className="filters__price-input"
          />
          <input
            type="text"
            placeholder="to"
            className="filters__price-input"
          />
        </div>
        <button className="filters__price-button">
          <p className="filters__price-button-text">Apply</p>
        </button>
        <img
          src={downIcon}
          alt="up"
          className="filters__icon filters__upIcon"
        />
      </div>
      {/* </div> */}

      <div className="filters__offer filters__container">
        <p className="filters__title">Offer type</p>
        <img
          src={downIcon}
          alt="up"
          className="filters__icon filters__upIcon"
        />
        <p className="filters__content filters__level-two"> Offering</p>
      </div>

      <div className=" filters__payment">
        <p className="filters__title">Payment</p>
      </div>
    </div>
  );
};

export default Filters;
