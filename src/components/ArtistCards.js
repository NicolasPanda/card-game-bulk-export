import React from "react";

import guitaristImage from "../img/new/guitarist.png";
import signerImage from "../img/new/signer.png";
import drummerImage from "../img/new/drummer.png";
import drummerBorderImage from "../img/new/drummer-border.png";
import signerBorderImage from "../img/new/signer-border.png";
import guitaristBorderImage from "../img/new/guitarist-border.png";

function ArtistCards({ innerRef, stats = [1, 2, 3], type = "drummer" }) {
  return (
    <div
      className="relative flex h-[1021px] w-[735px] items-center justify-center bg-slate-200"
      ref={innerRef}
    >
      {type === "guitarist" && (
        <>
          <img
            className="absolute top-0 w-full h-full"
            src={guitaristImage}
            alt=""
          />
          <img className="absolute w-full" src={guitaristBorderImage} alt="" />
        </>
      )}
      {type === "signer" && (
        <>
          <img
            className="absolute top-0 w-full h-full"
            src={signerImage}
            alt=""
          />
          <img className="absolute w-full" src={signerBorderImage} alt="" />
        </>
      )}
      {type === "drummer" && (
        <>
          <img
            className="absolute top-0 w-full h-full"
            src={drummerImage}
            alt=""
          />
          <img className="absolute w-full" src={drummerBorderImage} alt="" />
        </>
      )}
      <div className="absolute flex justify-around w-full px-4 bottom-28">
        <p className={"text-center text-9xl font-extrabold text-[#ff7800]"}>
          {stats[0]}
        </p>
        <p className={"text-center text-9xl font-extrabold text-[#f22e61]"}>
          {stats[1]}
        </p>
        <p className={"text-center text-9xl font-extrabold text-[#2d68da]"}>
          {stats[2]}
        </p>
      </div>
    </div>
  );
}

export default ArtistCards;
