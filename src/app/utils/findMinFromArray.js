export function findMinFromObject(obj) {
    const initialArray = Object.values(obj);
    const newArr = [];
    for (const arrItem of initialArray) {
        newArr.push(+arrItem.PRICE);
    }
    return Math.min(...newArr);
}
