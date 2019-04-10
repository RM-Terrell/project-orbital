function semToSD() {
    var sem = parseFloat(document.getElementById("semInput").value);
    var nValue = parseFloat(document.getElementById("nValueInput").value);
    var sdResult = Math.round(Math.sqrt(nValue)) * (sem * 100) / 100;
    var resultField = document.getElementById("sdFromSEMResult");
    resultField.value = sdResult.toString();
}