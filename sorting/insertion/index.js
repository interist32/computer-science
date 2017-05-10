module.exports = insertionSort;

function insertionSort(source) {
    for (let i = 1; i < source.length; i++) {
        let j = i;
        while (j > 0 && source[j] < source[j - 1]) {
            const buf = source[j - 1];
            source[j - 1] = source[j];
            source[j] = buf;
            j--;
        }
    }
    return source;
}