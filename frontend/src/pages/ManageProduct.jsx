//Bhavik Dholu fw20_0582
import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
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
import { DeleteIcon ,EditIcon } from "@chakra-ui/icons";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   AdminGetProduct,
//   AdminRemoveProduct,
// } from "../Redux/Admin/admin.actions";

function ManageProduct() {
  // const Product_Data = useSelector((store) => store.admin.data);
  const [category, setCategory] = React.useState("mobile");
  // const dispatch = useDispatch();

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDelete =(id)=>{
    // dispatch(AdminRemoveProduct(category,id))
  }
  const handleEdit = (id) =>{
    // dispatch(AdminRemoveProduct(category,id))
  }

  React.useEffect(() => {
    // dispatch(AdminGetProduct(category));
  }, [category]);
  return (
    <Box mt={5}>
      <Heading>Manage Product</Heading>
      <Box
        w="80%"
        margin="auto"
        border="1px solid gray"
        borderRadius={10}
        p={5}
        mt={5}
      >
        <FormControl>
          <FormLabel>Select By Category</FormLabel>
          <Select placeholder="Select category" onChange={handleCategory}>
            <option value={"construction"}>Bulding & Construction</option>
            <option value={"electronics"}>Electronics & Electrical</option>
            <option value={"drug"}>Drugs & Pharma</option>
            <option value={"machinery"}>Industrial Machinery</option>
            <option value={"industrial"}>Industrial Supplies</option>
            <option value={"agriculture"}>Food & Agriculture</option>
          </Select>
        </FormControl>
      </Box>
      <Box color="white" w="80%" margin="auto" mt={10}>
        <Flex gap="20px">
          <Box
            align={"center"}
            justifyContent="space-between"
            bg="blue.900"
            p={3}
            borderRadius="10px"
          >
            <Box alignContent="center">
              <Text>Category :- {category}</Text>
            </Box>
          </Box>
          <Box
            align={"center"}
            justifyContent="space-between"
            p={3}
            bg="blue.900"
            borderRadius="10px"
          >
            <Box>
              <Text>Total Products</Text>
              <Text>
                {/* {Product_Data.length} */}
                10
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box w="80%" margin="auto">
        <TableContainer mt="10px">
          <Table variant="striped" colorScheme="red">
            <TableCaption>Recent Orders</TableCaption>
            <Thead>
              <Tr bg="teal.300">
                <Th>Product ID</Th>
                <Th>Product Name</Th>
                <Th>Edit</Th>
                <Th>Remove</Th>
              </Tr>
            </Thead>
            <Tbody>
            <Tr>
                  <Td>1232325245635yet</Td>
                  <Td>play wood section</Td>
                  <Td>
                    <EditIcon onClick={()=>handleEdit(/*product_id*/)}/>
                  </Td>
                  <Td>
                    <DeleteIcon onClick={()=>handleDelete(/*product_id*/)}/>
                  </Td>
                </Tr>
                <Tr>
                  <Td>879585453424dfv</Td>
                  <Td>demo model 2</Td>
                  <Td>
                    <EditIcon onClick={()=>handleEdit(/*product_id*/)}/>
                  </Td>
                  <Td>
                    <DeleteIcon onClick={()=>handleDelete(/*product_id*/)}/>
                  </Td>
                </Tr>
              {/* {Product_Data?.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.id}</Td>
                  <Td>{product.title}</Td>
                  <Td>
                    <EditIcon onClick={()=>handleEdit(product_id)}/>
                  </Td>
                  <Td>
                    <DeleteIcon onClick={()=>handleDelete(product.id)}/>
                  </Td>
                </Tr>
              ))} */}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default ManageProduct;
