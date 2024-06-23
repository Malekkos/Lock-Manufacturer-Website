import React from "react"


function LockCard(cardData) {

  const { img, alt } = cardData
  console.log("this is the img:", img)
  console.log("this is the alt:", alt)
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body" id="cardBody">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default LockCard