import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useDisclosure,
  Image,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import logo from "../../assets/localmart.png";
import { useState } from "react";

const Links = [
  { title: "Building & Construction", path: "/" },
  { title: "Electronics & Electrical", path: "/" },
  { title: "Drugs & Pharma", path: "/" },
  { title: "Admin", path: "/admin" },
];

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [refresh, setRefresh] = useState(true);
  // const [email, setEmail] = useState("");
  let tokenData = JSON.parse(localStorage.getItem("localmart")) || false;
  let firstName = tokenData.firstName || null;
  let lastName = tokenData.lastName || null;
  let name = firstName + " " + lastName;
  let email = tokenData.email || null;

  const logout = () => {
    localStorage.clear("localmart");
    setRefresh(!refresh);
  };

  // setEmail(emailID);

  return (
    <Box position={"sticky"} top={0} left={0} zIndex={100} w="100%">
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/">
                <Box w="50%">
                  <Image src={logo} alt="logo" px={5} />
                </Box>
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink to={link.path} key={link}>
                  {link.title}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          {/* end of all links */}
          <Flex alignItems={"center"} gap={10}>
            <Link to="/cart">
              <BsCart4 size={"2rem"} />
            </Link>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"md"}
                  src={"https://bit.ly/broken-link"}
                  bg={"gray.500"}
                />
              </MenuButton>
              {/* it is use for dropdown options */}
              <MenuList>
                <MenuItem>{tokenData ? name : "Name"}</MenuItem>
                <MenuItem>{email ? email : "Email"}</MenuItem>
                <MenuDivider />
                {tokenData ? (
                  <MenuItem onClick={logout}>Logout</MenuItem>
                ) : (
                  <Link to="/login">
                    <MenuItem>Login</MenuItem>
                  </Link>
                )}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink to={link.path} key={link}>
                  {link.title}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Navbar;
