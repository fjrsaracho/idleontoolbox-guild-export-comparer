import Table from "../../components/table/Table";

const titles = ["date","name","old value","current value","diff"];

const style = {
    backgroundColor: "var(--color-box-background)",
    border: "2px solid var(--color-box-border)",
    height: "400px",
    margin: "30px"
}

function CompareContainer({ data }) {
    return  <div style={style}>
        <Table titles={titles} data={data} />
    </div>
}

export default CompareContainer;