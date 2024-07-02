import React from "react";

function Nav() {

  const drop = () => {
    document.getElementById("dd").classList.toggle("show");
  }

  return (
    <div id="nav-container">
      <button onClick={() => drop()} className="ddbutton">≡</button>
      <div id="dd" className="ddcontent">
        <a id="homeNav" className="navLink" href="/" alt="Home">Home</a>
        <a id="cartNav" className="navLink" href="/cart" alt="Cart" >🛒</a>
      </div>
    </div>
  )
}

export default Nav