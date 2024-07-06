



// The following animation work is from this posting: https://medium.com/@zenab.awada/creating-a-draggable-carousel-using-javascript-a84337110808
function anim() {
  let container = document.querySelectorAll(".orgContainer")
  let buttons = document.querySelectorAll(".btn")

  let pressed = false;
  let startX;
  let x;

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
      if (!pressed) {
        buttons.forEach(button => {
          button.style.pointerEvents = "all"
        })
        return;
      }
      event.preventDefault();

      x = event.offsetX;
      innerContainerLocal.style.left = `${x - startX}px`;
      boundItems();
      buttons.forEach(button => {
        button.style.pointerEvents = "none"
      })
    });
  });
}


export default anim