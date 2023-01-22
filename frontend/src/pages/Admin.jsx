import { Box, Flex, Hide, Show } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AddProduct from "./AddProduct";
import Dashboard from "./Dashboard";
import ManageOrder from "./ManageOrder";
import ManageProduct from "./ManageProduct";
import ManageUser from "./ManageUser";

function Admin() {
  return (
    <Box>
      <AdminNavbar />
      <Flex>
          <Show above="lg">
        <Box w='22%' h='90.5vh'>
          <AdminSidebar />
        </Box>
          </Show>
        <Box w={{base:'100%',lg:'78%'}} h='90.5vh' overflow={'scroll'}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/manageproduct" element={<ManageProduct />} />
            <Route path="/manageorder" element={<ManageOrder />} />
            <Route path="manageuser" element={<ManageUser />} />
          </Routes>
        </Box>
      </Flex>
    </Box>
  );
}

export default Admin;
