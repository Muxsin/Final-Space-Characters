import React, { useState } from "react";

const characters = [
  [
    "images/gary.png",
    "images/gary_red_clothes.png",
    "images/gary_previouse.png",
  ],
  ["images/quinn_previouse.png", "images/quinn_season3.png"],
];

export default function Characters() {
  const [count, setCount] = useState(0);
  const [characterKey, setCharacterKey] = useState(0);
  return (
    <div className="character-box">
      <p>
        <img
          src={characters[characterKey][count]}
          alt="gray"
          className="character"
        />
      </p>
      <button
        className="button"
        onClick={() => {
          count === characters[characterKey].length - 1
            ? setCount(0)
            : setCount(count + 1);
        }}
      >
        Change clothes
      </button>
      <button
        className="button"
        onClick={() => {
          characterKey === characters.length - 1
            ? setCharacterKey(0)
            : setCharacterKey(characterKey + 1);
          setCount(0);
        }}
      >
        Next
      </button>
    </div>
  );
}
