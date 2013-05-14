$(document).ready(function(event){

// Camera Toggle
  $('.btn').click(function(){
    $('img').toggle();
    $(this).text(function(i, text){
      return text === "Camera 1" ? "Camera 2" : "Camera 1";
    })
    $(this).toggleClass('warn');
  });


// Tooltips
  $('.close').click(function(){
    $(this).parent().fadeOut('slow', function(event){
      $(this).remove();
    })
  })


}); //document ready
