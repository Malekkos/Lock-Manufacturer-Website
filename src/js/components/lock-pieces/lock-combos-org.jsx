import React from "react";

import LockCard from "./lock-card";
/*
  lock box & safe
  door hardware
  Accessories
*/

//THOUGHTS: Idea here is to build a drag carousel, TBD if they all will be drag
// cont.    carousels. I'm thinking that one can be a vanilla carousel, and the
// cont.    other could be a carousel containing cards. Will likely need its own
// cont.    component for the card, because its a large element field.

function OrgCarousel() {
  // The following animation work is from this posting: https://medium.com/@zenab.awada/creating-a-draggable-carousel-using-javascript-a84337110808



  window.onload = function () {
    let container = document.querySelector(".orgContainer")
    let innerContainer = document.querySelector(".orgContainerData")

    let pressed = false;
    let startX;
    let x;

    let boundItems = () => {
      let outer = container.getBoundingClientRect();
      let inner = innerContainer.getBoundingClientRect();

      if (parseInt(innerContainer.style.left) > 0) {
        innerContainer.style.left = "0px";
      }

      if (inner.right < outer.right) {
        innerContainer.style.left = `-${inner.width - outer.width}px`
      }
    }

    container.addEventListener("mousedown", (event) => {
      pressed = true;
      startX = event.offsetX - innerContainer.offsetLeft;
      container.style.cursor = "grabbing";
    });

    container.addEventListener("mouseenter", () => {
      container.style.cursor = "grab";
    });

    container.addEventListener("mouseup", () => {
      container.style.cursor = "grab";
      pressed = false;
    });

    container.addEventListener("mouseleave", () => {
      pressed = false;
    })

    container.addEventListener("mousemove", (event) => {
      if (!pressed) return;
      event.preventDefault();

      x = event.offsetX;
      innerContainer.style.left = `${x - startX}px`;
      boundItems();
    });
  }

  return (
    <div className="orgContainer">
      <div className="orgContainerData">
        {/* <div className="card">aa</div> */}
        {/* <div className="card">aa</div> */}
        {/* <div className="card">aa</div> */}
        {/* <div className="card">aa</div> */}
        {/* <div className="card">aa</div> */}
        {/* <div className="card">aa</div> */}
        <LockCard cardData="" />
        <LockCard cardData="" />
        <LockCard cardData="" />
        <LockCard cardData="" />
        <LockCard cardData="" />
        <LockCard cardData="" />
      </div>
    </div>
  )
}


export default OrgCarousel