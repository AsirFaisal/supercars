import "./App.css";
import Showroom from "./components/Showroom/Showroom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Showroom></Showroom>
      </div>
    </div>
  );
}

export default App;
