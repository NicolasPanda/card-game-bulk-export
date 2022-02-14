import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import "./index.css";
import Concert from "./views/Concert";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/concert" element={<Concert />} />
    </Routes>
  );
}

export default App;
