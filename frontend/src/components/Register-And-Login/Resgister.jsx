import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  FormErrorIcon,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import localmart from "../../assets/localmart.png";

const initState = {
  first_name: "",
  last_name: "",
  age: "",
  gender: "",
  phone: "",
  pincode: "",
  address: "",
  city: "",
  state: "",
  email: "",
  password: "",
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initState);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      let res = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      });

      let resData = await res.json();
      if (res.status >= 400) {
        toast({
          description: resData.message,
          status: "error",
          duration: 1000,
          isClosable: false,
        });
      } else {
        toast({
          description: resData.message,
          status: "success",
          duration: 1000,
          isClosable: false,
        });
        navigate("/login");
      }
    } catch (error) {
      toast({
        description: error.message,
        status: "error",
        duration: 1000,
        isClosable: false,
      });
    }
  };

  const getPincodeData = async (e) => {
    if (e.target.value.length === 6) {
      const resp = await fetch(
        `https://api.postalpincode.in/pincode/${e.target.value}`
      );
      const pinData = await resp.json();
      //   console.log(pinData);

      if (pinData[0].Status === "Success") {
        setFormData({
          ...formData,
          state: pinData[0].PostOffice[0].State,
          city: pinData[0].PostOffice[0].District,
          pincode: e.target.value,
        });
      } else if (pinData[0].Status !== "Success") {
        alert("Enter Correct PinCode");
        setFormData({ ...formData, state: "", city: "", pincode: "" });
      }
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Link to="/">
            <Image src={localmart} width={"100%"} height={"auto"} />
          </Link>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter First Name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter Last Name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="age" isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input
                    type="number"
                    placeholder="Enter Your Age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="gender" isRequired>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    placeholder="Select Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="Phone" isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="number"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="pincode" isRequired>
                  <FormLabel>Pincode / ZIP</FormLabel>
                  <Input
                    type="text"
                    name="pincode"
                    placeholder="Enter Pincode"
                    // value={formData.pincode}
                    onChange={getPincodeData}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="addess" isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                placeholder="Enter Your Address"
                value={formData.address}
                onChange={handleChange}
              />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="city" isRequired isReadOnly>
                  <FormLabel>City</FormLabel>
                  <Input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    value={formData.city}
                    // onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="state" isRequired isReadOnly>
                  <FormLabel>State</FormLabel>
                  <Input
                    type="text"
                    name="state"
                    placeholder="Enter State"
                    value={formData.state}
                    // onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter 8 Digit Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={3} display={"flex"}>
              <Text
                align={"center"}
                display={"flex"}
                justifyContent={"center"}
                gap={"4px"}
                alignItems={"center"}
              >
                Already a user?
                <Link to="/login">
                  <Text color={"#138CF1"} textDecoration={"underline"}>
                    Login
                  </Text>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
