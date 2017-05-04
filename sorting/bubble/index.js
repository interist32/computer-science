module.exports = bubbleSort;

function bubbleSort(source) {
    for (let j = 0; j < source.length; j++) {
        for (let i = 0; i < source.length-j; i++) {
            if (source[i] > source[i + 1]) {
                const buf = source[i + 1];
                source[i + 1] = source[i];
                source[i] = buf;
            }
        }
    }
    return source;
}