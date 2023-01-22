import React from "react";
import Featured from "../../components/HomePage/Featured";
import Poster from "../../components/HomePage/Poster";
import HomeProduct from "../../components/HomePage/HomeProduct";
import img1 from "../../assets/building-construction.jpg";
import img2 from "../../assets/electronics-electrical-goods.jpg";
import img3 from "../../assets/bigBn06.jpg";
import {
  construction,
  Electronics,
  pharma,
} from "../../components/HomePage/Data";
import Navbar from "../../components/HomePage/Navbar";

const Home = () => {
  return (
    // Featured_Categories
    <div>
      <Navbar />
      <HomeProduct
        heading="Building Construction Material & Equipment"
        poster={img1}
        arr={construction}
      />
      <HomeProduct
        heading="Electronics & Electrical Goods & Supplies"
        poster={img2}
        arr={Electronics}
      />
      <HomeProduct
        heading="Pharmaceutical Drug, Medicine, Medical Care & Consultation"
        poster={img3}
        arr={pharma}
      />
      <Featured />
      {/* <Navbar /> */}
      <Poster />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
