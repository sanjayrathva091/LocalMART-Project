import React from "react";
import { TbCurrencyRupee } from "react-icons/tb";
import { FaRegThumbsUp, FaMobileAlt } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { CgTally } from "react-icons/cg";
import { Flex, Heading } from "@chakra-ui/react";
import { Text, Box, Button, VStack } from "@chakra-ui/react";

const Home = () => {
  const Featured_Categories = [
    {
      icon: FaRegThumbsUp,
      title: "Connect with verified sellers",
      dis: "Tell us your requirement & let our experts find verified sellers for you",
      btn: "Get Verified Sellers",
    },
    {
      icon: TbCurrencyRupee,
      title: "Pay with IndiaMART",
      dis: "Protect your payments for FREE. Pay sellers online via multiple options",
      btn: "Know More",
    },
    {
      icon: BsShop,
      title: "Sell on LocalMART",
      dis: "Reach out to more than 4 crore buyers.Sell with us.",
      btn: "Start Selling",
    },
    {
      icon: FaMobileAlt,
      title: "Download our App",
      dis: "Get instant notifications on the go. Download our App Now",
      btn: "Download Now",
    },
    {
      icon: CgTally,
      title: "Tally on Mobile",
      dis: "With Live Keeping, SME’s can now connect their Tally offline data to mobile app",
      btn: "Know More",
    },
  ];

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
      Home
      <Heading>More for you</Heading>
      <Box
        w="90%"
        m="auto"
        mt="40px"
        display={"grid"}
        gridTemplateRows={"auto"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(5,1fr)",
        }}
        gap={6}
        justifyContent={"center"}
      >
        {Featured_Categories.map((e) => (
          <VStack>
            <e.icon fontSize={"3rem"} m="auto" />
            <Text fontWeight="700">{e.title}</Text>
            <Text mb="20px">{e.dis}</Text>
            <Box
              _hover={{ bg: "purple", color: "white" }}
              px={8}
              py={2}
              border={"1px"}
              borderRadius="20px"
              fontWeight={"500"}
            >
              {e.btn}
            </Box>
          </VStack>
        ))}
      </Box>
    </div>
  );
};

export default Home;
