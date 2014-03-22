<html>
<head>
    <title>3x3 Binary Matrices / Grids for Memorization</title>
</head>
<body>
<h1>3x3 Binaries</h1>
<p>All 512 possibly 3x3 binary grids. Click the button to randomize.</p>
<div id="grids"></div>


<script id="gridTemplate" type="x-handlebars-template">
{{#each grids}}
<div class="">{{ row }}</div>
{{/grids}}
</script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0-alpha.2/handlebars.amd.js"></script>
<script src="/js/binaryGrids.js"></script>
</html>
