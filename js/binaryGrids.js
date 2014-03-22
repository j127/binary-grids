var gridsObject = {};
var grids = [];

// Holds array of every possible row, indexed rowsArr[0] to rowsArr[7]
var rowsArr = createRowsArr();

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
for (var i = 0; i < 512; i++) {
    // Clear the current stuff
    curGrid = {};

    // Convert i to zero-padded, nine-digit binary
    curBinary = padNumber(convertToBinary(i), 9);
    curBinaryInArray = curBinary.match(/.{1,3}/g); // 3-item array of the current binary
    //console.log(curBinaryInArray);

    // Inner loop three times, pop three each time
    for (var j = 0; j < 3; j++) {
        rowName = nameTheRow(j);
        curGrid[rowName] = curBinaryInArray[j];
    }
    grids.push(curGrid);
}
grids = _.shuffle(grids);
gridsObject.grids = grids;

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
function convertToBinary(num) {
    var output = num.toString(2);
    return output;
}

// Pad a number with zeros to length of 3 and return as string
function padNumber(num, padLen) {
    var theNum = num.toString();
    while (theNum.length < padLen) theNum = "0" + theNum;
    return theNum;
}

compileTemplate();
