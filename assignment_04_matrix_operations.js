// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let rowInput = readlineSync.question(`Enter row ${i + 1}: `);
        let row = rowInput.split(' ').map(Number);
        if (row.length !== cols) {
            console.log(`Error: Row must have exactly ${cols} values.`);
            i--; 
        } else {
            matrix.push(row);
        }
    }
    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }   

    return;
}

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transposed = [];
    for (let i = 0; i < cols; i++) {
        let newRow = [];
        for (let j = 0; j < rows; j++) {
            newRow.push(matrix[j][i]);
        }
        transposed.push(newRow);
    }
    return transposed;
}

function addMatrices(matrixA, matrixB) {
    let rows = matrixA.length;
    let cols = matrixA[0].length;
    let sumMatrix = [];
    for (let i = 0; i < rows; i++) {
        let newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        sumMatrix.push(newRow);
    }
    return sumMatrix;
}

function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let rowsB = matrixB.length;
    let colsB = matrixB[0].length;
    let productMatrix = [];

    if (colsA !== rowsB) {
        console.log("Error: Incompatible matrix dimensions");
        return null;
    }

    for (let i = 0; i < rowsA; i++) {
        let newRow = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            newRow.push(sum);
        }
        productMatrix.push(newRow);
    }
    return productMatrix;
}

function main() {
    // Part A: Transpose a Matrix
    console.log("Part A: Transpose a Matrix");
    const rowsA = readlineSync.questionInt('Enter number of rows: ');
    const colsA = readlineSync.questionInt('Enter number of columns: ');
    const matrixA = readMatrix(rowsA, colsA);
    console.log("Original Matrix:");
    printMatrix(matrixA);
    const transposedA = transposeMatrix(matrixA);
    console.log("Transposed Matrix:");
    printMatrix(transposedA);

    // Part B: Add Two Matrices 
    console.log("\nPart B: Add Two Matrices");
    const rowsB = readlineSync.questionInt('Enter number of rows: ');
    const colsB = readlineSync.questionInt('Enter number of columns: ');
    const matrixB = readMatrix(rowsB, colsB);
    console.log("Matrix A:");
    printMatrix(matrixA);
    console.log("Matrix B:");
    printMatrix(matrixB);
    const sumMatrix = addMatrices(matrixA, matrixB);
    console.log("Sum Matrix:");
    printMatrix(sumMatrix);

    // Part C: Multiply Two Matrices
    console.log("\nPart C: Multiply Two Matrices");
    const rowsC = readlineSync.questionInt('Enter number of rows for matrix C: ');
    const colsC = readlineSync.questionInt('Enter number of columns for matrix C: ');
    const matrixC = readMatrix(rowsC, colsC);
    console.log("Matrix C:");
    printMatrix(matrixC);
    const productMatrix = multiplyMatrices(matrixA, matrixC);
    if (productMatrix) {
        console.log("Product Matrix:");
        printMatrix(productMatrix);
    }
}
main();
