
// You should implement your task here.

module.exports = 
function towelSort (matrix) {
  return matrix.reduce((acc, curr) => acc.concat(curr), []);
}

// matrix = [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ],
//  ]
 
// console.log(towelSort(matrix));
// should retrun [1, 2, 3, 6, 5, 4, 7, 8, 9 ]