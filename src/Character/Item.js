import { NavLink } from "react-router-dom";
import { GIT_PROJECT } from "../Constant/Constant";

function Item({ name, children }) {
  return (
    <>
      <div className="col item">
        <NavLink to={`/${GIT_PROJECT}/characters/${name}`} >
          <div className="item__container">
            {children}
            <div className="item__text">
              <span>{name}</span>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default Item;
