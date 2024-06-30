import React from "react";

// ≡≡
function Nav() {

  const drop = () => {
    document.getElementById("dd").classList.toggle("show");
  }

  return (
    <div id="nav-container">
      <button onClick={() => drop()} className="ddbutton">≡</button>
      <div id="dd" className="ddcontent">
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
      </div>
    </div>
  )
}

export default Nav