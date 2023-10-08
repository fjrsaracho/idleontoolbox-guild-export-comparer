import {toast} from "react-toastify";

export default function compare(oldData, currentData) {

    try {
        oldData = JSON.parse(oldData)
        currentData = JSON.parse(currentData)
    } catch (e) {
        console.log("1");
        toast("Error JSON not valid");
        return;
    }

    if (!oldData?.members || !currentData?.members) {
        // toast("Format not valid");
        return;
    }

    const temp = {};
    oldData.members.forEach( value => temp[value.name] = { name: value.name, date: oldData.date, oldValue : value.gpEarned, currentValue: 0, diff: -value.gpEarned  } )

    currentData.members.forEach( value => {
        if (temp?.[value.name]) {
            temp[value.name].currentValue = value.gpEarned;
            temp[value.name].date = currentData.date;
            temp[value.name].diff = value.gpEarned - temp[value.name].oldValue;
        } else {
            temp[value.name] = { name: value.name, date: currentData.date, oldValue : 0, currentValue: value.gpEarned, diff: value.gpEarned }
        }
    });

    let response = Object.values(temp);
    response.sort((a,b) => {
        if (a.diff===b.diff) return 0;
        return a.diff<b.diff ? 1 : -1; })

    return response;
};