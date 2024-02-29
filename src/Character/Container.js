import { useEffect, useState } from "react";
import Item from "./Item";
import CallAPI from "../util/CallAPI";
import * as Constant from "../Constant/Constant";
import { CHARACTER_URL } from "../Constant/Constant";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingImg from "../Assets/Images/loading.gif";
import "../App.css";

function Container() {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    CallAPI(Constant.CHARACTER_URL, "", "GET", null).then((res) => {
      setCharacters(res.data);
    });
  }, []);

  const [jsx, setJsx] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const generateItem = () => {
    if (characters && !jsx) {
      var groupSize = 5;
      var rows = characters
        .map((character, index) => {
          return (
            <Item key={index} name={character}>
              <img
                onLoad={() => {
                  if (index === characters.length - 1) {
                    setLoading(false);
                  }
                }}
                alt={`${character}-card`}
                src={`${CHARACTER_URL}/${character}/card`}
              />
            </Item>
          );
        })
        .reduce(function (r, element, index) {
          index % groupSize === 0 && r.push([]);
          r[r.length - 1].push(element);
          return r;
        }, [])
        .map((rowContent, index) => {
          return (
            <div key={index} className="row">
              {rowContent}
            </div>
          );
        });
      setJsx(rows);
    }
  };

  generateItem();

  return (
    <div className="row" style={{ width: "90%", margin: "0 auto" }}>
      <div className={`col ${isLoading ? "" : "hidden"}`}>
        <img className="loading" src={LoadingImg} alt="loading" />
      </div>
      {/* Phải render jsx ra giao diện thì nó mới dùng được onload */}
      {<div className={`${isLoading ? "hidden" : ""}`}>{jsx}</div>}
    </div>
  );
}

export default Container;
