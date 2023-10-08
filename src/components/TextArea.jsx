
const styleDefault = {
    width: "200px",
    height: "200px",
    marginLeft: "30px"
}

function TextArea({id, style, placeholder, value}) {
    return <textarea id={id} style={style ?? styleDefault} placeholder={placeholder} value={value}>
    </textarea>
}

export default TextArea;