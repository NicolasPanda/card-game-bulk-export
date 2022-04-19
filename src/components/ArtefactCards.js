import React from "react";

import guitaristImage from "../img/final/AssetsArthefact/bg_athefact_guitarist.png";
import signerImage from "../img/final/AssetsArthefact/bg_athefact_singer.png";
import drummerImage from "../img/final/AssetsArthefact/bg_athefact_drummer.png";

import border from "../img/final/AssetsArtist/c_artist_contour.png";

function ArtefactCards({ innerRef, stats = [1, 2, 3], type = "drummer" }) {
  return (
    <div
      className="relative flex h-[750px] w-[625px] items-center justify-center overflow-hidden bg-slate-200"
      ref={innerRef}
    >
      {type === "guitarist" && (
        <img className="absolute w-full h-full" src={guitaristImage} alt="" />
      )}
      {type === "signer" && (
        <img className="absolute w-full h-full" src={signerImage} alt="" />
      )}
      {type === "drummer" && (
        <img className="absolute w-full h-full" src={drummerImage} alt="" />
      )}

      <img className="absolute" src={border} alt="" />
      <div className="absolute flex justify-around w-full px-4 bottom-14">
        {stats[0] !== "x" && (
          <p className={"text-center text-8xl font-extrabold text-[#ff7200]"}>
            {`+${stats[0]}`}
          </p>
        )}
        {stats[1] !== "x" && (
          <p className={"text-center text-8xl font-extrabold text-[#00ffeb]"}>
            {`+${stats[1]}`}
          </p>
        )}
        {stats[2] !== "x" && (
          <p className={"text-center text-8xl font-extrabold text-[#9900ff]"}>
            {`+${stats[2]}`}
          </p>
        )}
      </div>
    </div>
  );
}

export default ArtefactCards;
