import React from "react"
import { useNavigate } from "react-router-dom"


function LockCard(cardData) {

  const { img, alt, title, description } = cardData

  const navigate = useNavigate();

  const onClick = (event) => {
    navigate(`/items/${event.target.id}`)
  }

  // console.log(img)

  let urlPath = img.slice(10, -4)

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body" id="cardBody">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a onClick={(event) => (onClick(event))} id={urlPath} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default LockCard