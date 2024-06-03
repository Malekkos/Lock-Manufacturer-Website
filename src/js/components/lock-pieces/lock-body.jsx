import React from "react"

import OrgCarousel from "./lock-combos-org"
import BSCarousel from "./lock-combos-bs"


function Body() {
  /*
    Take in the dummy data here, when its created, and then take a specific portion containing the image's and whatnot and pass it down through the components
  */
  return (
    <>
      <div id="lock-body">
        <BSCarousel carousel_id={"first"} />
        <BSCarousel carousel_id={"second"} />
        <BSCarousel carousel_id={"third"} />
        <OrgCarousel />
        <OrgCarousel />
        <OrgCarousel />
      </div>
    </>
  )
}

export default Body