export function findMinFromObject(obj) {
    const initialArray = Object.values(obj);
    const newArr = [];
    for (const arrItem of initialArray) {
        newArr.push(+arrItem.PRICE);
    }
    const minPrice = Math.min(...newArr);
    const index = newArr.findIndex(i => i === minPrice);
    return { index, minPrice };
}
