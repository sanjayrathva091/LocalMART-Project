import React from "react";
import Featured from "../../components/HomePage/Featured";
import Navbar from "../../components/HomePage/Navbar";
import Poster from "../../components/HomePage/Poster";
import Footer from "../../components/HomePage/Footer";

const Home = () => {
  //   Building Construction Material & Equipment
  const construction = [
    {
      title: "Brick Making Machines",
      d1: "Fly Ash Brick Making Machine",
      d2: "Clay Brick Making Machine",
      d3: "Cement Brick Making Machine",
      src: "https://3.imimg.com/data3/RS/UH/GLADMIN-5385/brick-making-machines-125x125.jpg",
    },
  ];

  return (
    // Featured_Categories
    <div>
      <Featured />
      {/* <Navbar /> */}
      <Poster />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
