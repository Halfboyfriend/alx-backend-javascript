/*eslint-disable */
export default function createInt8TypedArray (length, position, value) {
    if (position < 0 || position >= length){
        throw new Error('Position outside range');
    }

    const buffer = new ArrayBuffer(length);
    const showCase = new Int8Array(buffer);
    showCase[position] = value;
    return new DataView(buffer);
}