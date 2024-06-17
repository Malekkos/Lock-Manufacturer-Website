import React from "react";

import LockCard from "./lock-card";
/*
  lock box & safe
  door hardware
  Accessories
*/

//THOUGHTS: Idea here is to build a drag carousel, TBD if they all will be drag
// cont.    carousels. I'm thinking that one can be a vanilla carousel, and the
// cont.    other could be a carousel containing cards. Will likely need its own
// cont.    component for the card, because its a large element field.

function OrgCarousel() {
  return (
    <div className="orgContainer">
      <div className="orgContainerData">
        <LockCard data="" />
        <LockCard data="" />
        <LockCard data="" />
        <LockCard data="" />
        <LockCard data="" />
        <LockCard data="" />
      </div>
    </div>
  )
}


export default OrgCarousel