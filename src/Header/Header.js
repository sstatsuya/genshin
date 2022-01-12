import "./style.css";
import { NavLink } from "react-router-dom";
import logo from "../Assets/Images/logo.png";
import ItemList from "./ItemList";
import { GIT_PROJECT } from "../Constant/Constant";
function Header() {
  return (
    <ul>
      <NavLink to={`/${GIT_PROJECT}/`} exact={true} className="header__li">
        <img alt="logo" src={logo} />
      </NavLink>
      {ItemList.map((Item, index) => {
        return (
          <NavLink
            key={index}
            to={Item.to}
            className={Item.className}
            exact={Item.exact}
          >
            {Item.text}
          </NavLink>
        );
      })}
    </ul>
  );
}

export default Header;
