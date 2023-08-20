import "./App.css";
import Sidebar from "./Components/Sidebar";
import Routes from "./Routes/Routes";

function App() {
  return (
    <div className="App flex flex-row">
      <Sidebar />
      <Routes />
    </div>
  );
}

export default App;
