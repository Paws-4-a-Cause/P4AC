import { SimpleGrid, Box } from "@chakra-ui/react";
import file from "../../cellinfo.json" with { type: "json" };
import Cell from "./Cell";

const LST = file.cells;

const CellList = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }} // 1 column for small screens, 2 for tablets, 4 for desktops
      spacing={6} 
      p={4}
      id="celllist"
    >
      {LST.map((cell, index) => (
        <Box
        key={index}
        display="flex"
        w="100%"
        h="100%"
      >
        <Cell cellname={cell.cellname} cellinfo={cell.cellinfo} />
      </Box>
      ))}
    </SimpleGrid>
  );
};

export default CellList;
