import { Route, Routes } from "react-router-dom";
import "./App.css";
import DUpload from "./components/DUpload/DUpload";
import DView from "./components/DView/DView";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dview" element={<DView />} />
      <Route path="/dupload" element={<DUpload />} />
    </Routes>
  );
}

export default App;
