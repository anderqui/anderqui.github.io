$(document).ready(function(){
    $("#flip").hover(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("h2").click(function(){
      $("#div1").fadeOut(2000);
      $("#div2").fadeOut(8000);
      $("#div3").fadeOut(16000);
    });
  });
