function nToPercent() {
    var givenN = parseFloat(document.getElementById("givenN").value);
    var totalN = parseFloat(document.getElementById("totalN").value);
    var givenNPerc = Math.round(1000 * (givenN / totalN * 100)) / 1000;
    var otherPerc = 100 - givenNPerc;
    var givenPercResultField = document.getElementById("givenPercResult");
    var otherPercResultField = document.getElementById("otherPercResult");
    givenPercResultField.value = givenNPerc.toString();
    otherPercResultField.value = otherPerc.toString();
}