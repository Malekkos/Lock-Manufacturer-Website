import React, { useEffect } from "react";

import LockCard from "./lock-card";

import anim from "../../anim/carousel-org-anim";

/*
  lock box & safe
  door hardware
  Accessories
*/

//THOUGHTS: Idea here is to build a drag carousel, TBD if they all will be drag
// cont.    carousels. I'm thinking that one can be a vanilla carousel, and the
// cont.    other could be a carousel containing cards. Will likely need its own
// cont.    component for the card, because its a large element field.

function OrgCarousel(lockData) {
  const { carousel } = lockData

    //THOUGHTS: I really tried to find a solution aside from using useEffect, but I couldn't. I'm sure its there,
    // cont.    but I just dont understand how to persists the animation between page changes. A simple way to do
    // cont2.   it would be forcing a screen refresh on return from any other page, but thats pretty janky.
    //THOUGHTS 2: Did a little more testing, and it seems that when I simply invoke the imported function anim(or just invoke it irregardless,
    // cont.      no matter where), the container/methods that pull data from the page are actually just returning nothing. Thanks JavaScript!
    // cont2.     Conversely, when I use useEffect/onload(the first instance), the data is present and happy. Why is this happening? Well, it 
    // cont3.     could be that the function itself is not getting exposed to the DOM, and DOM manipulators like useEffect enable that to happen.
    // cont4.     To truly fix this issue and not be forced to use useEffect, Research should be directed at how to actually Expose elements to
    // cont5.     the DOM.
    //THOUGHTS 3: Read the docs on useEffect. Seems like its okay to use with animations because it's effecting the DOM. Cool :)
    useEffect(() => {
      anim()
    }, [])

    return (
    <div className="orgContainer">
      <div className="orgContainerData">
        {
          carousel.map((ele, key) => {
            return (
              <LockCard key={key} img={ele.img} alt={ele.alt} title={ele.title} description={ele.description} />
            )
          })
        }
      </div>
    </div>
  )
}


export default OrgCarousel