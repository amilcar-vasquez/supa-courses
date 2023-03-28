import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Programs from "./pages/Programs"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>UB Courses Database</h1>
        <Link to="/">Home</Link>
        <Link to="/programs">Programs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
