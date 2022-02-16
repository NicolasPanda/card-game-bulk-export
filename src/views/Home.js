import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="flex flex-col h-full min-h-screen text-gray-200 bg-gray-800">
      <Header />
      <Link to="/concert">Concert</Link>
      <Link to="/artist">Artist</Link>
      <Link to="/artefact">Artefact</Link>
    </div>
  );
}

export default Home;
