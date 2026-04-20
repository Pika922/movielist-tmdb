import "./Header.scss";
import { Link, NavLink } from "react-router";
import { Search } from "../Search/Search";
export function Header() {
          
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__search">
            <h1 className="header__title">
              <NavLink className="header__title-link" to="/">
                Movie App
              </NavLink>
            </h1>
            <Search />
          </div>
          <nav className="header__nav">
            <ul className="header__menu">
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
