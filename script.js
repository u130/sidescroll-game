/* global $ */


function jump() {
    
}

$(document).ready(function() {
    $('#jump').mousedown(function() {
        $('#mario').css('bottom', '175px');
        $('#coin').hide();
    });
      
    $("body").keydown(function(event){
        if (event.which === 38) {
            $("#mario").css("bottom", '175px');
        }
             
        if (event.which === 37 || event.which === 65) {
            $("#mario").css("left", $("#mario").offset().left - 40);
        //moves right
        } else if (event.which === 39 || event.which === 68) {
            $("#mario").css("left", $("#mario").offset().left + 40);
        } else if (event.which === 38 || event.which=== 87 ) {
        }

    });
    $("body").keyup(function(event){
        if (event.which === 38 ) {
            $("#mario").css("bottom", '60px');
        }
    });
        
   var count = 1;
   
    $('#jump').mouseup(function() {
      $('#mario').css('bottom', '60px');
      $('#coin').show();
      $('#count').text(count++);
   });
});