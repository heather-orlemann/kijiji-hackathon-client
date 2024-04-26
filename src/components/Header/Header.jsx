import "./Header.scss";
import logo from "../../assets/logos/kijiji-logo.png";
import search from "../../assets/icons/search.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const onUploadClick = () => {
    navigate("/");
  };
  return (
    <header className="header-container">
      <div className="header">
        <a className="header__logo" href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="header__search">
          <div className="header__input-wrapper">
            <img className="header__search-icon" src={search} alt="search" />
            <input
              className="header__search-input"
              placeholder="What are you looking for?"
            />
            <select
              name="category"
              onChange={handleInputChange}
              className="header__category-select"
            >
              <option value="">All categories</option>
              <option value="Buy & Sell">Buy & Sell</option>
              <option value="Cars & Vehicles">Cars & Vehicles</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Jobs">Jobs</option>
              <option value="Services">Services</option>
              <option value="Pets">Pets</option>
              <option value="Community">Community</option>
              <option value="Vacation Rentals">Vacation Rentals</option>
            </select>
            <button>Search</button>
          </div>
          <div className="header__location">
            <img />
            <span>City of Toronto, Ontario</span>
          </div>
          <div className="header__wrapper">
            <span>FR</span>
            <span>Register</span>
            <span>or</span>
            <span>Sign In</span>
          </div>
        </div>
        <button>Post ad</button>
      </div>
    </header>
  );
}
