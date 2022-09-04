"use strict";

const btnExample = document.querySelector(".btn-example");
const btnSolve = document.querySelector(".btn-solve");
const btnReset = document.querySelector(".btn-reset");

const inptCells = document.getElementsByClassName("cell");

const inptBox0 = document.querySelectorAll(".box-0");
const inptBox1 = document.querySelectorAll(".box-1");
const inptBox2 = document.querySelectorAll(".box-2");
const inptBox3 = document.querySelectorAll(".box-3");
const inptBox4 = document.querySelectorAll(".box-4");
const inptBox5 = document.querySelectorAll(".box-5");
const inptBox6 = document.querySelectorAll(".box-6");
const inptBox7 = document.querySelectorAll(".box-7");
const inptBox8 = document.querySelectorAll(".box-8");

const inptRow0 = document.querySelectorAll(".row-0");
const inptRow1 = document.querySelectorAll(".row-1");
const inptRow2 = document.querySelectorAll(".row-2");
const inptRow3 = document.querySelectorAll(".row-3");
const inptRow4 = document.querySelectorAll(".row-4");
const inptRow5 = document.querySelectorAll(".row-5");
const inptRow6 = document.querySelectorAll(".row-6");
const inptRow7 = document.querySelectorAll(".row-7");
const inptRow8 = document.querySelectorAll(".row-8");

const inptCol0 = document.querySelectorAll(".col-0");
const inptCol1 = document.querySelectorAll(".col-1");
const inptCol2 = document.querySelectorAll(".col-2");
const inptCol3 = document.querySelectorAll(".col-3");
const inptCol4 = document.querySelectorAll(".col-4");
const inptCol5 = document.querySelectorAll(".col-5");
const inptCol6 = document.querySelectorAll(".col-6");
const inptCol7 = document.querySelectorAll(".col-7");
const inptCol8 = document.querySelectorAll(".col-8");

const exampleBoard = [
  // row-0
  "5",
  "",
  "2",
  "8",
  "",
  "",
  "",
  "1",
  "",
  // row-1
  "9",
  "7",
  "4",
  "3",
  "",
  "1",
  "",
  "8",
  "",
  // row-2
  "",
  "",
  "",
  "",
  "2",
  "4",
  "",
  "",
  "",
  // row-3
  "6",
  "",
  "",
  "5",
  "",
  "",
  "9",
  "",
  "",
  // row-4
  "",
  "",
  "",
  "",
  "8",
  "",
  "",
  "",
  "",
  // row-5
  "",
  "",
  "8",
  "",
  "",
  "2",
  "",
  "",
  "5",
  // row-6
  "",
  "",
  "",
  "7",
  "3",
  "",
  "",
  "",
  "",
  // row-7
  "",
  "8",
  "",
  "4",
  "",
  "6",
  "7",
  "2",
  "",
  // row-8
  "",
  "4",
  "",
  "",
  "",
  "8",
  "3",
  "",
  "",
];

const exampleBoard1 = [
  //
  "",
  "",
  "",
  "",
  "",
  "",
  "6",
  "8",
  "",
  "",
  "",
  "",
  "",
  "7",
  "3",
  "",
  "",
  "9",
  "3",
  "",
  "9",
  "",
  "",
  "",
  "",
  "4",
  "5",
  //
  "4",
  "9",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "8",
  "",
  "3",
  "",
  "5",
  "",
  "9",
  "",
  "2",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "3",
  "6",
  //
  "9",
  "6",
  "",
  "",
  "",
  "",
  "3",
  "",
  "8",
  "7",
  "",
  "",
  "6",
  "8",
  "",
  "",
  "",
  "",
  "",
  "2",
  "8",
  "",
  "",
  "",
  "",
  "",
  "",
];

