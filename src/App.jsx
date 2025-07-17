import { Route, Routes } from "react-router-dom";
import "./App.css";
import DUpload from "./components/DUpload/DUpload";
import DView from "./components/DView/DView";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dview" element={<DView />} />
      <Route path="/dupload" element={<DUpload />} />
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
}

export default App;
