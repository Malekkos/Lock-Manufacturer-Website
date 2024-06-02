import React from "react"

import OrgCarousel from "./lock-combos-org"
import BSCarousel from "./lock-combos-bs"


function Body() {

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