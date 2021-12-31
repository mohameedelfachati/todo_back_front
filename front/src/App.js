import "./App.css";
import Header from "./header/Header";
import Historique from "./Historique/Historique";
import Sidebare from "./sidebare/Sidebare";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_content">
        <Router>
          <Sidebare />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<Historique />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
