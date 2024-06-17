import React from "react";

// import { Carousel } from "bootstrap";
// import "bootstrap"
/*
  padlocks
  combination locks
  electronic locks

 */

/*
  class special is for denoting which item is the one on sale, should also add some text
  like on-sale or special to the element in question. Reminder, when we add all of these
  to our basket(once implemented), it should qualify for a discount code.
*/



function BSCarousel(carousel) {
  const { id, lockData, indicators, fade, name } = carousel.carousel;

  return (
    <>
      <div>
      <header>{name}</header>
        <div id={id} className={`carousel slide ${ fade ? "carousel-fade": ""}`}>
          {indicators === true ? <div className="carousel-indicators">
            {/* Not sure how to make the indicators clickable to send them. Considering that, I might remove the onhover select thing. */}
            {/* Also, setting a style here. The preset componenet has a preset styling that also has precendence. Maybe I'll revisit and try some things, but this works for now. Just not DRY, is all */}
            <button style={{backgroundColor: "#E38F83", cursor: "default"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button style={{backgroundColor: "#E38F83", cursor: "default"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button style={{backgroundColor: "#E38F83", cursor: "default"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button style={{backgroundColor: "#E38F83", cursor: "default"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button style={{backgroundColor: "#E38F83", cursor: "default"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button style={{backgroundColor: "#E38F83", cursor: "default"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          </div> : null}
          <div className="carousel-inner">
            {lockData.map((item, key) => {
              return (
                <div key={key} className={`carousel-item ${item.active ? "active " : ""}${item.special ? "special " : ""}`}>
                  <img src={item.img} className="d-block w-100" alt={item.alt} />
                </div>
              )
            })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}


export default BSCarousel