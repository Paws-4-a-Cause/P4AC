import { Box, Flex, Link as ChakraLink, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import image from "../assets/react.svg";

const Navbar = () => {
  return (
    <Box p={4} id="navbar">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <ChakraLink as={RouterLink} to="/P4AC" _hover={{ textDecoration: "none" }}>
          <Image src={image} alt="React Logo" boxSize="40px" />
        </ChakraLink>
        <Flex gap={6} id="navbarcontainer" justify="flex-end" align="center">
          <ChakraLink
            as={RouterLink}
            to="/about"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
            fontSize={["md", "lg", "xl"]}
          >
            About
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/contactus"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
            fontSize={["md", "lg", "xl"]}
          >
            Contact Us
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
