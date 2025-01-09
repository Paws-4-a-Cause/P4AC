import file from "../../cellinfo.json" with { type: "json" }
import Cell from "./Cell";
const LST = file.cells;

const CellList = () => {
    return (
        <div id = "celllist">
            {LST.map((cell, index) => {
                return (
                    <Cell 
                    key = {index}
                    cellname = {cell.cellname}
                    cellinfo = {cell.cellinfo}
                    />
                )
            })}

        </div>
    );
}

export default CellList;
