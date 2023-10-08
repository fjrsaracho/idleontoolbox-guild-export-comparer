import TableHead from "./TableHead";
import TableRows from "./TableRows";

const style = {
    "table": {
        display: "table",
        width: "100%"
    }
}

function Table({titles, data}) {
    return <table style={style.table}>
        <TableHead titles={titles}></TableHead>

        <tbody>
            <TableRows rows={data}></TableRows>
        </tbody>
    </table>
}

export default Table;
