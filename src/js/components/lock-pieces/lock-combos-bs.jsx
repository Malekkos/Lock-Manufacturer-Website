import React from "react";

// import { Carousel } from "bootstrap";
// import "bootstrap"
/*
  padlocks
  combination locks
  electronic locks
  lock box & safe
  door hardware
  Accessories
 */

/*
  class special is for denoting which item is the one on sale, should also add some text
  like on-sale or special to the element in question. Reminder, when we add all of these
  to our basket(once implemented), it should qualify for a discount code.
*/



function BSCarousel(id) {

  const { carousel_id } = id
  console.log(carousel_id)

  return (
    <>
      <div>
        <div id={carousel_id} className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://cdn.masterlock.com/product/orig/MLCOM_PRODUCT_5.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item special">
              <img src="https://cdn.masterlock.com/product/285/MLCOM_PRODUCT_6121.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.masterlock.com/product/285/MLCOM_PRODUCT_6271.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.masterlock.com/product/285/MLCOM_PRODUCT_A700.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.masterlock.com/product/285/MLCOM_PRODUCT_101.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.masterlock.com/product/285/MLCOM_PRODUCT_1UP.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${carousel_id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${carousel_id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}


export default BSCarousel