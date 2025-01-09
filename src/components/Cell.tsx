import { Card, CardBody, CardHeader, Heading} from "@chakra-ui/react"

interface CellProps {
    cellname: string;  // Ensure it's always a string
    cellinfo: string;  // Ensure it's always a string
}

const Cell: React.FC<CellProps> = ({ cellname, cellinfo })  => {
    return (
        <Card
        width="100%"
        >
            <CardHeader>
                <Heading>{cellname}</Heading>
            </CardHeader>
            <CardBody>
                <p>{cellinfo}</p>
            </CardBody>
        </Card>
    );
}

export default Cell;
