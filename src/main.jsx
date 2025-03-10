import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "../src/fonts/satoshi/css/satoshi.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
      <Footer/>
    </Router>
  </StrictMode>
);
