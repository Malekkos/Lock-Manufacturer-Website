import React from "react"

import OrgCarousel from "./lock-combos-org"
import BSCarousel from "./lock-combos-bs"


function Body() {

  return (
    <>
      <div id="lock-body">
        <BSCarousel carousel_id={1} />
        <BSCarousel carousel_id={2} />
        <BSCarousel carousel_id={3} />
        <OrgCarousel />
        <OrgCarousel />
        <OrgCarousel />
      </div>
    </>
  )
}

export default Body