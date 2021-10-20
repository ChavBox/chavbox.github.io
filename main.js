$(document).ready(function() {

  $("#lightTheme").click(lightTheme);
  $("#darkTheme").click(darkTheme);
  $("#box0").click(page0);
  $("#box1").click(page1);
  $("#continue").click(page1);
  $("#college").click(page2);
  $("#box2").click(page2);
  $("#gapYear").click(page3);
  $("#box3").click(page3);
  $("#none").click(none);
  $("#adventureTheme").click(adventureTheme);


  var backgroundCheck = "You've unlocked a new background image. Would you like to apply it now?";

  var numLeft = 15;
  $("#clicks").html(numLeft);

  function none(){
    document.body.style.backgroundImage = "none";
  }

  function adventureTheme(){
    document.body.style.backgroundImage = "url('./images/adventure.jpg')";
  }

  function darkTheme(){
    document.body.style.backgroundColor = "#242021";
    document.body.style.color= "rgba(250, 250, 250, .8)";
    $('.page').css("borderColor", "rgba(250, 250, 250, .8)");
  }

  function lightTheme(){
    document.body.style.backgroundColor = "beige";
    document.body.style.color= "black";
    $('.page').css("borderColor", "black");
}

  function page0(){
    $('.page').hide();
    $('.pageText').hide();
    $('#page0').fadeIn();
    numLeft -= 1;
    $("#clicks").html(numLeft);
  }

  function page1() {
    $('#none').fadeIn();
    $('.page').hide();
    $('.pageText').hide();
    $("#page1").fadeIn();
    $("#box1").fadeIn();
    $("#connect1").fadeIn();
    numLeft -= 1;
    $("#clicks").html(numLeft);
  }

  function page2(){
    $('.page').hide();
    $('.pageText').hide();
    $("#page2").fadeIn();
    $("#box2").fadeIn();
    $("#connect2").fadeIn();
    numLeft -= 1;
    $("#clicks").html(numLeft);
  }

  function page3(){
    $('.page').hide();
    $('.pageText').hide();
    document.body.style.backgroundImage = "url('./images/adventure.jpg')";
    $("#adventureTheme").fadeIn();
    $("#page3").fadeIn();
    $("#box3").fadeIn();
    $("#connect3").fadeIn();
    numLeft -= 1;
    $("#clicks").html(numLeft);
  }

});
