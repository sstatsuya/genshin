import { GIT_PROJECT } from "../Constant/Constant";

const ItemList = [
  {
    to: `/${GIT_PROJECT}/game`,
    exact: false,
    className: "header__li",
    text: 'Games',
  },
  {
    to: `/${GIT_PROJECT}/characters`,
    exact: false,
    className: "header__li",
    text: 'Characters',
  },
  {
    to: `/${GIT_PROJECT}/news`,
    exact: false,
    className: "header__li",
    text: 'News',
  },
  {
    to: `/${GIT_PROJECT}/weapons`,
    exact: false,
    className: "header__li",
    text: 'Weapons',
  },
  {
    to: `/${GIT_PROJECT}/artifacts`,
    exact: false,
    className: "header__li",
    text: 'Artifacts',
  },
  {
    to: `/${GIT_PROJECT}/map`,
    exact: true,
    className: "header__li",
    text: 'map',
  },
  {
    to: `/${GIT_PROJECT}/gift`,
    exact: true,
    className: "header__li",
    text: 'gift',
  },
];

export default ItemList