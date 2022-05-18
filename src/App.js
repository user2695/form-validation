import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chart from "./pages/Chart";

function App() {
  return (
    <div className="app--body">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </div>
  );
}

export default App;
