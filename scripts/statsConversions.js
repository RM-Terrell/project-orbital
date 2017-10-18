$(document).keypress(function(e) { //TODO move this logic into appScript//
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
    }
  }
});

function formIdentifier() {
  var identity = document.getElementsByTagName("form")[0].getAttribute("name");
  return identity;
}

function semToSd(sem, nValue) {
  sem = parseFloat(document.getElementById("semInput").value);
  nValue = parseFloat(document.getElementById("nValueInput").value);
  var sdResult = Math.round(Math.sqrt(nValue)) * (sem * 100) / 100;

  document.getElementById("sdFromSEMResult").value = sdResult;
}

function percToPerc(input) {
  input = parseFloat(document.getElementById("percToPercInput").value);
  var result = 100 - input;

  document.getElementById("percToPercResult").value = result;
}

function nToPerc(givenN, totalN){

  givenN = parseFloat(document.getElementById("givenN").value);
  totalN = parseFloat(document.getElementById("totalN").value);

  var givenNPerc = givenN / totalN * 100;
  var otherPerc = totalN - givenN / totalN * 100;

  document.getElementById("givenPercResult").value = givenNPerc;
  document.getElementById("otherPercResult").value = otherPerc;
}


function ciToSd(upperBound, lowerBound, nValue, ciValue) {
  upperBound = parseFloat(document.getElementById("ciUpperValue").value);
  lowerBound = parseFloat(document.getElementById("ciLowerValue").value);
  nValue = parseFloat(document.getElementById("ciNValue").value);
  ciValue = parseFloat(document.getElementById("ciSelect").value);

  var sdResult = 0;

  if (ciValue == 90) {
    ciValue = 1.645;
  } else if (ciValue == 95) {
    ciValue = 1.96;
  } else if (ciValue == 98) {
    ciValue = 2.33;
  } else if (ciValue == 99) {
    ciValue = 2.575;
  }

  sdResult = ((upperBound - lowerBound) * Math.sqrt(nValue) / (2 * ciValue));

  document.getElementById("sdResult").value = Math.round(sdResult * 100) / 100;
}
