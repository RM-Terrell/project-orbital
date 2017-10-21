function formIdentifier() {
  var identity = document.getElementsByTagName("form")[0].getAttribute("name");
  return identity;
}

function semToSd() {
  this.sem = parseFloat(document.getElementById("semInput").value);
  this.nValue = parseFloat(document.getElementById("nValueInput").value);
  this.sdResult = Math.round(Math.sqrt(nValue)) * (sem * 100) / 100;

  document.getElementById("sdFromSEMResult").value = sdResult;
}

function percToPerc() {
  this.input = parseFloat(document.getElementById("percToPercInput").value);
  this.result = 100 - input;

  document.getElementById("percToPercResult").value = result;
}

function nToPerc(){

  this.givenN = parseFloat(document.getElementById("givenN").value);
  this.totalN = parseFloat(document.getElementById("totalN").value);

  this.givenNPerc = givenN / totalN * 100;
  this.otherPerc = totalN - givenN / totalN * 100;

  document.getElementById("givenPercResult").value = givenNPerc;
  document.getElementById("otherPercResult").value = otherPerc;
}


function ciToSd() {
  this.upperBound = parseFloat(document.getElementById("ciUpperValue").value);
  this.lowerBound = parseFloat(document.getElementById("ciLowerValue").value);
  this.nValue = parseFloat(document.getElementById("ciNValue").value);
  this.ciValue = parseFloat(document.getElementById("ciSelect").value);

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

  this.sdResult = ((upperBound - lowerBound) * Math.sqrt(nValue) / (2 * ciValue));

  document.getElementById("sdResult").value = Math.round(sdResult * 100) / 100;
}
