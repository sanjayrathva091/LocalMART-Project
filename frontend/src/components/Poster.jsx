import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  HStack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import poster from "../assets/poster.png";
import poster2 from "../assets/poster2.png";
import busy_indiamart_logo from "../assets/busy_indiamart_logo.png";

const Poster = () => {
  return (
    <div>
      {/* poster2 */}
      <Flex justifyContent={"space-between"} m="auto " w="80%" textAlign="left">
        <Box>
          <Box>
            <Image src={busy_indiamart_logo} alt="busy_indiamart_logo" />
          </Box>
          <Text fontSize={"4xl"}>Accounting Software</Text>
          <Text fontSize={"xl"}>
            Trusted by 3,60,000+ Small Businesses across different domains
          </Text>
          <List spacing={3} mt="50px">
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              GST Accounting Software
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              e-Invoice Software
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Inventory Management Software
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              e-Way Billing Software
            </ListItem>
          </List>
        </Box>
        <Box w={"30%"}>
          <Image src={poster2} alt="poster2" />
        </Box>
      </Flex>
      {/* poster1 */}
      <Flex>
        <Box>
          <Image src={poster} alt="app-img" height={"80%"} mx="32" />
        </Box>
        <Box my={"50px"}>
          <Heading textAlign={"left"}>Get IndiaMART App</Heading>
          <Text fontSize="md">
            Search for products/services and connect with verified sellers on
            the go!
          </Text>
          <Flex mt={"40px"}>
            <Box display={"flex"} border={"1px"} borderRadius="base">
              <Text px={1} pt="2">
                +91
              </Text>
              <Input
                border={"none"}
                borderRadius="none"
                placeholder="Enter Mobile Number"
              />
            </Box>
            <Button ml={"2"}>Send me the link</Button>
          </Flex>
          <Text textAlign={"left"}>
            We will send you a link, open it on your phone to download the App
          </Text>
          <HStack mt={"50px"}>
            <Image
              src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"
              alt="playStore"
              w={"150px"}
            />

            <Image
              src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"
              alt="AppleStore"
              w={"150px"}
            />
          </HStack>
        </Box>
      </Flex>
    </div>
  );
};

export default Poster;
