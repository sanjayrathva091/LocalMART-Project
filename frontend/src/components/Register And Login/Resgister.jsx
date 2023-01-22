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
  Link,
  Select,
  FormErrorIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    fetch("http://localhost:8080/users/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
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
                    placeholder="Select option"
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
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
