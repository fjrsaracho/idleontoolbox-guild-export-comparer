
const style = {
    "tableHead": {
        display: "table-header-group",
        backgroundColor: "var(--color-table-head-background)"
    },
    "tableCell": {
        display: "table-cell",
        padding: "12px"
    }
}
function TableHead({ titles }) {
        return <thead style={style.tableHead}>
            <tr>
                { titles.map( value => <td key={value} style={style.tableCell}>{value}</td>) }
            </tr>
        </thead>;
}
export default TableHead;