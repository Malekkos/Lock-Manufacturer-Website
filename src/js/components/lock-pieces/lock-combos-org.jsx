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

function OrgCarousel(lockData) {
  // console.log(carousel.carousel)
  // The following animation work is from this posting: https://medium.com/@zenab.awada/creating-a-draggable-carousel-using-javascript-a84337110808
  const { carousel } = lockData
  // console.log(carousel)

  window.onload = function () {
    let container = document.querySelectorAll(".orgContainer")
    let buttons = document.querySelectorAll(".btn")
    
    let pressed = false;
    let startX;
    let x;

    console.log(buttons)
    container.forEach(element => {
      let innerContainerLocal = element.firstChild

      let boundItems = () => {
        let outer = element.getBoundingClientRect();
        let inner = innerContainerLocal.getBoundingClientRect();

        if (parseInt(innerContainerLocal.style.left) > 0) {
          innerContainerLocal.style.left = "0px";
        }

        if (inner.right < outer.right) {
          innerContainerLocal.style.left = `-${inner.width - outer.width}px`
        }
      }

      element.addEventListener("mousedown", (event) => {
        pressed = true;
        startX = event.offsetX - innerContainerLocal.offsetLeft;
        element.style.cursor = "grabbing";
        buttons.forEach(button => {
          button.style.opacity = 0
        })
      });

      element.addEventListener("mouseenter", () => {
        element.style.cursor = "grab";
      });

      element.addEventListener("mouseup", () => {
        element.style.cursor = "grab";
        pressed = false;
        buttons.forEach(button => {
          button.style.opacity = 1
        })
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
        {
          carousel.map((ele, key) => {
            return (
              <LockCard key={key} img={ele.img} alt={ele.alt} title={ele.title} description={ele.description}/>
            )
          })
        }
      </div>
    </div>
  )
}


export default OrgCarousel