import logo from "./logo.svg";
import "./App.css";
import Manager from "./components/Manager";

function App() {
  return (
    <div className="w-screen h-screen flex bg-gradient-to-b from-green-rick to-yellow-rick justify-center p-5">
      <Manager />
    </div>
  );
}

export default App;