const exampleBoard2 = [
  //
  "7",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "4",
  "",
  "1",
  "",
  "",
  "",
  "7",
  "",
  "3",
  "",
  "",
  "",
  "",
  "",
  "1",
  "",
  "",
  //
  "5",
  "3",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "2",
  "",
  "9",
  "6",
  "4",
  "",
  "",
  "",
  "",
  "",
  "6",
  "",
  "9",
  "7",
  "",
  "",
  "8",
  "",
  //
  "",
  "2",
  "",
  "7",
  "",
  "4",
  "",
  "",
  "5",
  "",
  "",
  "",
  "",
  "",
  "8",
  "",
  "",
  "4",
  "",
  "5",
  "4",
  "",
  "6",
  "9",
  "",
  "",
  "1",
];

const cells = [];

for (let colPos = 0; colPos <= 8; colPos++) {
  for (let rowPos = 0; rowPos <= 8; rowPos++) {
    cells.push({
      id: `cell-${rowPos}-${colPos}`,
      value: ``,
      boxId:
        rowPos >= 0 && rowPos <= 2 && colPos >= 0 && colPos <= 2
          ? `box-0`
          : rowPos >= 0 && rowPos <= 2 && colPos >= 3 && colPos <= 5
          ? `box-1`
          : rowPos >= 0 && rowPos <= 2 && colPos >= 6 && colPos <= 8
          ? `box-2`
          : rowPos >= 3 && rowPos <= 5 && colPos >= 0 && colPos <= 2
          ? `box-3`
          : rowPos >= 3 && rowPos <= 5 && colPos >= 3 && colPos <= 5
          ? `box-4`
          : rowPos >= 3 && rowPos <= 5 && colPos >= 6 && colPos <= 8
          ? `box-5`
          : rowPos >= 6 && rowPos <= 8 && colPos >= 0 && colPos <= 2
          ? `box-6`
          : rowPos >= 6 && rowPos <= 8 && colPos >= 3 && colPos <= 5
          ? `box-7`
          : rowPos >= 6 && rowPos <= 8 && colPos >= 6 && colPos <= 8
          ? `box-8`
          : ``,
      rowId: `row-${rowPos}`,
      colId: `col-${colPos}`,
      candidateNumbers: [],
      excludeForCurrentNumber: false,
      bannedNumbers: [],
      moveLoggDepth: 0,
      isMultiple: false,
    });
  }
}

const numbers = "123456789".split("");

const resetAllCells = function (cellsArr) {
  cellsArr.forEach((cell) => {
    cell.value = ``;
    cell.candidateNumbers.splice(0);
    cell.excludeForCurrentNumber = false;
    cell.bannedNumbers.splice(0);
    cell.moveLoggDepth = 0;
    cell.isMultiple = false;
  });
};

const updateUI = function (cellsArr) {
  cellsArr.forEach((cell) => {
    document.getElementById(cell.id).value = cell.value;
  });
};

const isGameFinished = function (cellsArr) {
  if (
    cellsArr.filter((cell) => {
      return cell.value !== ``;
    }).length === cellsArr.length
  ) {
    return true;
  } else {
    return false;
  }
};

const fillBoard = function () {
  for (let i = 0; i < inptCells.length; i++) {
    cells.forEach((cell) => {
      if (cell.id === inptCells[i].id && inptCells[i].value !== ``) {
        cell.value = inptCells[i].value;
        cell.exclude = true;
      }
    });
  }
};

const clearCandidateNumbers = function (cellsArr) {
  cellsArr.forEach((cell) => {
    cell.candidateNumbers.splice(0);
  });
};

const resetCellsForExclusion = function (cellsArr) {
  cellsArr.forEach((cell) => {
    if (cell.value !== ``) {
      cell.excludeForCurrentNumber = true;
    } else {
      cell.excludeForCurrentNumber = false;
    }
  });
};

const excludeBoxes = function (number, cellsArr) {
  for (let boxIndex = 0; boxIndex <= 8; boxIndex++) {
    currentCollection = `box-${boxIndex}`;
    excludeCollection = false;
    cellsArr.forEach((cell) => {
      if (cell.boxId === currentCollection && cell.value === number) {
        excludeCollection = true;
      }
    });
    cells.forEach((cell) => {
      if (cell.boxId === currentCollection && excludeCollection) {
        cell.excludeForCurrentNumber = true;
      }
    });
  }
};

