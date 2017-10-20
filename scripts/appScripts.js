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
});

$(document).keypress(function(e) {
  if (e.which == 13) {
    var formName = formIdentifier();
    //alert(formName); //uncomment to test form identification
    switch (formName) {

      case "ciCalc":
        ciToSd();
        break;

      case "percToPerc":
        percToPerc();
        break;

      case "nToPerc":
        nToPerc();
        break;

      case "semToSd":
        semToSd();
        break;
      default:
        break;
    }
  }
});
