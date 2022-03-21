import React from "react";

import cardConcert from "../img/new/concert.png";
import cardConcertBorder from "../img/new/concert-border.png";

import iconBatteriebaguette from "../img/new/icon/Batterie_baguette.png";
import iconBatterieCaisse from "../img/new/icon/Batterie_Caisse.png";
import iconBatterieSimbale from "../img/new/icon/Batterie_Simbale.png";

import iconChanteurmicro from "../img/new/icon/Chanteur_micro.png";
import iconChanteurnote from "../img/new/icon/Chanteur_note.png";
import iconChanteurpapier from "../img/new/icon/Chanteur_papier.png";

import iconGuitaristeEmplie from "../img/new/icon/Guitariste_Emplie.png";
import iconGuitaristeguitare from "../img/new/icon/Guitariste_guitare.png";
import iconGuitaristePic from "../img/new/icon/Guitariste_Pic.png";

import noHelp from "../img/new/icon/noHelp.png";

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
    return `text-center text-9xl font-extrabold ${
      color === "green"
        ? "text-[#ff7800]"
        : color === "blue"
        ? "text-[#f22e61]"
        : "text-[#2d68da]"
    }`;
  };

  console.log(helpable);
  return (
    <div
      className="relative flex h-[1021px] w-[735px] items-center justify-center bg-slate-200"
      ref={innerRef}
    >
      <img className="absolute w-full h-full" src={cardConcert} alt="" />
      <div className="absolute flex justify-around w-full h-64 bottom-2">
        {guitaristColor === "green" && (
          <img className="h-52 w-52" src={iconGuitaristeguitare} alt=""></img>
        )}
        {guitaristColor === "blue" && (
          <img className="h-52 w-52" src={iconGuitaristeEmplie} alt=""></img>
        )}
        {guitaristColor === "red" && (
          <img className="h-52 w-52" src={iconGuitaristePic} alt=""></img>
        )}

        {singerColor === "green" && (
          <img className="h-52 w-52" src={iconChanteurmicro} alt=""></img>
        )}
        {singerColor === "blue" && (
          <img className="h-52 w-52" src={iconChanteurnote} alt=""></img>
        )}
        {singerColor === "red" && (
          <img className="h-52 w-52" src={iconChanteurpapier} alt=""></img>
        )}

        {drummerColor === "green" && (
          <img className="h-52 w-52" src={iconBatterieCaisse} alt=""></img>
        )}
        {drummerColor === "blue" && (
          <img className="h-52 w-52" src={iconBatteriebaguette} alt=""></img>
        )}
        {drummerColor === "red" && (
          <img className="h-52 w-52" src={iconBatterieSimbale} alt=""></img>
        )}
      </div>
      <img className="absolute w-full" src={cardConcertBorder} alt="" />
      {helpable === "FALSE" && (
        <img className="absolute h-20 top-6" src={noHelp} alt="" />
      )}
      <div className="absolute flex justify-between w-full px-20 top-9">
        <p className="font-extrabold text-center text-9xl text-rose-500">
          {loseNumber}
        </p>
        <p className="font-extrabold text-center text-yellow-500 text-9xl">
          {lootNumber}
        </p>
      </div>
      <div className="absolute flex justify-around w-full px-4 bottom-28">
        <p className={getClassName(guitaristColor)}>{guitarist}</p>
        <p className={getClassName(singerColor)}>{singer}</p>
        <p className={getClassName(drummerColor)}>{drummer}</p>
      </div>
    </div>
  );
}

export default ConcertCards;
