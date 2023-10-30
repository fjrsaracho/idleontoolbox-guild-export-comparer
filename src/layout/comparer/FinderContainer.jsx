import { prepareSpreadsheetData } from '../../services/spreadsheetDataRetrieveService'

const style = {
    "finder": {
        display: "flex",
        flexDirection: "column",
        border: "2px solid var(--color-box-border)",
        backgroundColor: "var(--color-box-background)",
        borderRadius: "15px",
        minHeight: "200px",
        margin: "30px"
    },
    "areaBox": {
        display: "flex",
        flexDirection: "row",
        gap: "1em",
        padding: "1em"
    },
    "textArea": {
        width: "100%",
        height: "10em"
    },
    "buttonBox": {
        display: "flex",
        justifyContent: "center",
        marginBottom: "1em"
    },
    "button": {
        height: "5em",
        width: "80%"
    }
}

function FinderContainer({ setData }) {
    const handleClickButton = async () => {
        const spI = await prepareSpreadsheetData();
        setData(spI);
    }

    return <div>
        <div style={style.buttonBox}>
            <button style={style.button} onClick={handleClickButton}>Get Guildmember GP</button>
        </div>
    </div>
}

export default FinderContainer;
