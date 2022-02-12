import Cards from "./components/Cards";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col h-full min-h-screen text-gray-200 bg-gray-800">
      <Header />

      <div className="flex flex-col items-center justify-center my-14 gap-14">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
