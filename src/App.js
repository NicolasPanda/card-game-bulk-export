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
      <Route path="/concert" element={<Concert />} />
      <Route path="/artist" element={<Artist />} />
      <Route path="/artefact" element={<Artefact />} />
    </Routes>
  );
}

export default App;
