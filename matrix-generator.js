function matrixGenerator(rows, columns) {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];

    for (let j = 0; j < columns; j++) {
      const randomNumber = Math.round((Math.random() * 100));

      newRow.push(randomNumber)
      newRow.sort()
    }
    
    matrix.push(newRow);
  }

  console.log(matrix);
  return matrix;
}

module.exports = matrixGenerator;
