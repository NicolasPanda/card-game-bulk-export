import Cards from "./components/Cards";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="flex h-full min-h-screen flex-col bg-gray-800 text-gray-200">
      <Header />

      <div className="my-14 flex flex-col items-center justify-center gap-14">
        <Cards name="hello" />
        <Cards name="hello" />
        <Cards name="hello" />
      </div>
    </div>
  );
}

export default App;
