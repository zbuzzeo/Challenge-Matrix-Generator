function matrixGenerator(rows, columns) {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];

    for (let j = 0; j < columns; j++) {
      const randomNumber = Math.round((Math.random() * 100));

      newRow.push(randomNumber);
      newRow.sort();  // sorts by bitcode, buggy with numbers like 4 and 40, 5 and 50, etc
    }

    matrix.push(newRow);
  }

  // Stretch Goal:
  // const firstIndexes = [];

  // matrix.forEach(row => {
  //   // firstIndexes.push(row[0]);
  // });

  console.log(matrix);
  return matrix;
}

module.exports = matrixGenerator;
