$(document).ready(function() {
  $("#standardCalcBtn").click(function() {
    $("#mainContent").load("./views/standardCalc.html");
  });
  $("#pomodoroBtn").click(function(){
    $("#mainContent").load("./views/pomodoro.html");
  });
  $("#indivDataBtn").click(function(){
    $("#mainContent").load("./views/indivData.html");
  });
  $("#semToSdBTN").click(function(){
    $("#mainContent").load("./views/semToSd.html");
  });
  $("#ciToSdBTN").click(function(){
    $("#mainContent").load("./views/ciToSd.html");
  });
  $("#nToPercBTN").click(function(){
    $("#mainContent").load("./views/nTOPerc.html");
  });
  $("#percToPercBTN").click(function(){
    $("#mainContent").load("./views/percToPerc.html");
  });
  $("#semToSdBTN").click(function(){
    $("#mainContent").load("./views/semToSd.html");
  });
});
