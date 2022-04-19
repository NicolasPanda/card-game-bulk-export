import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="flex flex-col h-full min-h-screen text-gray-200 bg-gray-500">
      <Header />
      <Link to="/concerteasy">Concert Esay</Link>
      <Link to="/concertmedium">Concert Medium</Link>
      <Link to="/concerthard">Concert Hard</Link>
      <Link to="/concerttour">Concert Tour</Link>
      <Link to="/artist">Artist</Link>
      <Link to="/artefact">Artefact</Link>
    </div>
  );
}

export default Home;
