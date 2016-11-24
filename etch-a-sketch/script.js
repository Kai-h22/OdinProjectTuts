$(document).ready(function() {
	var maxHeight = $("#container").css("width");
	var numBlocks = $(".unit").css("height");
	var gridLimit = parseInt(maxHeight, 10) / parseInt(numBlocks, 10);
    for(var x = 0; x < 12; x++) {
        for(var y = 0; y < 300; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#container');
        }
    }

    $(".unit").mouseover(function(){
    	$(".unit").css("background-color", "yellow");
	});
});