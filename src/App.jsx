import { Route, Routes } from "react-router-dom";
import "./App.css";
import DView from "./components/DView/DView";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Loading from "./components/Loading/Loading";
import ResultLayout from "./components/ResultLayout/ResultLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DView />} />
      <Route path="/result" element={<ResultLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
}

export default App;
