function sortArrayByKey(array, key) {
    return array.sort((a, b) => b[key] - a[key]);
}