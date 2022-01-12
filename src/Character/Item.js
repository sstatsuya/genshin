import { NavLink } from "react-router-dom";
import { GIT_PROJECT } from "../Constant/Constant";

function Item({ name, children }) {
  console.log(`/${GIT_PROJECT}/characters/${name}`)
  return (
    <>
      <div className="col item">
        <NavLink /*to={`/${GIT_PROJECT}/characters/${name}`}*/ to={`${GIT_PROJECT}/map`}>
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
