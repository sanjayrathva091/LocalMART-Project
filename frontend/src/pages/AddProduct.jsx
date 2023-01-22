//Bhavik Dholu fw20_0582
import React from "react";
import { Box, Heading, Divider, FormControl, Select, FormLabel, Input, Button, } from "@chakra-ui/react";
import {useToast}  from '@chakra-ui/react';
// import {useDispatch} from "react-redux";
// import { AdminAddProduct } from "../Redux/Admin/admin.actions";

const init = {
category : "",
name : "",
brand : "",
condition : "",
color : "",
price : "",
discount_price : "",
image : "",
description : ""
}

function AddProduct() {
  const [detail,setDetail] = React.useState(init);
  // const dispatch = useDispatch();
  const toast = useToast()

  const handleChange = (e)=>{
     const {name,value} = e.target;
     setDetail({...detail,[name]:value});
  }
  const handleAdd = (e)=>{
    e.preventDefault();
    // dispatch(AdminAddProduct(detail.category,detail));
    console.log(detail)
    setDetail(init);
    toast({
      description: "Product Added Successfully",
      status: 'success',
      duration: 2000,
      position: 'top-right',
      isClosable: true,
    })
  }

const {category,name,brand,condition,color,price,discount_price,image,description} = detail;

  return (
    <Box mt={5}>
      <Heading>Add Product</Heading>
      <Divider />
      <Box w='80%' margin='auto' border='1px solid gray' borderRadius={10} p={5} mt={5}>
          <FormControl>
            <FormLabel>Product Name</FormLabel>
            <Input placeholder="Product name" name="name" value={name} onChange={handleChange}/>
            <FormLabel>Brand Name</FormLabel>
            <Input placeholder="Product name" name="brand" value={brand} onChange={handleChange}/>
            <FormLabel>Condition</FormLabel>
            <Select placeholder="Select Condition" name="condition" value={condition} onChange={handleChange}>
            <option value={"very good"}>Very Good</option>
            <option value={"good"}>Good</option>
            <option value={"average"}>Average</option>
            <option value={"below average"}>Below Average</option>
            </Select>
            <FormLabel>Color</FormLabel>
            <Input placeholder="Product name" name="color" value={color} onChange={handleChange}/>
            <FormLabel>Price</FormLabel>
            <Input placeholder="Product Price" name="price" value={price} onChange={handleChange}/>
            <FormLabel>Discount Price</FormLabel>
            <Input placeholder="Product Price" name="discount_price" value={discount_price} onChange={handleChange}/>
            <FormLabel>Category</FormLabel>
            <Select placeholder="Select category" name="category" value={category} onChange={handleChange}>
            <option value={"construction"}>Bulding & Construction</option>
            <option value={"electronics"}>Electronics & Electrical</option>
            <option value={"drug"}>Drugs & Pharma</option>
            <option value={"machinery"}>Industrial Machinery</option>
            <option value={"industrial"}>Industrial Supplies</option>
            <option value={"agriculture"}>Food & Agriculture</option>
            </Select>
            <FormLabel>Image</FormLabel>
            <Input placeholder="Product Image url" name="image" value={image} onChange={handleChange}/>
            <FormLabel>Description</FormLabel>
            <Input placeholder="Product Description" name="description" value={description} onChange={handleChange}/>
          </FormControl>
          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
            onClick={handleAdd}
          >
            Add Product
          </Button>
      </Box>
    </Box>
  );
}

export default AddProduct;