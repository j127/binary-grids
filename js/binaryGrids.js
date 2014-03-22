var gridsObject = { grids: [] };

// Holds array of every possible row, indexed rowsArr[0] to rowsArr[7]
rowsArr = createRowsArr();

// TODO: Clean this up
var curIndexToString,
    curIndexSplit,
    curRow,
    curGrid,
    y,
    outerIndex,
    stringifiedOuterIndex,
    outerIndex,
    curGridIndexSplit;

// Loop 512 times, once for each possible grid
// TODO: this won't work because there is no 8 or 9 in binary
for (var i = 0; i < 512; i++) {
    // Clear the current stuff
    curRow = 0;
    curGrid = {};

    // Send i to padToThree function and get back a zero-padded, len-3 string
    outerIndex = padToThree(i);
    curSplitOuterIndex = outerIndex.split('');

    // Inner loop 3 times
    for (var j = 0; j < 3; j++) {
        // Convert back to integer
        y = parseInt(curSplitOuterIndex[j], 10);
        curRow = rowsArr[y];
        rowName = nameTheRow(j);
        curGrid[rowName] = curRow;
    }
    gridsObject.grids.push(curGrid);
}

function nameTheRow(row) {
    var rowName;
    switch(row) {
        case 0:
            rowName = "rowOne";
            break;
        case 1:
            rowName = "rowTwo";
            break;
        case 2:
            rowName = "rowThree";
            break;
    }
    return rowName;
}
function compileTemplate() {
    var source = $("#gridTemplate").html();
    var template = Handlebars.compile(source);
    var context = gridsObject;
    var html = template(context);
    $("#gridOutput").append(html);
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

// Pad a number with zeros to length of 3 and return as string
function padToThree(num) {
    var theNum = num.toString();
    while (theNum.length < 3) theNum = "0" + theNum;
    return theNum;
}

compileTemplate();
