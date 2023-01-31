import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ChatPage from "./components/ChaPage/ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
  );
}

export default App;
