import Partners from "@/components/Partners"
import image from "../assets/p4ac.png"
import Organisation from "../components/Organisation"
import OrganizationsCarousel from "@/components/OrganizationsCarousel"
import { Box, Heading, Flex, Image, Text, Button, Divider } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { Link } from "@chakra-ui/react"

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
            <Heading as="h1" size={{ base: "xl", md: "2xl", lg: "3xl" }} pb="4">
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
            <Box mt={4}>
              <Link as={RouterLink} to="/events">
                <Button
                  colorScheme="blue"
                  size="md"
                >
                  View Events
                </Button>
              </Link>
            </Box>
          </Box>

          <Image src={image} maxW={{ base: "100%", md: "300px" }} />
        </Flex>
      </Box>

      <Organisation />
      
      <Divider my={10} />
      
      {/* Partner Organizations Carousel */}
      <Box py={8}>
        <OrganizationsCarousel />
      </Box>
      
      <Divider my={10} />
      
      <Partners />
    </>
  );
}

export default HomePage