
const style = {
        display: "table-cell",
        padding: "12px"
}
function TableRow({row}) {
    return  <><td style={style}>{row.date}</td>
        <td style={style}>{row.name}</td>
        <td style={style}>{row.oldValue}</td>
        <td style={style}>{row.currentValue}</td>
        <td style={style}>{row.diff}</td>
    </>
}

export default TableRow;
