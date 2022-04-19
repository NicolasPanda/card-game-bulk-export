import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="relative flex items-center justify-center h-24 bg-gray-800">
      <Link
        className="absolute px-5 py-2 bg-pink-500 rounded-full cursor-pointer select-none left-11 hover:bg-pink-600 active:bg-pink-400"
        to="/"
      >
        Home
      </Link>

      <h1 className="text-3xl font-bold">
        Card Game Bulk Export{" "}
        <span className="font-light">| Bohemian Rhapsody</span>
      </h1>
    </div>
  );
}

export default Header;
