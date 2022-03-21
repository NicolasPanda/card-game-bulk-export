import React from "react";

import guitaristImage from "../img/card-artefact-guitarist.png";
import signerImage from "../img/card-artefact-signer.png";
import drummerImage from "../img/card-artefact-drummer.png";

function ArtefactCards({ innerRef, stats = [1, 2, 3], type = "drummer" }) {
  return (
    <div
      className="relative flex h-[1021px] w-[735px] items-center justify-center bg-slate-200"
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

      <div className="absolute flex justify-around w-full px-4 bottom-36">
        {stats[0] !== "x" && (
          <p className={"text-center text-9xl font-extrabold text-green-600"}>
            {`+${stats[0]}`}
          </p>
        )}
        {stats[1] !== "x" && (
          <p className={"text-center text-9xl font-extrabold text-blue-600"}>
            {`+${stats[1]}`}
          </p>
        )}
        {stats[2] !== "x" && (
          <p className={"text-center text-9xl font-extrabold text-red-600"}>
            {`+${stats[2]}`}
          </p>
        )}
      </div>
    </div>
  );
}

export default ArtefactCards;
