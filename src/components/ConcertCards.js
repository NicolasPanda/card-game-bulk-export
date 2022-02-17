import React from "react";

import cardConcert from "../img/card-concert.png";
import noHelp from "../img/no-help.png";

function ConcertCards({
  lootNumber,
  loseNumber,
  helpable,
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

  console.log(helpable);
  return (
    <div
      className="relative flex h-[679px] w-[403px] items-center justify-center bg-slate-200"
      ref={innerRef}
    >
      <img className="absolute h-full w-full" src={cardConcert} alt="" />
      {helpable === "FALSE" && (
        <img className="absolute top-6 h-20" src={noHelp} alt="" />
      )}
      <div className="absolute top-4 flex w-full justify-between px-12">
        <p className="text-center text-7xl font-extrabold text-rose-500">
          {loseNumber}
        </p>
        <p className="text-center text-7xl font-extrabold text-yellow-500">
          {lootNumber}
        </p>
      </div>
      <div className="absolute bottom-28 flex w-full justify-around px-4">
        <p className={getClassName(guitaristColor)}>{guitarist}</p>
        <p className={getClassName(singerColor)}>{singer}</p>
        <p className={getClassName(drummerColor)}>{drummer}</p>
      </div>
    </div>
  );
}

export default ConcertCards;
