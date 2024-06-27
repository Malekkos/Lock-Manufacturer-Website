

const lock = {

  bootstrapCarousel: {
    id: "first",
    name: "Padlocks",
    lockData: [
      {
        active: true,
        img: "../images/Padlock5.jpg",
        alt: "Standard silver lock with keys",
      },
      {
        special: true,
        img: "../images/Padlock6121.jpg",
        alt: "Large lock with black body, ProSeries",
      },
      {
        img: "../images/Padlock6271.jpg",
        alt: "Fully circular lock, silvery",
      },
      {
        img: "../images/PadlockA700.jpg",
        alt: "Dumbell shaped lock, silvery",
      },
      {
        img: "../images/Padlock101.jpg",
        alt: "Thin lock with key, large loop on top",
      },
      {
        img: "../images/Padlock1UP.jpg",
        alt: "Standard silver lock, blue lining on the bottom",
      }
    ],
  },
  //need to change indicator color, kinda invisible
  bootstrapCarouselIndicators: {
    id: "second",
    name: "Combination Locks",
    indicators: true,
    lockData: [
      {
        active: true,
        img: "../images/Combo1500KA.jpg",
        alt: "Standard dial lock, circular",
      },
      {
        img: "../images/Combo1525.jpg",
        alt: "Standard dial lock, circular with a key sticking out the back",
      },
      {
        img: "../images/Combo1630.jpg",
        alt: "Dial lock with a keyhole on the front, deadbolt sticking out the side",
      },
      {
        img: "../images/Combo3670.jpg",
        alt: "3 combination lock, contains a keyhole on the front, deadbolt sticking out the side",
      },
      {
        img: "../images/Combo1174.jpg",
        alt: "Bulkier lock, has 5 combinations on the bottom covered by rubber.",
      },
      {
        special: true,
        img: "../images/Combo1502GRN.jpg",
        alt: "Standard dial lock, green and circular",
      }
    ]
  },

  bootstrapCarouselFade: {
    id: "third",
    name: "Electronic Locks",
    fade: true,
    lockData: [
      {
        active: true,
        img: "../images/Electronic5440EC.jpg",
        alt: "Electronic lock, numbers 0 to 9 for password",
      },
      {
        img: "../images/Electronic4400EC.jpg",
        alt: "Electronic lock, bluetooth",
      },
      {
        img: "../images/Electronic5441EC.jpg",
        alt: "Electronic lock, numbers 0 to 9 for password, no shackle(wall mounted)",
      },
      {
        special: true,
        img: "../images/Electronic6400ENT.jpg",
        alt: "Electronic lock, keypad 0 to 9 for password",
      },
      {
        img: "../images/Electronic6400LJENT.jpg",
        alt: "Electronic lock, keypad 0 to 9 for password, longer shackle",
      },
      {
        img: "../images/ElectronicD1000.png",
        alt: "Electronic lock, keypad 0 to 9, sleeker black finish, deadbolt",
      }
    ]
  },

  originalCarouselBoxSafe: {

    lockData: [
      {
        img: "../images/lockboxBlack.png",
        alt: "Black lockbox, sharp edges, latch unlock, handle",
        title: "LB6600 Blackbird",
        description: "Matte black Lockbox, sharp corners modeling a Blackbird jet. Forces exceeding 7g's not covered",
      },
      {
        img: "../images/LockboxRed.jpg",
        alt: "Red lockbox, round edges, key unlock, handle",
        title: "LB790 Marilyn's Lipstick",
        description: "Glossy and Bossy, this bright red Lockbox has all the fashion of the 1950's star herself",
      },
      {
        img: "../images/LockboxSilverNumbers.jpg",
        alt: "Silver lockbox, in-wall variant, number passcode",
        title: "IW940 Silver Surfer",
        description: "Even Doctor Doom couldn't scratch this in-wall Lockbox! The rest of the building though...",
      },
      {
        img: "../images/SafeBlackTurn.jpg",
        alt: "Black safe, sharp corners, wheel turn unlock",
        title: "S7180 Black Coffee",
        description: "A noir detective staple, this black safe is great for holding criminal records and looking good doing it",
      },
      {
        special: true,
        img: "../images/SafePinkTurn.jpg",
        alt: "Pink safe, sharp corners, double dial unlock",
        title: "S8180 Starpower",
        description: "This Power Puff Girls Exclusive is perfect for hiding all the bill statements from destroing the city!",
      },
      {
        img: "../images/SafeSilverTurn.jpg",
        alt: "Silver safe, sharp corners, single dial unlock",
        title: "S330 Classic",
        description: "Dull, drab, but gets the job done. A reliable safe for the every day man",
      },
    ]
  },

  originalCarouselDoorHardware: {

    lockData: [
      {
        special: true,
        img: "../images/StandardBrass.jpg",
        alt: "Double Sided Brass Lock, Key, Doorknob",
        title: "HW990B",
        description: "Double sided insert lock, Shiny Brass finish, keyed. Great for average home",
      },
      {
        img: "../images/StandardSilver.jpg",
        alt: "Double Sided Silver Lock, Key, Doorknob",
        title: "HW990S",
        description: "Double sided insert lock, fine Silver finish, keyed. Great for average home",
      },
      {
        img: "../images/StandardBlack.jpg",
        alt: "Double Sided Black Lock, Key, Doorknob",
        title: "HW990B",
        description: "Double sided insert lock, Matte Black finish, keyed. Great for average home",
      },
      {
        img: "../images/DeadboltBrass.jpg",
        alt: "Single Side Brass Deadbolt, Key",
        title: "HWB1990B",
        description: "Singled sided insert lock, Brass finish, Deadbolt method, keyed. Great for front door",
      },
      {
        img: "../images/DeadboltSilver.jpg",
        alt: "Single Side Silver Deadbolt, Key",
        title: "HWB1990S",
        description: "Singled sided insert lock, Silver finish, Deadbolt method, keyed. Great for front door",
      },
      {
        img: "../images/DeadboltBlack.jpg",
        alt: "Single Side Black Deadbolt, Key",
        title: "HWB1990B",
        description: "Singled sided insert lock, Black finish, Deadbolt method, keyed. Great for front door",
      },
    ]
  },

  originalCarouselAccessories: {

    lockData: [
      {
        img: "../images/Accessories291.jpg",
        alt: "Pic of flipped open rekeying case, black color with instructions on inner cover",
        title: "291 Rekeying Kit",
        description: "All in one rekeying kit for latch's and receiver locks. Instructions on lid for ease",
      },
      {
        img: "../images/Accessories291BS1.jpg",
        alt: "Pic of flipped open rekeying case, black in color, Door Hardware variant ",
        title: "291DH Rekeying Kit",
        description: "All in one rekeying kit for Door Hardware. Instructions on lid for ease",
      },
      {
        special: true,
        img: "../images/Accessories60.jpg",
        alt: "Pic of padlock eyes for shackle, silver and straight",
        title: "Padlock Eyes, Straight",
        description: "Addon padlock eyes for older equipment, fits 1/2in shackles",
      },
      {
        img: "../images/Accessories60R.jpg",
        alt: "Pic of padlock eyes for shackle, silver and bent 90 degrees",
        title: "Padlock Eyes, Right Angle",
        description: "Addon padlock eyes for older equipment, ideal for gates and shed doors",
      },
      {
        img: "../images/Accessories376.jpg",
        alt: "Pic of thin, iron color universal pin tool. Has a blue handle",
        title: "Universal Pin Tool",
        description: "Keying tool for on-site rekeying, produces custom pin outs in minutes",
      },
      {
        img: "../images/Accessories7130.jpg",
        alt: "Pic of large cabinet storing hundreds of keys",
        title: "Key Cabinet, 730 Keys",
        description: "Heady duty hinged doored cabinet with capacity for 730 keys. Rekeyable.",
      },
    ]
  },
}

export default lock