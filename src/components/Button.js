import React from "react";

function Button({ onClick, text }) {
  return (
    <button
      className="cursor-pointer rounded-full bg-pink-500 px-8 py-4 transition-all duration-200 hover:bg-pink-600 active:bg-pink-400"
      onClick={onClick}
    >
      <span className="select-none text-2xl font-bold">{text}</span>
    </button>
  );
}

export default Button;
