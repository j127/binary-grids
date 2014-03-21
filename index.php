<html>
<head>
    <title>3x3 Binary Matrices / Grids for Memorization</title>
</head>
<body>
<h1>3x3 Binaries</h1>
<div id="grids"></div>

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
<script>

var grids = [];
// outer loop 512 times
// inner loop 3 times

var curGrid = [];

function createRow() {
    var row = [];
    for (var i = 0; i <= 7; i++) {
        x = convertToBinary(i);

        // Unshift the row
        row.unshift(x);
        console.log(curRow);
    }
}

// Convert to binary
function convertToBinary(num) {
    var num = i.toString(2);
    while (num.length < 3) num = "0" + num;
    console.log(num);
    return num;
}
</script>
</html>