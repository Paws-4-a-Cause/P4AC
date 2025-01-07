import image from "../assets/p4ac.png";
import Organisation from "./Organisation";
const HomePage = () => {
  return (
    <>
    <div id="home">
      <div id="homedescription" style={{ width: "400px" }}>
        <h1> Paws 4 a Cause </h1>
        <h3>
          {" "}
          An <span id="highlighttext">RC4 </span> student led initiative to
          empower meaningiful contributions to animal shelters{" "}
        </h3>
      </div>

      <img src={image} style={{ width: "400px" }} />


    </div>
    <Organisation />
    </>

    
  );
};

export default HomePage;
