export const changesInPerson = (oldVal, newVal, user) => {
    let result = [];
    let oldData = Object.values(oldVal);
    let newData = Object.values(newVal);
    let keys = Object.keys(oldVal);
    let check = oldData.filter((elem, index) => elem !== newData[index] ? elem : false);
    for (let changeValue of check) {
        const changeIndex = oldData.findIndex(elem => elem === changeValue);
        result.push([keys[changeIndex], user, oldData[changeIndex], newData[changeIndex]]);
    }
    return result;
};