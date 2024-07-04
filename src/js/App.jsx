import React from "react";
import { Route, Routes } from "react-router-dom"
import "bootstrap"

import Home from "./components/home.jsx"
import Cart from "./components/cart.jsx";
import Nav from "./components/nav-dropdown.jsx";

import lock from "../dummy-data/lock_data.js";
import Item from "./components/itemPage.jsx";

import "bootstrap"
function App() {

  console.log(lock)

  return (
    <>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/items/:name" element={<Item />}/>
        </Routes>
    </>
  )
}

export default App