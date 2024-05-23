import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom"
import "bootstrap"

import Home from "./components/home.jsx"
import "bootstrap"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App