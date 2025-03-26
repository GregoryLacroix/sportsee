import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Settings from "./pages/Settings";
import Community from "./pages/Community";
import "./css/style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="profil/:id" element={<Profil />} />
        <Route path="settings/" element={<Settings />} />
        <Route path="community/" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
