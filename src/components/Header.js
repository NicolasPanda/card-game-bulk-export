import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="relative flex h-24 items-center justify-center bg-gray-500">
      <Link
        className="absolute left-11 cursor-pointer select-none rounded-full bg-pink-500 px-5 py-2 hover:bg-pink-600 active:bg-pink-400"
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
