import { Box, Heading, Flex, Image, Text, VStack, Link, HStack } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import image1 from "../assets/aboutpage_pic1.jpg";
import image2 from "../assets/aboutpage_pic2.jpeg";

const AboutPage = () => {
  return (
    <Box id="about" p={4} as="section">
      <VStack spacing={8} align="center" textAlign="center" w="100%">
        <Heading as="h1" size={{ base: "xl", md: "2xl", lg: "3xl" }}>
          About Us
        </Heading>
      </VStack>

      <Flex
        justify="center"
        align="center"
        direction={{ base: "column", md: "row" }}
        gap={8}
        w="100%"
        mt={8}
      >
        {/* Mission Section */}
        <Box w={{ base: "100%", md: "45%" }} textAlign="left">
          <Heading as="h2" size={{ base: "lg", md: "xl" }} pb={2}>
            Our Mission
          </Heading>
          <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} lineHeight="1.6">
            To provide digital solutions to non-profit organisations.
          </Text>
        </Box>
        <Image src={image1} alt="Our Mission" maxW={{ base: "100%", md: "500px" }} />
      </Flex>

      <Flex
        justify="center"
        align="center"
        direction={{ base: "column-reverse", md: "row" }}
        gap={8}
        w="100%"
        mt={8}
      >
        <Image src={image2} alt="Our Vision" maxW={{ base: "100%", md: "300px" }} />
        
        {/* Vision Section */}
        <Box w={{ base: "100%", md: "45%" }} textAlign="left">
          <Heading as="h2" size={{ base: "lg", md: "xl" }} pb={2}>
            Our Vision
          </Heading>
          <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} lineHeight="1.6">
            To create a world where non-profits can focus on their cause, not their technology.
          </Text>
        </Box>
      </Flex>

      {/* Social Media Links */}
      <VStack spacing={6} mt={10}>
        <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} fontWeight="bold">
          Follow us on
        </Text>
        <HStack spacing={10}>
          <Link href="https://www.instagram.com/rc4paws?igsh=MWd4ZHdqZ29taHJheA==" isExternal>
            <FaInstagram size={50} />
          </Link>
          <Link href="https://www.linkedin.com/company/rc4-paws-4-a-cause/" isExternal>
            <FaLinkedin size={50} />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AboutPage;