
var grids = [];

// outer loop 512 times
for (var i = 0; i < 512; i++) {

    var curGrid = [];

    // inner loop 3 times
    for (var i = 0; i < 3; i++) {

        // create a row three times, unshifting the inner array
        x = createRow();
        
    }
    
}

function createRow() {
    var row = [];
    for (var i = 0; i <= 7; i++) {
        x = convertToBinary(i);

        // Unshift the row
        row.unshift(x);
        console.log(curRow);
    }
}

// Convert to 3-digit binary
function convertToBinary(num) {
    var num = i.toString(2);
    while (num.length < 3) num = "0" + num;
    console.log(num);
    return num;
}
