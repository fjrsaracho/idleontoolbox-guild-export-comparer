import TableRow from "./TableRow";

const styleBase = {
    display: "table-row"
}



function TableRows({rows}) {

    const defineColor = (diff) => {
        if (diff>3) {
            return {...styleBase, backgroundColor: "var(--color-table-row-background-ok)" }
        }

        if (diff<0) {
            return {...styleBase, backgroundColor: "var(--color-table-row-background-error)" }
        }

        return {...styleBase, backgroundColor: "var(--color-table-row-background)" }
    }
    return <>
        { rows.map((row, index) => {
            return  <tr key={index} style={defineColor(row.diff)}>
                <TableRow row={row}></TableRow>
            </tr>
        } ) }
    </>
}

export default TableRows;
