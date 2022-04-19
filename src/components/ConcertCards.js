import React from "react";

import cardConcertEasy from "../img/final/AssetsConcert/bg_concert_easy.png";
import cardConcertMedium from "../img/final/AssetsConcert/bg_concert_medium.png";
import cardConcertHard from "../img/final/AssetsConcert/bg_concert_hard.png";
import cardConcertTour from "../img/final/AssetsConcert/concert_special_tour.png";

import iconLose from "../img/final/AssetsConcert/i_lose_artefact.png";
import iconWin from "../img/final/AssetsConcert/i_win_artefact.png";

import iconDrummer from "../img/final/AssetsConcert/i_concert_drummer.png";
import iconGuitarist from "../img/final/AssetsConcert/i_concert_guitarist.png";
import iconSinger from "../img/final/AssetsConcert/i_concert_singer.png";

import border from "../img/final/AssetsConcert/c_concert_contour.png";
import noHelp from "../img/final/AssetsConcert/i_nohelp_artefact.png";

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
  type,
}) {
  const getClassName = (color) => {
    return `text-center text-[95px] font-extrabold ${
      color === "green"
        ? "text-[#ff7200]"
        : color === "blue"
        ? "text-[#00ffeb]"
        : "text-[#9900ff]"
    }`;
  };

  console.log(helpable);
  return (
    <div
      className="relative flex h-[750px] w-[625px] items-center justify-center overflow-hidden bg-slate-200"
      ref={innerRef}
    >
      {type === "Easy" && (
        <img className="absolute w-full h-full" src={cardConcertEasy} alt="" />
      )}
      {type === "Medium" && (
        <img
          className="absolute w-full h-full"
          src={cardConcertMedium}
          alt=""
        />
      )}
      {type === "Hard" && (
        <img className="absolute w-full h-full" src={cardConcertHard} alt="" />
      )}
      {type === "Tour" && (
        <img className="absolute w-full h-full" src={cardConcertTour} alt="" />
      )}
      <img className="absolute w-full" src={border} alt="" />
      {helpable === "FALSE" && (
        <img className="absolute h-20 top-6" src={noHelp} alt="" />
      )}
      <div className="absolute flex gap-64 top-8">
        <img className="w-16 h-16" src={iconLose} alt="" />
        <img className="w-16 h-16" src={iconWin} alt="" />
      </div>
      <div className="absolute flex justify-between w-full px-6 -top-8">
        <p className="font-extrabold text-center text-8xl text-rose-500">
          {loseNumber}
        </p>
        <p className="font-extrabold text-center text-yellow-500 text-8xl">
          {lootNumber}
        </p>
      </div>
      <div className="absolute -bottom-[50px] flex w-full justify-between px-5">
        <img className="h-28 w-28" src={iconGuitarist} alt="" />
        <img className="mt-8 h-28 w-28" src={iconDrummer} alt="" />
        <img className="h-28 w-28" src={iconSinger} alt="" />
      </div>
      <div className="absolute flex justify-between w-full px-3 bottom-16">
        <p className={getClassName(guitaristColor)}>{guitarist}</p>
        <p className={getClassName(drummerColor) + " mt-12"}>{drummer}</p>
        <p className={getClassName(singerColor)}>{singer}</p>
      </div>
    </div>
  );
}

export default ConcertCards;
