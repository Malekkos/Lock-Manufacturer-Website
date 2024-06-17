import React from "react"

import OrgCarousel from "./lock-combos-org"
import BSCarousel from "./lock-combos-bs"

import lock from "../../../dummy-data/lock_data"

function Body() {
  /*
    Take in the dummy data here, when its created, and then take a specific portion containing the image's and whatnot and pass it down through the components
  */

  return (
    <>
      <div id="lock-body">
        <BSCarousel carousel={lock.bootstrapCarousel} />
        <BSCarousel carousel={lock.bootstrapCarouselIndicators} />
        <BSCarousel carousel={lock.bootstrapCarouselFade} />
        {/* <OrgCarousel /> */}
        <OrgCarousel />
        {/* <OrgCarousel /> */}
      </div>
    </>
  )
}

export default Body