import { Box, Heading, Flex, Text, VStack, Link } from "@chakra-ui/react";

const ContactUsPage = () => {
  return (
    <Box id="about" p={4} as="section">
      <VStack spacing={8} align="center" textAlign="center" w="100%">
        <Heading as="h1" size={{ base: "xl", md: "2xl", lg: "3xl" }}>
          Contact Us
        </Heading>
      </VStack>

      {/* Contact Us Section */}
      <Flex
        justify="center"
        align="center"
        direction="column"
        gap={8}
        w="100%"
        mt={50}
      >
        {/* Email Section */}
        <Box textAlign="center">
          <Heading as="h2" size={{ base: "lg", md: "xl" }} pb={2} color="#2f5eb7">
            Email:
          </Heading>
          <Text fontSize={{ base: "sm", md: "md", lg: "md" }} lineHeight="1.6">
            Reach us at{" "}
            <Link href="mailto:P4AC@gmail.com" color="blue.500">
                P4AC@gmail.com
            </Link>{" "}
            for any inquiries or questions.
          </Text>
        </Box>

        {/* Instagram Section */}
        <Box textAlign="center">
          <Heading as="h2" size={{ base: "lg", md: "xl" }} pb={2} color="#2f5eb7">
            Instagram:
          </Heading>
          <Text fontSize={{ base: "sm", md: "md", lg: "md" }} lineHeight="1.6">
            Follow us and message us directly on Instagram:{" "}
            <Link href="https://www.instagram.com/rc4paws?igsh=MWd4ZHdqZ29taHJheA==" isExternal color="blue.500">
              @rc4paws
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactUsPage;