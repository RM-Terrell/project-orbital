function formIdentifier() {
    var identity = document.getElementsByTagName("form")[0].getAttribute("name");
    return identity;
}
function semToSD() {
    var sem = parseFloat(document.getElementById("semInput").value);
    var nValue = parseFloat(document.getElementById("nValueInput").value);
    var sdResult = Math.round(Math.sqrt(nValue)) * (sem * 100) / 100;
    var resultField = document.getElementById("sdFromSEMResult");
    resultField.value = sdResult.toString();
}
function percentToPercent() {
    var input = parseFloat(document.getElementById("percToPercInput").value);
    var result = 100 - input;
    var resultField = document.getElementById("percToPercResult");
    resultField.value = result.toString();
}
function nToPercent() {
    var givenN = parseFloat(document.getElementById("givenN").value);
    var totalN = parseFloat(document.getElementById("totalN").value);
    var givenNPerc = givenN / totalN * 100;
    var otherPerc = totalN - givenN / totalN * 100;
    var givenPercResultField = document.getElementById("givenPercResult");
    var otherPercResultField = document.getElementById("otherPercResult");
    givenPercResultField.value = givenNPerc.toString();
    otherPercResultField.value = otherPerc.toString();
}
function ciToSD() {
    var upperBound = parseFloat(document.getElementById("ciUpperValue").value);
    var lowerBound = parseFloat(document.getElementById("ciLowerValue").value);
    var nValue = parseFloat(document.getElementById("ciNValue").value);
    var ciValue = parseFloat(document.getElementById("ciSelect").value);
    var sdResultField = document.getElementById("sdResult");
    if (ciValue === 90) {
        ciValue = 1.645;
    }
    else if (ciValue === 95) {
        ciValue = 1.96;
    }
    else if (ciValue === 98) {
        ciValue = 2.33;
    }
    else if (ciValue === 99) {
        ciValue = 2.575;
    }
    var sdResult = ((upperBound - lowerBound) * Math.sqrt(nValue) / (2 * ciValue));
    sdResultField.value = (Math.round(sdResult * 100) / 100).toString();
}
