"use strict";

$(document).ready(function () {
  $(".next").on("click", function () {
    Right();
    setTimeout(function() {
      $(".next").prop("disabled", false);
      $(".prev").prop("disabled", false); 
    }, 1000);
    $(".next").prop("disabled", true);
    $(".prev").prop("disabled", true);
    
  });
  $(".prev").on("click", function () {
    Left();
    /*$(".prev").prop("disabled", false);*/
    setTimeout(function() {
      $(".next").prop("disabled", false);
      $(".prev").prop("disabled", false); 
    }, 1000);
    $(".next").prop("disabled", true);
    $(".prev").prop("disabled", true);
    
  });



var Right = function Right() {
  var topSlideWidth = $(".top li:last-child ").width();
  var bottomSlideWidth = $(".bottom li:last-child").width();
  
  $(".top li:last-child").animate({
    width: -topSlideWidth
  }, 300, function () {
    $(".top li:last-child").prependTo(".top .images");
  });

  $(".bottom li:last-child").animate({
    width: -bottomSlideWidth
  }, 300, function () {
    $(".bottom li:last-child").prependTo(".bottom .images");
  });
  $(".top li:last-child ").animate({
    width: topSlideWidth
  }, 300);
  $(".bottom li:last-child").animate({
    width: bottomSlideWidth
  }, 300); 
  /*function () {
    $(".next").prop("disabled", true);
    $(".next").prop("disabled", false);
  }); */
  
};


var Left = function Left() {
  $(".top li:first-child").hide(600, function () {
    $(".top li:first-child").appendTo(".top .images").fadeIn(600);
  });
  $(".bottom li:first-child").hide(600, function () {
    $(".bottom li:first-child").appendTo(".bottom .images").fadeIn(600);
    /* $(".prev").prop("disabled", true);
    $(".prev").prop("disabled", false); */
    
  });
};

});

/*
var btn = this;
    setTimeout(function() {
        btn.disabled =  true; 
    }, 5000);
*/