$(document).ready(function() {
  $("#standardCalcBtn").click(function() {
    $("#mainContent").load("./views/standardCalc.html");
  });
  $("#pomodoroBtn").click(function() {
    $("#mainContent").load("./views/pomodoro.html");
  });
  $("#indivDataBtn").click(function() {
    $("#mainContent").load("./views/indivData.html");
  });
  $("#semToSdBTN").click(function() {
    $("#mainContent").load("./views/semToSd.html");
  });
  $("#ciToSdBTN").click(function() {
    $("#mainContent").load("./views/ciToSd.html");
  });
  $("#nToPercBTN").click(function() {
    $("#mainContent").load("./views/nToPerc.html");
  });
  $("#percToPercBTN").click(function() {
    $("#mainContent").load("./views/percToPerc.html");
  });
  $("#semToSdBTN").click(function() {
    $("#mainContent").load("./views/semToSd.html");
  });
  $("#prodRecorder").click(function() {
    $("#mainContent").load("./views/prodRecorder.html");
  });
});

$(document).keypress(function(e) {
  if (e.which == 13) {
    var formName = formIdentifier();
    //alert(formName); //uncomment to test form identification
    switch (formName) {

      case "ciCalc":
        ciToSD();
        break;

      case "percToPerc":
        percentToPercent();
        break;

      case "nToPerc":
        nToPercent();
        break;

      case "semToSd":
        semToSD();
        break;

      case "indivCalcTable":
        calculateMSD();
        break;

      default:
        break;
    }
  }
});

