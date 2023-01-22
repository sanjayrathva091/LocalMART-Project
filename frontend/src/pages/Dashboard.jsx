//Bhavik Dholu fw20_0582
import React, { useEffect } from "react";
import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { DownloadIcon, RepeatIcon } from "@chakra-ui/icons";
import { GiTakeMyMoney } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { MdPending } from "react-icons/md";

function Dashboard() {
  
  return (
    <Box mt={10}>
      <Heading>Dashboard</Heading>
      <Divider />
      <Box w="90%" margin="auto" mt={10} color="white">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="15">
          <Flex
            bg="blue.900"
            align={"center"}
            justifyContent="space-between"
            p={5}
            borderRadius="10px"
          >
            <Box>
              <Text>Opening Order</Text>
              <Text>10</Text>
            </Box>
            <Box w="40px" h="40px" p={1}>
              <DownloadIcon boxSize={5} />
            </Box>
          </Flex>
          <Flex
            bg="blue.900"
            align={"center"}
            justifyContent="space-between"
            p={5}
            borderRadius="10px"
          >
            <Box>
              <Text>Pending Order</Text>
              <Text>10</Text>
            </Box>
            <Box w="40px" h="40px" p={1}>
              <MdPending fontSize={26} />
            </Box>
          </Flex>
          <Flex
            bg="blue.900"
            align={"center"}
            justifyContent="space-between"
            p={5}
            borderRadius="10px"
          >
            <Box>
              <Text>Cancel Order</Text>
              <Text>10</Text>
            </Box>
            <Box w="40px" h="40px" p={1}>
              <ImCancelCircle fontSize={26} />
            </Box>
          </Flex>
          <Flex
            bg="blue.900"
            align={"center"}
            justifyContent="space-between"
            p={5}
            borderRadius="10px"
          >
            <Box>
              <Text>Order In Proccess</Text>
              <Text>10</Text>
            </Box>
            <Box w="40px" h="40px" p={1}>
              <RepeatIcon boxSize={5} />
            </Box>
          </Flex>
          <Flex
            bg="blue.900"
            align={"center"}
            justifyContent="space-between"
            p={5}
            borderRadius="10px"
          >
            <Box>
              <Text>Total Income</Text>
              <Text>₹10,000</Text>
            </Box>
            <Box w="40px" h="40px" p={1}>
              <GiTakeMyMoney fontSize={30} color="white" />
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
      <Box w="90%" margin="auto" mt={50} textAlign="left">
        <Heading as="h3" size="lg">
          Recent Orders
        </Heading>
        <Divider />
        <TableContainer mt="10px">
          <Table variant="striped" colorScheme="red">
            <TableCaption>Recent Orders</TableCaption>
            <Thead>
              <Tr bg="teal.300">
                <Th>Order ID</Th>
                <Th>Order Date</Th>
                <Th>Delivery Date</Th>
                <Th>Status</Th>
                <Th>Total</Th>
                <Th>Payment Type</Th>
              </Tr>
            </Thead>
            <Tbody>
                <Tr>
                  <Td>231</Td>
                  <Td>23/01/2023</Td>
                  <Td>pening</Td>
                  <Td>
                    {/* {
                      'pending' === "pending"?<Badge colorScheme="orange">pending</Badge>:order.status === "cancel"?<Badge colorScheme="red">cancel</Badge>:order.status === "process"?<Badge colorScheme="blue">In process</Badge>:<Badge colorScheme="green">Delivered</Badge>
                    } */}
                    <Badge colorScheme="orange">pending</Badge>
                  </Td>
                  <Td>2000</Td>
                  <Td>Cash</Td>
                </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Dashboard;

