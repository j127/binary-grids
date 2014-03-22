<!DOCTYPE html>
<html>
<head>
    <title>3x3 Binary Number Matrices / Grids for Memorization</title>
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.4.2/pure-min.css">
<style>
.grid {
    float:left;
    font-family: "Courier New", monospace;
    font-size: 1.2em;
    margin: 9px;
    letter-spacing: 0.5em;
    padding: 3px;
}
body {
    margin: 0 40px 40px 40px;
}
.button-xsmall {
    font-size:70%;
}
.button-small {
    font-size:85%;
}
.answer-input{
    margin-right:7px;
}
.button-success {
    background:rgb(28,184,65);
}
</style>
<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-19857446-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>
</head>
<body>
<div class="pure-g-r">
    <div class="pure-u-1-1">
        <h1>3x3 Binaries</h1>
        <p>All 512 possible 3x3 binary grids, randomized. Also check out our other <a href="/training">memory training tools</a>. <button id="randomizeGrids" class="button-warning pure-button">Randomize Grids</button></p>
        <div id="gridOutput">
            <div id="loader"><img src="images/loader.gif"></div>
        </div>
    </div>
</div>


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
<script src="js/binaryGrids.js"></script>
        <script type="text/javascript">try{ clicky.init(66357052); }catch(err){}</script>
        <noscript><p><img alt="Clicky" width="1" height="1" src="http://in.getclicky.com/66357052ns.gif" /></p></noscript>
</html>
