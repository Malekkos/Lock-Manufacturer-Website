import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"
import "bootstrap"

import Home from "./components/home.jsx"
import Cart from "./components/cart.jsx";
import Nav from "./components/nav-dropdown.jsx";

import "bootstrap"
function App() {

  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App