$(document).ready(function() {
	var maxHeight = $("#container").css("width");
	var numBlocks = $(".unit").css("height");
	var gridLimit = parseInt(maxHeight, 10) / parseInt(numBlocks, 10);
	var idNum = 0;
    for(var x = 0; x < 12; x++) {
        for(var y = 0; y < 300; y++) {
            var unit = $("<div class='unit'id='"+ idNum.toString()+"' style='background-color:black'></div>");
            unit.appendTo('#container');
            idNum+= 1;

        }
    }

    $(".unit").mouseover(function(){
    	$(this).css("background-color", "red");
    	/*$(this.id).addClass(".color");*/
    	
	});
});