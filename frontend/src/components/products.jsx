

// export const products = [
  
//       id: 1,
//       title: "Rangoon 18 mm Commercial Plywood, For Outdoor",
//       Color: "Brown",
//       img: "https://5.imimg.com/data5/SELLER/Default/2021/12/IE/IU/RJ/48006308/trenz-plywood-250x250.jpg",
//       price: 37,
//       quantity: 1,
//     },
//     {
//         id: 2,
//         title: "9mm Gurjan Elite Waterproof Plywood - IS 710, For Furniture",
//         Color: "Brown Black",
//         img: "https://5.imimg.com/data5/AX/WG/MY-24193950/commercial-plywood-500x500.jpg",
//         price: 47,
//         quantity: 1,
//     },
//     {
//         id: 3,
//         title: "6 mm Modi Guard BWR Grade Gurjan Plywood Board, For Furniture",
//         Color: "Black",
//         img: "https://5.imimg.com/data5/DA/FS/MY-1539605/gurjan-elite-waterproof-plywood-500x500.png",
//         price: 87,
//         quantity: 1,
//     },
    
//   ];


const products = async() => {
  try {
   let res = await fetch('https://dull-lime-drill-veil.cyclic.app/carts')
   return res
  } catch (error) {
    console.log(error);
  }
}



export default products;