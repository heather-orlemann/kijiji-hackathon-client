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
          <p className="filters__content filters__gardenContent">Gardening</p>
          <p className="filters__content">Moving</p>
          <p className="filters__content">Cleaning</p>
          <p className="filters__content">Cooking</p>
          <p className="filters__content">Other</p>
        </div>
      </div>

      <div className="filters__location filters__container">
        <p className="filters__title">Location</p>
        <img src={downIcon} alt="up" className="filters__icon" />
        <p className="filters_content"> Victoria</p>
      </div>

      <div className="filters__location filters__container">
        <div className="filters__price">
          <p className="filters__title">Price</p>
          <img
            src={downIcon}
            alt="up"
            className="filters__icon filters__upIcon"
          />
        </div>
      </div>

      <div className="filters__offer filters__container">
        <p className="filters__title">Offer type</p>
        <img
          src={downIcon}
          alt="up"
          className="filters__icon filters__upIcon"
        />
        <p className="filters_content"> Offering</p>
      </div>

      <div className=" filters__payment">
        <p className="filters__title">Payment</p>
      </div>
    </div>
  );
};

export default Filters;
