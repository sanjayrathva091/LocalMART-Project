import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { BsApple, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillAndroid } from "react-icons/ai";
import { BiMobile } from "react-icons/bi";

const Footer = () => {
  return (
    <Box my={10}>
      <Flex
        textAlign={"center"}
        w={"80%"}
        m="auto"
        my="30px"
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Text
          fontSize={{ base: "5xl", md: "7xl", lg: "3xl" }}
          my={{ base: "20px", md: "20px", lg: "none" }}
          as={"u"}
          color="red.800"
        >
          We are here to help you!
        </Text>
        <Flex gap={"40px"} fontSize={{ base: "2xl", md: "4xl", lg: "md" }}>
          <Flex gap={"5px"} alignItems={"center"}>
            <Text>Go Mobile:</Text>
            <BsApple size={"1.5em"} />
            <AiFillAndroid size={"1.5em"} />
            <BiMobile size={"1.5em"} />
          </Flex>
          <Flex>
            <Flex gap={"5px"} alignItems={"center"}>
              <Text>Follow us on:</Text>
              <BsFacebook color="blue" size={"1.5em"} />
              <BsTwitter color="skyBlue" size={"1.5em"} />
              <BsLinkedin color="blue" size={"1.5em"} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* bottom */}
      <Box
        w={"90%"}
        m="auto"
        display={"grid"}
        gridTemplateRows={"auto"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(5,1fr)",
        }}
        justifyContent={"space-around"}
        textAlign="left"
        fontSize={{ base: "4xl", md: "4xl", lg: "md" }}
      >
        <Box listStyleType="none">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Join Sales</a>
          </li>
          <li>
            <a href="#">Success Stories</a>
          </li>
          <li>
            <a href="#">Press Section</a>
          </li>
          <li>
            <a href="#">Advertise with Us</a>
          </li>
          <li>
            <a href="#">Investor Section</a>
          </li>
        </Box>
        <Box listStyleType="none">
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
          <li>
            <a href="#">Complaints</a>
          </li>
          <li>
            <a href="#">Customer Care</a>
          </li>
          <li>
            <a href="#">Jobs & Careers</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </Box>
        <Box listStyleType="none">
          <li>
            <a href="#">Suppliers Tool Kit</a>
          </li>
          <li>
            <a href="#">Sell on IndiaMART</a>
          </li>
          <li>
            <a href="#">Latest BuyLead</a>
          </li>
          <li>
            <a href="#">Learning Centre</a>
          </li>
          <li>
            <a href="#">Ship With IndiaMART</a>
          </li>
          <li>
            <a href="#">Pay With IndiaMART</a>
          </li>
        </Box>
        <Box listStyleType="none">
          <li>
            <a href="#">Buyers Tool Kit</a>
          </li>
          <li>
            <a href="#">Post Your Requirement</a>
          </li>
          <li>
            <a href="#">Products You Buy</a>
          </li>
          <li>
            <a href="#">Pay With IndiaMART</a>
          </li>
          <li>
            <a href="#">Search Products & Suppliers</a>
          </li>
        </Box>
        <Box listStyleType="none">
          <li>
            <a href="#">Accounting Solutions</a>
          </li>
          <li>
            <a href="#">Accounting Software</a>
          </li>
          <li>
            <a href="#">Tally on Mobile</a>
          </li>
          <li>
            <a href="#">GST e-Invoice</a>
          </li>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
