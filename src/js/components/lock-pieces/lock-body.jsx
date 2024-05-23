import React from "react"

import OrgCarousel from "./lock-combos-org"
import BSCarousel from "./lock-combos-bs"


function Body () {

  return (
    <>
      <div id="lock-body">
        <BSCarousel />
        <BSCarousel />
        <BSCarousel />
        <OrgCarousel />
        <OrgCarousel />
        <OrgCarousel />
      </div>
    </>
  )
}

export default Body