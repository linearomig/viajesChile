$(function(){
    // Smooth Scrolling a los links
    $("a").click(function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      } 
    });

    //Añadir tooltip con nombre de las RRSS en los íconos
    $('[data-toggle="tooltip"]').tooltip()

});

