import "./Header.scss";
import logo from "../../assets/logos/kijiji-logo.svg";
import search from "../../assets/icons/search.svg";
import categoryDots from "../../assets/icons/category-dots.svg";
import chevronDown from "../../assets/icons/chevron-down.svg";
import locaitonIcon from "../../assets/icons/location.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header__search">
          <div className="header__input-wrapper">
            <img className="header__icon" src={search} alt="search" />
            <input
              className="header__search-input"
              placeholder="What are you looking for?"
            />
            <button className="header__category-button">
              <img className="header__icon" src={categoryDots} />
              All categories
              <img className="header__icon" src={chevronDown} />
            </button>
          </div>

          <button
            className="header__search-button"
            type="button"
            onClick={() => {}}
          >
            Search
          </button>
        </div>

        <button className="header__location">
          <img className="header__icon" src={locaitonIcon} />
          <span>Victoria, BC</span>
        </button>

        <button className="header__language">FR</button>
        <div className="header__auth">
          <button>Register</button>
          <span>or</span>
          <button>Sign In</button>
        </div>

        <button className="header__post-ad-button">Post ad</button>
      </div>
    </header>
  );
}
