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

const Links = [
  { title: "Building & Construction", path: "/" },
  { title: "Electronics & Electrical", path: "/" },
  { title: "Drugs & Pharma", path: "/" },
  { title: "Admin", path: "/admin" },
];

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <div>
      {/* <Box border="1px" fontWeight={700}>
        <Flex alignItems="center" justifyContent={"space-between"} gap={10}>
          <Box>
            <Link to="/">
              <Box w="50%">
                <Image src={logo} alt="logo" px={5} />
              </Box>
            </Link>
          </Box>
          <Box display={"flex"}>
            <Link to="/">Building & Construction</Link>
            <Spacer />
            <Link to="/">Electronics & Electrical</Link>
            <Spacer />
            <Link to="/">Drugs & Pharma</Link>
            <Link to="/">Login</Link>
            <Link to="/admin">Admin</Link>
            <Spacer />
          </Box>
        </Flex>
      </Box> */}

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
                <MenuItem>Name</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
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
    </div>
  );
};

export default Navbar;
