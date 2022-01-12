import Undeveloped from "../Error/Undeveloped";
import Home from "../Home/Home";
import Character from "../Character/Character";
import CharacterInfo from "../Character/CharacterInfo";
import { GIT_PROJECT } from "../Constant/Constant";

const routes = [
  {
    path: `/${GIT_PROJECT}/`,
    exact: true,
    main: () => <Home />,
  },
  {
    path: `/${GIT_PROJECT}/characters`,
    exact: true,
    main: () => <Character />,
  },
  {
    path:`/${GIT_PROJECT}/characters/:name`,
    exact: true,
    main: () => <CharacterInfo />,
  },
  {
    path: "undeveloped",
    exact: false,
    main: () => <Undeveloped />,
  },
  // {
  //   path: "",
  //   exact: false,
  //   main: () => <Undeveloped />,
  // },
];

export default routes;
