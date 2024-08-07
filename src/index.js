
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == '' || !matrix) {
    return [];
  } else {
    for (i = 1; i < matrix.length; i = i + 2) {
      matrix[i].reverse();
    };
    let sortMatrix = matrix.join(',').split(',').map(item => Number(item));
    return sortMatrix;
  }
}