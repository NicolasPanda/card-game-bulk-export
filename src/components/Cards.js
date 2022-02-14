import React from "react";

import cardConcert from "../img/card-concert.png";

function Cards({
  lootNumber,
  loseNumber,
  guitarist,
  guitaristColor,
  singer,
  singerColor,
  drummer,
  drummerColor,
  innerRef,
}) {
  const getClassName = (color) => {
    return `text-center text-8xl font-extrabold ${
      color === "green"
        ? "text-green-600"
        : color === "blue"
        ? "text-blue-600"
        : "text-red-600"
    }`;
  };

  return (
    <div
      className="relative flex h-[679.5px] w-[403.5px] items-center justify-center bg-slate-200"
      ref={innerRef}
    >
      <img className="absolute" src={cardConcert} alt="" />
      <div className="absolute bottom-36 flex w-full justify-around px-4">
        <p className={getClassName(guitaristColor)}>{guitarist}</p>
        <p className={getClassName(singerColor)}>{singer}</p>
        <p className={getClassName(drummerColor)}>{drummer}</p>
      </div>
    </div>
  );
}

export default Cards;
