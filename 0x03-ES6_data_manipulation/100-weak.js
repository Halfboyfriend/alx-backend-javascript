/*eslint-disable */
export const weakMap = new WeakMap();

let count = 1;

export function queryApi(endPoint){
    weakMap.set(endPoint, count);
    count++;
    const qCount = weakMap.get(endPoint);
    if (qCount >= 5) {
        throw new Error('Endpoint load is high.');
    }
}
