import image from "../assets/p4ac.png";
import Organisation from "./Organisation";
import { Heading } from "@chakra-ui/react";


const HomePage = () => {
  return (
    <>
      <div id="home">
        <div id="homedescription" style={{ width: "400px" }}>
          <Heading as="h1" size="2xl" pb="4">
            Paws for a Cause
          </Heading>
          <Heading as="h3" size="md">
            {" "}
            An <span id="highlighttext">RC4 </span> student led initiative to
            empower meaningiful contributions to animal shelters{" "}
          </Heading>
        </div>

        <img src={image} style={{ width: "400px" }} />
      </div>
      <Organisation />
    </>
  );
};

export default HomePage;
