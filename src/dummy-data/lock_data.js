

const lock = {

  bootstrapCarousel: {
    id: "first",
    lockData: [
      {
        active: true,
        img: "https://cdn.masterlock.com/product/orig/MLCOM_PRODUCT_5.jpg",
        alt: "Standard silver lock with keys",
      },
      {
        special: true,
        img: "https://cdn.masterlock.com/product/285/MLCOM_PRODUCT_6121.jpg",
        alt: "Large lock with black body, ProSeries",
      },
      {
        img: "https://cdn.masterlock.com/product/285/MLCOM_PRODUCT_6271.jpg",
        alt: "Fully circular lock, silvery",
      },
      {
        img: "https://cdn.masterlock.com/product/285/MLCOM_PRODUCT_A700.jpg",
        alt: "Dumbell shaped lock, silvery",
      },
      {
        img: "https://cdn.masterlock.com/product/285/MLCOM_PRODUCT_101.jpg",
        alt: "Thin lock with key, large loop on top",
      },
      {
        img: "https://cdn.masterlock.com/product/285/MLCOM_PRODUCT_1UP.jpg",
        alt: "Standard silver lock, blue lining on the bottom",
      }
    ],
  },
  //need to change indicator color, kinda invisible
  bootstrapCarouselIndicators: {
    id: "second",
    indicators: true,
    lockData: [
      {
        active: true,
        img: "../images/Combo1500KA.jpg",
        alt: "",
      },
    ]
  },

  bootstrapCarouselFade: {
    id: "third",
    fade: true,

  }

}

export default lock