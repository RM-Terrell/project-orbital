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