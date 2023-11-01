import { extractGP } from '../../services/spreadsheetDataRetrieveService'

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
    const handleClickButton = async (guild) => {
        const spI = await extractGP(guild);
        setData(spI);
    }

    return <div>
        <div style={style.buttonBox}>
            <button style={style.button} onClick={() => handleClickButton('Zen 1')}>Idlezen 1</button>
            <button style={style.button} onClick={() => handleClickButton('Zen 2')}>Idlezen 2</button>
            <button style={style.button} onClick={() => handleClickButton('Zen 3')}>Idlezen 3</button>
        </div>
    </div>
}

export default FinderContainer;