const excludeColumns = function (number, cellsArr) {
  for (let colIndex = 0; colIndex <= 8; colIndex++) {
    currentCollection = `col-${colIndex}`;
    excludeCollection = false;
    cellsArr.forEach((cell) => {
      if (cell.colId === currentCollection && cell.value === number) {
        excludeCollection = true;
      }
    });
    cells.forEach((cell) => {
      if (cell.colId === currentCollection && excludeCollection) {
        cell.excludeForCurrentNumber = true;
      }
    });
  }
};

const excludeRows = function (number, cellsArr) {
  for (let rowIndex = 0; rowIndex <= 8; rowIndex++) {
    currentCollection = `row-${rowIndex}`;
    excludeCollection = false;
    cellsArr.forEach((cell) => {
      if (cell.rowId === currentCollection && cell.value === number) {
        excludeCollection = true;
      }
    });
    cells.forEach((cell) => {
      if (cell.rowId === currentCollection && excludeCollection) {
        cell.excludeForCurrentNumber = true;
      }
    });
  }
};

const addCandidateForCell = function (number, cellsArr) {
  cellsArr.forEach((cell) => {
    if (!cell.excludeForCurrentNumber) {
      cell.candidateNumbers.push(number);
    }
  });
};

const moveLogg = [];
let numbersFilledThisIteration = 0;
let currentCellIndex;
let currentCellId;
let currentCollection;
let currentBoxId;
let excludeCollection = false;
let skipSingles = false;
let moveCounter = 0;
const solveSudoku = () => {
  do {
    updateUI(cells);
    do {
      clearCandidateNumbers(cells);
      const clearOldBannedNumbers = function (cellsArr) {
        cellsArr.forEach((cell) => {
          if (moveLogg.length < cell.moveLoggDepth - 1) {
            cell.bannedNumbers.splice(0);
            cell.isMultiple = false;
            cell.moveLoggDepth = 0;
          }
        });
      };
      clearOldBannedNumbers(cells);
      numbersFilledThisIteration = 0;

      // Reset the exclude property of all cells where the property 'value'
      // is "" and the excludedCollections array.
      numbers.forEach((number) => {
        resetCellsForExclusion(cells);

        // Mark boxes for exclusion for this particular number
        excludeBoxes(number, cells);

        excludeColumns(number, cells);

        excludeRows(number, cells);

        // Add the number as candidate for every cell which is not excluded
        addCandidateForCell(number, cells);
      });

      if (!skipSingles) {
        // Check all numbers in a box and see how many positions they can
        // be put, and enter all numbers which only has 1 position.
        for (let boxIndex = 0; boxIndex <= 8; boxIndex++) {
          currentBoxId = `box-${boxIndex}`;
          numbers.forEach((number) => {
            let candidateNumberCounter = 0;
            // Count occurences of cells which contains current number as
            // a candidate. If only once, the number is the solution.
            cells.forEach((cell) => {
              if (
                cell.boxId === currentBoxId &&
                cell.candidateNumbers.includes(number) &&
                !cell.bannedNumbers.includes(number)
              ) {
                currentCellId = cell.id;
                candidateNumberCounter++;
              }
            });
            if (
              candidateNumberCounter === 1 &&
              numbersFilledThisIteration === 0
            ) {
              cells.forEach((cell) => {
                if (cell.id === currentCellId) {
                  cell.value = number;
                  moveLogg.push({
                    id: cell.id,
                    value: number,
                  });
                  moveCounter++;
                  console.log(
                    `Depth ${moveLogg.length}: New inptBoxes set ${
                      cell.id
                    } to ${cell.value}, excluded numbers${[
                      ...cell.bannedNumbers,
                    ]}`
                  );

                  ++numbersFilledThisIteration;
                  currentCellId = undefined;
                }
              });
            }
          });
        }

        cells.forEach((cell) => {
          if (
            cell.candidateNumbers.length === 1 &&
            !cell.bannedNumbers.includes(cell.candidateNumbers[0]) &&
            numbersFilledThisIteration === 0
          ) {
            cell.value = cell.candidateNumbers[0];
            moveLogg.push({
              id: cell.id,
              value: cell.value,
            });
            moveCounter++;
            console.log(
              `Depth ${moveLogg.length}: cells.ForEach set ${cell.id} to ${
                cell.value
              }, excluded numbers${[...cell.bannedNumbers]}`
            );
            ++numbersFilledThisIteration;
          }
        });
      }
      updateUI(cells);
    } while (numbersFilledThisIteration !== 0 && !isGameFinished(cells));

    // If no single solutions has been found, start looking through
    // everyone with multiple candidates (start looping from 2)

    if (!isGameFinished(cells)) {
      skipSingles = false;
      for (
        let candidateListLength = 2;
        candidateListLength <= 9;
        candidateListLength++
      ) {
        for (const cell of cells) {
          if (
            cell.candidateNumbers.length === candidateListLength &&
            numbersFilledThisIteration === 0
          ) {
            for (const candidate of cell.candidateNumbers) {
              if (!cell.bannedNumbers.includes(candidate)) {
                cell.value = candidate;
                cell.isMultiple = true;
                moveLogg.push({
                  id: cell.id,
                  value: cell.value,
                });
                moveCounter++;
                cell.moveLoggDepth = moveLogg.length;
                console.log(
                  `Depth ${moveLogg.length}: Adding multiple, ${
                    cell.id
                  } with ${candidate}, candid ${[
                    ...cell.candidateNumbers,
                  ]}, excl ${[...cell.bannedNumbers]}`
                );
                ++numbersFilledThisIteration;
                break;
              }
            }
          }
        }
        if (numbersFilledThisIteration > 0) {
          break;
        }
      }
      updateUI(cells);
      // If we are not making any moves, and came is not complete we
      // have come to a stalemate and need to reverse, and stop reversing
      // at the first "multiple choice".

      if (numbersFilledThisIteration === 0) {
        for (let i = moveLogg.length - 1; i >= 0; i--) {
          currentCellIndex = cells.indexOf(
            cells.find((element) => element.id === moveLogg[i].id)
          );
          if (cells[currentCellIndex].isMultiple) {
            cells[currentCellIndex].bannedNumbers.push(moveLogg[i].value);
            console.log(
              `Depth ${moveLogg.length - 1}: Removing multiple, ${
                moveLogg[i].id
              } & ${moveLogg[i].value}, candidates: ${[
                ...cells[currentCellIndex].candidateNumbers,
              ]}, exclu: ${[...cells[currentCellIndex].bannedNumbers]}`
            );
            cells[currentCellIndex].value = ``;
            skipSingles = true;

            moveLogg.pop();
            moveCounter++;

            numbersFilledThisIteration++;
            break;
          } else {
            console.log(
              `Depth ${moveLogg.length - 1}: Removing single, ${
                moveLogg[i].id
              } & ${moveLogg[i].value}, candidates: ${[
                ...cells[currentCellIndex].candidateNumbers,
              ]}, exclu: ${[...cells[currentCellIndex].bannedNumbers]}`
            );
            cells[currentCellIndex].value = ``;
            moveLogg.pop();
            moveCounter++;
          }
        }
      }
    } else {
      break;
    }
  } while (
    !isGameFinished(cells) &&
    numbersFilledThisIteration > 0 &&
    moveLogg.length > 0
  );
  updateUI(cells);
  console.log(`Total moves done (adds and removals): ${moveCounter}`);
};
btnExample.addEventListener("click", function (e) {
  e.preventDefault();
  resetAllCells(cells);
  moveLogg.splice(0);
  cells.forEach((cell, cellIndex) => {
    cell.value = exampleBoard[cellIndex];
  });
  moveCounter = 0;
  updateUI(cells);
});

btnReset.addEventListener("click", function (e) {
  e.preventDefault();
  resetAllCells(cells);
  moveLogg.splice(0);
  moveCounter = 0;
  updateUI(cells);
});

btnSolve.addEventListener("click", function (e) {
  e.preventDefault();
  fillBoard();
  solveSudoku();
});
