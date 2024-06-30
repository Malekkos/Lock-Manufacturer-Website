import React from "react";


import Handle from "./lock-pieces/lock-handle";
import Body from "./lock-pieces/lock-body";
import Nav from "./nav-dropdown"


function Home() {

  return (
    <>
      <Nav />
      <Handle />
      <Body />
    </>
  )
}

export default Home