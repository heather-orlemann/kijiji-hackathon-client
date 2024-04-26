import "./Header.scss";
import logo from "../../assets/logos/kijiji-logo.svg";
import search from "../../assets/icons/search.svg";
import categoryDots from "../../assets/icons/category-dots.svg";
import chevronDown from "../../assets/icons/chevron-down.svg";
import locaitonIcon from "../../assets/icons/location.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/post");
  };

  return (
    <header className="header">
      <Link className="header__logo" href="/">
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
        <span>City of Toronto, Ontario</span>
      </button>

      <button className="header__language">FR</button>
      <div className="header__auth">
        <button>Register</button>
        <span>or</span>
        <button>Sign In</button>
      </div>

      <button onClick={onClick} className="header__post-ad-button">
        Post minga
      </button>
    </header>
  );
}
