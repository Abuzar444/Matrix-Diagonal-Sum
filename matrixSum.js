var matrixSum = function (mat) {
    let n = mat.length;
    let sum = 0;
    let i = 0;
    let j = 0;
    while (i < n) {
        sum += mat[i][j];
        i++;
        j++;
    }
    i = 0;
    j = n - 1;
    while (i < n) {
        if (i != j) sum += mat[i][j];
        i++;
        j--
    }
    return sum;
};
console.log(matrixSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))