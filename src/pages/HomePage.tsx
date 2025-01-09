import Partners from "@/components/Partners";
import image from "../assets/p4ac.png";
import Organisation from "../components/Organisation";
import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Box id="home" p={4} as="section">
        <Flex
          justify="center"
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={8}
          w="100%"
        >
          <Box
            id="homedescription"
            w={{ base: "100%", md: "60%", lg: "40%" }}
            textAlign="left"
          >
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              pb="4"
            >
              Paws for a Cause
            </Heading>
            <Text
              as="h3"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              lineHeight="1.6"
            >
              An{" "}
              <Text
                as="span"
                fontWeight="600"
                color="#009bf591"
                display="inline"
              >
                RC4
              </Text>{" "}
              student-led initiative to empower meaningful contributions to
              animal shelters.
            </Text>
          </Box>

          <Image
            src={image}
            maxW={{ base: "100%", md: "400px" }}
          />
        </Flex>
      </Box>

      <Organisation />
      <Partners />
    </>
  );
};

export default HomePage;
