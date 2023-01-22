import React from "react";
import { TbCurrencyRupee } from "react-icons/tb";
import { FaRegThumbsUp, FaMobileAlt } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { CgTally } from "react-icons/cg";
import { Flex, Heading } from "@chakra-ui/react";
import { Text, Box, Button, VStack } from "@chakra-ui/react";

const Featured = () => {
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
      dis: "Reach out to more than 4 crore buyers.Sell with LocalMART.",
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
  return (
    <Box
      mt={14}
      borderBottom={10}
      borderStyle={"solid"}
      borderColor={"gray.100"}
    >
      <Text fontSize={"3xl"} fontWeight={700} textAlign={"left"} ml={20} as="u">
        More for You
      </Text>
      <Box
        w="90%"
        m="auto"
        my="40px"
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
    </Box>
  );
};

export default Featured;
