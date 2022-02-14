import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="flex h-full min-h-screen flex-col bg-gray-800 text-gray-200">
      <Header />
      <Link to="/concert">Concert</Link>
    </div>
  );
}

export default Home;
