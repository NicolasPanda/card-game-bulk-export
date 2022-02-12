import React from "react";

import cardConcert from "../img/card-concert.png";

function Cards() {
  return (
    <div className="relative flex h-[679.5px] w-[403.5px] items-center justify-center bg-slate-200">
      <img className="absolute" src={cardConcert} alt="" />
      <p className="absolute font-extrabold text-blue-600 bottom-36 left-12 text-8xl">
        3
      </p>
      <p className="absolute font-extrabold text-green-600 bottom-36 text-8xl">
        6
      </p>
      <p className="absolute font-extrabold text-red-600 bottom-36 right-12 text-8xl">
        2
      </p>
    </div>
  );
}

export default Cards;
