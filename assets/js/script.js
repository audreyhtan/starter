$(document).ready(function(event){

// Camera Toggle
  $('.btn.btn-info.camera').click(function(){
    $('.wayne').toggle();
    $(this).text(function(i, text){
      return text === "Camera 1" ? "Camera 2" : "Camera 1";
    });
    $(this).toggleClass('warn');
  });

// Stopwatch
  $(".btn.btn-success.clock").click(function(){
    $(".second-hand").toggleClass('paused');
    $(this).text(function(i, text){
      return text === "Start" ? "Stop" : "Start";
    });
    $(this).toggleClass('btn-success').toggleClass('btn-danger');
  });


// Tooltips
  $('.close').click(function(){
    $(this).parent().fadeOut('slow', function(event){
      $(this).remove();
    })
  })

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

}); //document ready
