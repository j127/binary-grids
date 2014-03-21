// The array of all 512 grids
var grids = [];

// Holds array of every possible row, indexed rowsArr[0] to rowsArr[7]
rowsArr = createRowsArr();

// Loop 512 times, once for each possible grid
for (var i = 0; i < 512; i++) {
    var curIndexToString = i.toString(),
        curIndexSplit = [],
        curRow = 0,
        curGrid = [];

    curIndexToString = padToThree(curIndexToString);
    console.log(curIndexToString);
    curIndexSplit = curIndexToString.split('');

    // Inner loop 3 times
    for (var j = 0; j < 3; j++) {
        curRow = parseInt(curIndexSplit[j], 2);
    }
    grids.push(curGrid);
}

// Create an array of all possible rows 000-111
function createRowsArr() {
    var rows = [],
        row;

    for (var i = 0; i <= 7; i++) {
        row = convertToBinary(i);
        rows.push(row);
    }
    return rows;
}

// Convert to 3-digit binary
function convertToBinary(digit) {
    var num = digit.toString(2);
    return padToThree(num);
}

// Pad to length of 3
function padToThree(num) {
    while (num.length < 3) num = "0" + num;
    return num;
}
