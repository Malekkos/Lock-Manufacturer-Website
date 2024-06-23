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
    let container = document.querySelectorAll(".orgContainer")
    let innerContainer = document.querySelector(".orgContainerData")

    let pressed = false;
    let startX;
    let x;
    console.log(container)
    

    container.forEach(element => {
      let boundItems = () => {
        let outer = element.getBoundingClientRect();
        let inner = element.firstChild.getBoundingClientRect();
  
        if (parseInt(element.firstChild.style.left) > 0) {
          element.firstChild.style.left = "0px";
        }
  
        if (inner.right < outer.right) {
          element.firstChild.style.left = `-${inner.width - outer.width}px`
        }
      }
      console.log(element.firstChild)
      let innerContainerLocal = element.firstChild
      element.addEventListener("mousedown", (event) => {
        pressed = true;
        startX = event.offsetX - innerContainerLocal.offsetLeft;
        element.style.cursor = "grabbing";
      });
  
      element.addEventListener("mouseenter", () => {
        element.style.cursor = "grab";
      });
  
      element.addEventListener("mouseup", () => {
        element.style.cursor = "grab";
        pressed = false;
      });
  
      element.addEventListener("mouseleave", () => {
        pressed = false;
      })
  
      element.addEventListener("mousemove", (event) => {
        if (!pressed) return;
        event.preventDefault();
  
        x = event.offsetX;
        innerContainerLocal.style.left = `${x - startX}px`;
        boundItems();
      });
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