import "./App.css";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
