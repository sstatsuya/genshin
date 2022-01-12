/* hihihi*/
import { useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { GIT_PROJECT } from "../Constant/Constant";
import normalAttackIcon from "../Assets/Images/normal-attack.gif";
import spellAttackIcon from "../Assets/Images/spell-attack.gif";
import ultimateAttackIcon from "../Assets/Images/ultimate-attack.gif";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import CallAPI from "../util/CallAPI";
import * as Constant from "../Constant/Constant";
import LoadingImg from "../Assets/Images/loading.gif";

const CharacterInfo = () => {
  const match = useRouteMatch();
  const name = match.params.name;
  console.log(name);
  const [character, setCharacter] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [jsx, setJsx] = useState(null);
  const [activeSkill, setActiveSkill] = useState(0); // 0: normal, 1: element , 2: burst
  const [constellations, setConstellations] = useState(0);
  // useEffect(() => {
    // console.log('hihi')
    // CallAPI(Constant.CHARACTER_URL, name, "GET", null).then((res) => {
      // console.log(res.data)
      // if (res.status >= 200 && res.status <= 299) {
      //   setLoading(false);
      //   window.scrollTo(0, 0)
      //   setCharacter(res.data);
      // }
    // });
  // }, []);
  console.log(character);
  // console.log("active: " + activeSkill);
  // const styleSkillText = (text) => {
  //   let countLineDown = 0;
  //   for (let i = 0; i < text.length; i++) {
  //     if (text[i] === "\n") {
  //       countLineDown += 1;
  //       if (countLineDown % 2 === 0) {
  //         text = text.slice(0, i + 1) + "\n" + text.slice(i + 1, text.length);
  //         i += 1;
  //       }
  //     }
  //   }
  //   return text;
  // };

  return (
    <div>
      Hello, this is character info
    </div>
    // <div
    //   className="character-info"
    //   style={{
    //     backgroundImage: `linear-gradient(black 1%, transparent 10%), linear-gradient(to top, black 2%, transparent 100%),
    // url("https://api.genshin.dev/characters/${name}/constellation")`,
    //   }}
    // >
    //   <div className="row">
    //     <div className="col col-lg-1"></div>
    //     <div className="col col-lg-10">
    //       <ul className="character-info__dir">
    //         <li className="character-info__dir-item">
    //           <NavLink
    //             to={`/${GIT_PROJECT}`}
    //             className="character-info__dir-item-link"
    //           >
    //             <FontAwesomeIcon
    //               className="character-info__dir-icon"
    //               icon={faChevronRight}
    //             />
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="character-info__dir-item">
    //           <NavLink
    //             to={`/${GIT_PROJECT}/characters`}
    //             className="character-info__dir-item-link"
    //           >
    //             <FontAwesomeIcon
    //               className="character-info__dir-icon"
    //               icon={faChevronRight}
    //             />
    //             Character
    //           </NavLink>
    //         </li>
    //         <li className="character-info__dir-item">
    //           <NavLink
    //             to={`/${GIT_PROJECT}/characters/${name}`}
    //             className="character-info__dir-item-link"
    //           >
    //             <FontAwesomeIcon
    //               className="character-info__dir-icon"
    //               icon={faChevronRight}
    //             />
    //             {name}
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="col col-lg-1"></div>
    //   </div>
    //   <div className={`character-info__wrapper`}>
    //     <div className={`col ${isLoading ? "" : "hidden"}`}>
    //       <img className="loading" src={LoadingImg} alt="loading" />
    //     </div>
    //     {character && !isLoading && (
    //       <>
    //         <div className="row mt-3 mb-200">
    //           <div className="col col-lg-8 character-info__intro mx-auto">
    //             <div
    //               className="character-info__intro-bg"
    //               style={{
    //                 backgroundImage: `url("https://api.genshin.dev/characters/${name}/gacha-splash")`,
    //               }}
    //             ></div>
    //             <div className="character-info__intro-text">
    //               <p className="character-info__intro-nickname">
    //                 {character.affiliation}
    //               </p>
    //               <p className="character-info__intro-name">{character.name}</p>
    //               <div className="character-info__intro-desc-wrapper">
    //                 <div className="row character__desc-wrapper">
    //                   <div className="col character__desc">
    //                     <div className="character__desc-title">visison</div>
    //                     <img
    //                       className="character__desc-img"
    //                       src={`${
    //                         Constant.VISION_URL
    //                       }/${character.vision.toLowerCase()}/icon`}
    //                       alt="element"
    //                     />
    //                     <div className="character__desc-text">
    //                       {character.vision}
    //                     </div>
    //                   </div>
    //                   <div className="col character__desc">
    //                     <div className="character__desc-title">nation</div>
    //                     <img
    //                       className="character__desc-img"
    //                       src={`${
    //                         Constant.NATION_URL
    //                       }/${character.nation.toLowerCase()}/icon`}
    //                       alt="element"
    //                     />
    //                     <div className="character__desc-text">
    //                       {character.nation}
    //                     </div>
    //                   </div>
    //                   <div className="col character__desc">
    //                     <div className="character__desc-title">rarity</div>
    //                     <FontAwesomeIcon
    //                       className="character__desc-star-icon"
    //                       icon={faAward}
    //                     />
    //                     <span className="character__desc-star">
    //                       {Array(character.rarity)
    //                         .fill()
    //                         .map((item, index) => {
    //                           return (
    //                             <FontAwesomeIcon
    //                               key={index}
    //                               className="character__desc-star-icon color-yellow"
    //                               icon={faStar}
    //                             />
    //                           );
    //                         })}
    //                     </span>
    //                   </div>
    //                   <div className="col character__desc">
    //                     <div className="character__desc-title">weapon</div>
    //                     <FontAwesomeIcon
    //                       className="character__desc-star-icon"
    //                       icon={faShieldAlt}
    //                     />
    //                     <div className="character__desc-text">
    //                       {character.weapon}
    //                     </div>
    //                   </div>
    //                   <div className="col character__desc">
    //                     <div className="character__desc-title">weapon</div>
    //                     <FontAwesomeIcon
    //                       className="character__desc-star-icon"
    //                       icon={faBirthdayCake}
    //                     />
    //                     <div className="character__desc-text">
    //                       {character.birthday}
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="row character__desc-quote">
    //                   <div className="col col-10 mx-auto">
    //                     <p>{character.description}</p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row character__skill-row">
    //           <div className="col col-lg-8 mx-auto character__skill-col">
    //             <p className="character__skill-title">Talents</p>
    //             <div className="character__skill-wrapper">
    //               <div className="character__skill-name">
    //                 <ul className="character__skill-list">
    //                   <li className="character__skill-item">
    //                     <div
    //                       className={`skill ${
    //                         activeSkill === 0 ? "active" : ""
    //                       }`}
    //                       onClick={() => {
    //                         setActiveSkill(0);
    //                       }}
    //                       style={{
    //                         backgroundImage: `url(${normalAttackIcon})`,
    //                       }}
    //                     >
    //                       <span className="skill__text">Normal Attack</span>
    //                     </div>
    //                   </li>
    //                   <li className="character__skill-item">
    //                     <div
    //                       className={`skill ${
    //                         activeSkill === 1 ? "active" : ""
    //                       }`}
    //                       onClick={() => {
    //                         setActiveSkill(1);
    //                       }}
    //                       style={{ backgroundImage: `url(${spellAttackIcon})` }}
    //                     >
    //                       <span className="skill__text">Element Attack</span>
    //                     </div>
    //                   </li>
    //                   <li className="character__skill-item">
    //                     <div
    //                       className={`skill ${
    //                         activeSkill === 2 ? "active" : ""
    //                       }`}
    //                       onClick={() => {
    //                         setActiveSkill(2);
    //                       }}
    //                       style={{
    //                         backgroundImage: `url(${ultimateAttackIcon})`,
    //                       }}
    //                     >
    //                       <span className="skill__text">Burst Attack</span>
    //                     </div>
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div className="character__skill-desc">
    //                 <p className="character__skill-desc-name">
    //                   {activeSkill === 0
    //                     ? character.skillTalents[0].name
    //                     : activeSkill === 1
    //                     ? character.skillTalents[1].name
    //                     : character.skillTalents[2].name}
    //                 </p>
    //                 <p
    //                   className="character__skill-desc-detail"
    //                   style={{ whiteSpace: "pre-wrap" }}
    //                 >
    //                   {activeSkill === 1
    //                     ? styleSkillText(character.skillTalents[0].description)
    //                     : activeSkill === 2
    //                     ? character.skillTalents[1].description
    //                     : character.skillTalents[2].description}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row character__skill-row">
    //           <div className="col col-lg-8 mx-auto character__skill-col">
    //             <p className="character__skill-title">Passive Talents</p>
    //             {character.passiveTalents.map((passiveTalent, index) => {
    //               return (
    //                 <div
    //                   key={index}
    //                   className="character__passive-skill-wrapper"
    //                 >
    //                   <p className="character__passive-skill-desc-name">
    //                     {passiveTalent.name}
    //                   </p>
    //                   <p className="character__passive-skill-desc-unlock">
    //                     {passiveTalent.unlock}
    //                   </p>
    //                   <p className="character__passive-skill-desc-detail">
    //                     {passiveTalent.description}
    //                   </p>
    //                 </div>
    //               );
    //             })}
    //           </div>
    //         </div>
    //         <div className="row character__skill-row">
    //           <div className="col col-lg-8 mx-auto character__skill-col">
    //             <p className="character__skill-title">Constellations</p>
    //             <div className="character__constellation-wrapper">
    //               <div className="character__constellation-img">
    //                 <img
    //                   src={`https://api.genshin.dev/characters/${name}/constellation`}
    //                   alt="constellations"
    //                 />
    //               </div>
    //               <div className="character__constellation-desc">
    //                 <ul className="character__constellation-desc-list">
    //                   <li
    //                     onClick={() => {
    //                       setConstellations(0);
    //                     }}
    //                     className={`character__constellation-desc-item ${
    //                       constellations === 0 ? "active" : ""
    //                     }`}
    //                   >
    //                     1
    //                   </li>
    //                   <li
    //                     onClick={() => {
    //                       setConstellations(1);
    //                     }}
    //                     className={`character__constellation-desc-item ${
    //                       constellations === 1 ? "active" : ""
    //                     }`}
    //                   >
    //                     2
    //                   </li>
    //                   <li
    //                     onClick={() => {
    //                       setConstellations(2);
    //                     }}
    //                     className={`character__constellation-desc-item ${
    //                       constellations === 2 ? "active" : ""
    //                     }`}
    //                   >
    //                     3
    //                   </li>
    //                   <li
    //                     onClick={() => {
    //                       setConstellations(3);
    //                     }}
    //                     className={`character__constellation-desc-item ${
    //                       constellations === 3 ? "active" : ""
    //                     }`}
    //                   >
    //                     4
    //                   </li>
    //                   <li
    //                     onClick={() => {
    //                       setConstellations(4);
    //                     }}
    //                     className={`character__constellation-desc-item ${
    //                       constellations === 4 ? "active" : ""
    //                     }`}
    //                   >
    //                     5
    //                   </li>
    //                   <li
    //                     onClick={() => {
    //                       setConstellations(5);
    //                     }}
    //                     className={`character__constellation-desc-item ${
    //                       constellations === 5 ? "active" : ""
    //                     }`}
    //                   >
    //                     6
    //                   </li>
    //                 </ul>
    //                 <div className={`character__constellation-desc-wrapper`}>
    //                   <p className="character__constellation-desc-name">
    //                     {character.constellations[constellations].name}
    //                   </p>
    //                   <p className="character__constellation-desc-detail">
    //                     {character.constellations[constellations].description}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </div>
  );
};

export default CharacterInfo;
