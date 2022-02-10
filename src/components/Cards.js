import React from "react";

function Cards({ name }) {
  return (
    <div className="flex h-96 w-64 items-center justify-center bg-slate-200">
      <p className="text-2xl font-extrabold text-pink-600">card {name}</p>
    </div>
  );
}

export default Cards;
