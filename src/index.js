
// You should implement your task here.

module.exports = 
function towelSort (matrix) {
  // if (!matrix) return [];
  return matrix ? matrix.reduce((acc, curr, ind) => {
    return ind % 2 == 0 ? acc.concat(curr) : acc.concat(curr.reverse());
  }, []) : [];
}

// matrix = [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ],
//  ]
 
// console.log(towelSort(matrix));
// // should retrun [1, 2, 3, 6, 5, 4, 7, 8, 9 ]