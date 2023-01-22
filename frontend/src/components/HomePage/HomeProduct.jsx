import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const HomeProduct = ({ heading, poster, arr }) => {
  console.log(arr);
  return (
    <Box
      mt={14}
      borderBottom={10}
      borderStyle={"solid"}
      borderColor={"gray.100"}
    >
      <Text fontSize={"2xl"} fontWeight={700} textAlign={"left"} ml={20} as="u">
        {heading}
      </Text>
      <Flex
        w={"90%"}
        m="auto"
        gap={5}
        my="10px"
        alignItems={"center"}
        justifyContent="center"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        textAlign="left"
        p={4}
      >
        <Box>
          <Image src={poster} alt="poster" />
        </Box>
        <Box
          display={"grid"}
          gridTemplateRows={"auto"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(3,1fr)",
          }}
          gap={3}
        >
          {arr.map((item) => (
            <Flex border={1} borderStyle={"solid"} borderColor="gray.300" p={2}>
              <Box>
                <Image src={item.src} alt="item-image" maxH={"100%"} />
              </Box>
              <Box
                fontSize={{ base: "2xl", sm: "2xl", md: "xl", lg: "sm" }}
                pl={2}
              >
                <Text fontWeight={900}>{item.title}</Text>
                <Box>
                  <a href="#">{item.d1}</a>
                </Box>
                <Box>
                  <a href="#">{item.d2}</a>
                </Box>
                <Box>
                  <a href="#">{item.d3}</a>
                </Box>
              </Box>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeProduct;
