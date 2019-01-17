function matrixGenerator(rows, columns) {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const randomNumber = Math.round((Math.random() * 100));
    const newRow = [];

    for (let j = 0; j < columns; j++) {
      newRow.push(randomNumber)
    }
    
    matrix.push(newRow);
  }

  return matrix;
}

module.exports = matrixGenerator;
