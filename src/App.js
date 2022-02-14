import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import "./index.css";
import Concert from "./views/Concert";
import Artist from "./views/Artist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/concert" element={<Concert />} />
      <Route path="/artist" element={<Artist />} />
    </Routes>
  );
}

export default App;
