interface CellProps {
    cellname: string;  // Ensure it's always a string
    cellinfo: string;  // Ensure it's always a string
}

const Cell: React.FC<CellProps> = ({ cellname, cellinfo })  => {
    return (
        <div className="cell">
            <h3>{cellname}</h3>
            <p>{cellinfo}</p>
        </div>
    );
}

export default Cell;
