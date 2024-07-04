import React, { useState } from "react"

import { useParams } from "react-router-dom";

import lock from "../../dummy-data/lock_data";


function Item () {

  const { name } = useParams();
  const [data, setData] = useState(undefined)

  for (const prop in lock) {
    // console.log(prop)
  }

  // console.log("this is the lock: ", lock)
  console.log("this is the name: ", name)
  return(
    <>
    {
      name ? (
        <div>
        </div>
      )
      :
      (
        <p>The page you are looking for couldnt be found. Sorry 😓</p> 
      )
    }
    </>
  )
}


export default Item