import FinderContainer from "./FinderContainer";
import CompareContainer from "./CompareContainer";
import {useState} from "react";

export default function Index() {
    const [ data, setData ] = useState([]);

    return <>
            <FinderContainer setData={setData} />
            <CompareContainer data={data} />
        </>
}