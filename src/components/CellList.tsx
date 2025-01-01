import React from 'react';

const LST = [
    {
        name: "Web Dev",
        description: "Description 1"
    },
    {
        name: "Media",
        description: "Description 2"
    },
    {
        name: "Design",
        description: "Description 3"
    }
]
const CellList = () => {
    return (
        <div id = "celllist">
            {LST.map((cell) => {
                return (
                    <div id = "cell">
                        <h2>{cell.name}</h2>
                        <p>{cell.description}</p>
                    </div>
                )
            })}

        </div>
    );
}

export default CellList;
