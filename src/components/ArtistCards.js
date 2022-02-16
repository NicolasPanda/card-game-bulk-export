import React from "react";

import guitaristImage from "../img/card-artist-guitarist.png";
import signerImage from "../img/card-artist-signer.png";
import drummerImage from "../img/card-artist-drummer.png";

function ArtistCards({ innerRef, stats = [1, 2, 3], type = "drummer" }) {
  return (
    <div
      className="relative flex h-[679px] w-[403px] items-center justify-center bg-slate-200"
      ref={innerRef}
    >
      {type === "guitarist" && (
        <img className="absolute h-full w-full" src={guitaristImage} alt="" />
      )}
      {type === "signer" && (
        <img className="absolute h-full w-full" src={signerImage} alt="" />
      )}
      {type === "drummer" && (
        <img className="absolute h-full w-full" src={drummerImage} alt="" />
      )}
      <div className="absolute bottom-14 flex w-full justify-around px-4">
        <p className={"text-center text-8xl font-extrabold text-green-600"}>
          {stats[0]}
        </p>
        <p className={"text-center text-8xl font-extrabold text-blue-600"}>
          {stats[1]}
        </p>
        <p className={"text-center text-8xl font-extrabold text-red-600"}>
          {stats[2]}
        </p>
      </div>
    </div>
  );
}

export default ArtistCards;
