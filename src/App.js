import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import "./index.css";
import Concert from "./views/Concert";
import Artist from "./views/Artist";
import Artefact from "./views/Artefact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/concerteasy"
        element={<Concert request="concerteasy" type={"Easy"} />}
      />
      <Route
        path="/concertmedium"
        element={<Concert request="concertmedium" type={"Medium"} />}
      />
      <Route
        path="/concerthard"
        element={<Concert request="concerthard" type={"Hard"} />}
      />
      <Route
        path="/concerttour"
        element={<Concert request="concerttour" type={"Tour"} />}
      />
      <Route path="/artist" element={<Artist />} />
      <Route path="/artefact" element={<Artefact />} />
    </Routes>
  );
}

export default App;
