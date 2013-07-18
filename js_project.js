

$(document).ready(function() { 
	// Get the HTML of the ul
var boxRow = $("#grid").html();

// Loop 9 times
for(var i = 0; i < 19; i ++) {
    // Append the ul on each loop
    $("#grid").append(boxRow);
	}
});


$(document).ready(function() { 

     $("#boxes>li").hover(
          function () {
            $(this).css({"background-color":"#7FFF00"});
          }, 
         function () {
           $(this).css({"background-color":"#696969"});
        }
     );

});
 

//Buttons to white
$(document).ready(function(){
    $("#button").click(function(){
        $("#boxes>li").css("background-color", "#ffffff");
    });
});
	

//Buttons back to gray
$(document).ready(function(){
    $("#button2").click(function(){
        $("#boxes>li").css("background-color", "#696969");
    });
});  