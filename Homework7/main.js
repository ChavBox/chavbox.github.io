<<<<<<< HEAD
var count = 0;

document.getElementById('click').text = buttonClick;


function buttonClick() {

}
=======
$(document).ready(function() {

  var step1 = "To begin, walk the staircase slowly, by intentionally picking up and setting down each foot for every step. Pay attention to how your foot feels coming in contact ground, feel the ground pushing back, holding up the weight of your body.";
  var step2 = "This time, as you walk, focus on your breath. Before you start, take a minute to close your eyes and focus on your breathing. Once you've found your breath, follow it as you walk.";
  var step3 = "To complete this meditation, walk the stairs one last time. This time, try to connect your breathing and your body by taking each step with the natural rise and fall of your breath. Allow your foot come off the ground as you inhale, setting it down as you exhale.";
  var finished = "Congratulations on completing this mindfullness exercise! If it felt difficult, don't be discouraged, mindfullness is something that takes practice."

  //user has not pressed the "next" button
  var count = 0;

  //hide text to only show h1
  document.getElementById('text').style.display = "none";

    $('#next').click(function(){
      
    if(count == 0){
      $('#intro').fadeOut(500);
      setTimeout(function(){
        $('#text').fadeIn(500);
      }, 500);
      count = 1;
    }else if (count == 1) {

        $('#text').fadeOut(500);
        setTimeout(function(){
        document.getElementById('next').textContent = "Next";
        document.getElementById('text').textContent = step1;
        }, 500);
        $('#text').fadeIn(500);
        count = 2;
    }else if (count == 2) {
      $('#text').fadeOut(500);
      setTimeout(function(){
        document.getElementById('text').textContent = step2;
        count = 3;
      }, 500);
      $('#text').fadeIn(500);
    }else if (count == 3) {
      $('#text').fadeOut(500);
      setTimeout(function(){
        document.getElementById('text').textContent = step3;
        count = 4;
      }, 500);
      $('#text').fadeIn(500);
    }else if (count == 4){
      $('#text').fadeOut(500);
      setTimeout(function(){
        document.getElementById('text').textContent = finished;
        document.getElementById('next').textContent = "Restart";
        count = 5;
      }, 500);
      $('#text').fadeIn(500);
    }else if (count == 5){
      location.reload();
      return false;
    }
  });
});
>>>>>>> 01e258602626cc97d5e92d30b40e1a1a7c85c8be
