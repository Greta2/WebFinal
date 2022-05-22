$(document).ready(function(){
    $("#animateMove").click(function(){
      var div = $("#videoplayer");
      div.animate({height: '270px', opacity: '0.4'}, "slow");
      div.animate({width: '480px', opacity: '0.8'}, "slow");
      div.animate({height: '200px', opacity: '0.4'}, "slow");
      div.animate({width: '200px', opacity: '0.8'}, "slow");
      div.animate({height: '270px', opacity: '0.4'}, "slow");
      div.animate({width: '480px', opacity: '0.8'}, "slow");
    });
  });