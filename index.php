<html>
<head>
    <title>3x3 Binary Matrices / Grids for Memorization</title>
<style>
.grid {
    float:left;
    font-family: "Courier New", monospace;
    margin: 19px;
    padding: 9px;
}
</style>
</head>
<body>
<h1>3x3 Binaries</h1>
<p>All 512 possibly 3x3 binary grids. Click the button to randomize.</p>
<div id="gridOutput"></div>

<script id="gridTemplate" type="x-handlebars-template">
{{#each grids}}
<div class="grid">
    <div class="rowOne">{{ rowOne }}</div>
    <div class="rowTwo">{{ rowTwo }}</div>
    <div class="rowThree">{{ rowThree }}</div>
    </div>
{{/each}}
</script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.3.0/handlebars.js"></script>
<script src="/js/binaryGrids.js"></script>
</html>
