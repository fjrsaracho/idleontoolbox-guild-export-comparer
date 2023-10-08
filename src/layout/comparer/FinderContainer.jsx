import TextArea from "../../components/TextArea";
import mock from "../../mock";
import compare from "../../services/idleonGuildDataComparer";
import {useEffect} from "react";


const style = {
    "finder" : {
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
        display:"flex",
        justifyContent: "center",
        marginBottom: "1em"
    },
    "button": {
        width: "80%"
    }
}

function FinderContainer({ setData }) {
    useEffect(() => {
        //fillDataAndCompareIfDebug()
    }, []);

    const fillDataAndCompareIfDebug = () => {
        if (process.env.NODE_ENV !== 'development') {
            return;
        }
        document.getElementById("old").value = JSON.stringify(mock.oldData)
        document.getElementById("current").value = JSON.stringify(mock.currentData)

        handleClickButton()
    }

    const handleClickButton = () => {
        let value =  compare(document.getElementById("old").value,
            document.getElementById("current").value);
        if (value) setData(value);
    }

return <div style={style.finder}>
    <div style={style.areaBox}>
        <label htmlFor="old" style={style.label}>Old</label>
        <TextArea placeholder="Insert old data here" style={style.textArea} id="old" />
        <label htmlFor="current">Current</label>
        <TextArea placeholder="Insert current data here" style={style.textArea} id="current" />
    </div>
    <div style={style.buttonBox}>
        <button style={style.button} onClick={handleClickButton}>Compare</button>
    </div>
</div>

}

export default FinderContainer;