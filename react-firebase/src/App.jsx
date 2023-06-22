import {Route, Routes } from "react-router-dom";
import { Login } from "./Routes/Login";
import { Register } from "./Routes/Register";
import { Home } from "./Routes/Home";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
  )
}


