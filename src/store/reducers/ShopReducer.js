const initState = [
  { id: 1, title: "Profile Website", price: "100$", descr: "Modern profile page only for professional dudes.", pic: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bf1ae880364071.5cdec45433e30.jpg" },
  { id: 2, title: "Online Store", price: "1000$", descr: "Modern SPA(single page application) online store for your business.", pic: "https://cdn.shopify.com/s/files/1/0520/7713/4012/t/2/assets/cannabis-online.svg?v=15719719627841853409" },
  { id: 3, title: "Something", price: "$$$", descr: "If you want something not from this list in my perfomance", pic: "https://cdn.vox-cdn.com/thumbor/4MFDcrXiod0KPHkFsnLWt2epnNE=/0x0:2000x1125/1200x800/filters:focal(840x403:1160x723)/cdn.vox-cdn.com/uploads/chorus_image/image/61723799/NewGlenn_flight.0.jpg" }
]
export default function ShopReducer(state = initState, action) {
  switch (action.type) {
    default:
      return state
  }
}