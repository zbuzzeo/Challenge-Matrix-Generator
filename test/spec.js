const matrixGenerator = require( '../matrix-generator.js' );
const chai = require( 'chai' );
const should = chai.should();

describe('Matrix Generator', function() {
  it('should return an array', function() {
    const matrix = matrixGenerator(4, 4);
    matrix.should.be.a('array');
  });

  it('should have the right number of rows and columns', function() {
    const matrix = matrixGenerator(4, 4);
    matrix.should.have.length(4);

    matrix.forEach((row) => {
      row.should.have.length(4);
    });
  });

  it('should have each nested array sorted', function() {
    const matrix = matrixGenerator(4, 4);

    matrix.forEach((row) => {
      const temp = [].concat(row);
      temp.sort((a, b) => { return a - b; });
      temp.should.deep.equal(row);
    });
  });
});


// STRECTH GOAL: Re-sort the arrays based on the first index
describe('Stretch Goals', function() {
  it('should have the nested arrays sorted by first index', function() {
    const matrix = matrixGenerator(5, 5);

    const firstIndexes = [];
    matrix.forEach((row) => {
      firstIndexes.push(row[0]);
    });

    const sortedFirstIndex = [].concat(firstIndexes);
    sortedFirstIndex.sort((a, b) => { return a - b; });
    sortedFirstIndex.should.deep.equal(firstIndexes);
  });
});
