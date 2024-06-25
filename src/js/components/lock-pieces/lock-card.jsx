import React from "react"


function LockCard(cardData) {

  const { img, alt, title, description } = cardData
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body" id="cardBody">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default LockCard