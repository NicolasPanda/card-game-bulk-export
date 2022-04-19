import React from "react";

import guitaristImage from "../img/final/AssetsArtist/bg_artist_guitarist.png";
import signerImage from "../img/final/AssetsArtist/bg_artist_singer.png";
import drummerImage from "../img/final/AssetsArtist/bg_artist_drummer.png";
import border from "../img/final/AssetsArtist/c_artist_contour.png";

function ArtistCards({ innerRef, stats = [1, 2, 3], type = "drummer" }) {
  return (
    <div
      className="relative flex h-[750px] w-[625px] items-center justify-center bg-slate-200"
      ref={innerRef}
    >
      {type === "guitarist" && (
        <>
          <img
            className="absolute top-0 w-full h-full"
            src={guitaristImage}
            alt=""
          />
        </>
      )}
      {type === "signer" && (
        <>
          <img
            className="absolute top-0 w-full h-full"
            src={signerImage}
            alt=""
          />
          }
        </>
      )}
      {type === "drummer" && (
        <>
          <img
            className="absolute top-0 w-full h-full"
            src={drummerImage}
            alt=""
          />
        </>
      )}

      <img className="absolute w-full" src={border} alt="" />
      <div className="absolute flex justify-around w-full px-4 bottom-10">
        <p className={"text-center text-8xl font-extrabold text-[#ff7200]"}>
          {stats[0]}
        </p>
        <p className={"text-center text-8xl font-extrabold text-[#00ffeb]"}>
          {stats[1]}
        </p>
        <p className={"text-center text-8xl font-extrabold text-[#9900ff]"}>
          {stats[2]}
        </p>
      </div>
    </div>
  );
}

export default ArtistCards;
