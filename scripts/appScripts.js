$(document).ready(function() {
  $("#standardCalcBtn").click(function() {
    $("#mainContent").load("./views/standardCalc.html");
  });
  $("#pomodoroBtn").click(function(){
    $("#mainContent").load("./views/pomodoro.html");
  });
});
