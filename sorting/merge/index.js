module.exports = mergeSort;

function mergeSort(source) {
    if (source.length < 2) {
        return source;
    }

    const middle = Math.floor(source.length / 2);
    const left = source.slice(0, middle);
    const right = source.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const resultLength = left.length + right.length;

    let result = [];
    let k = 0,
        i = 0,
        j = 0;

    while (k < resultLength) {
        if (left[i] < right[j]) {
            result[k] = left[i];
            i++;
        } else {
            result[k] = right[j];
            j++;
        }

        if (i === left.length) {
            result = result.concat(right.slice(j));
            break;
        }
        if (j === right.length) {
            result = result.concat(left.slice(i));
            break;
        }

        k++;
    }

    return result;
}

