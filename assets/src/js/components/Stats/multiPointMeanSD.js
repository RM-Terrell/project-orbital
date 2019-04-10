function calculateMSD() {

    //------------------------------- Mean Calculations--------------------------------------//
    var sum = 0;
    var rowCount = $('#InputTable tr').length;
    //iterate through each textboxes and add the values
    $(".PatientV").each(function () {
  
      //add only if the value is number
      if (!isNaN(this.value) && this.value.length != 0) {
        sum += parseFloat(this.value);
      }
  
    });
    var totalMean = sum / (rowCount - 1);
  
    $("#totalMean").val(totalMean.toFixed(2));
  
    //--------------------------------- SD Calculations---------------------------------//
  
    var SqrDiffSum = 0;
  
    $(".PatientV").each(function () {
  
      //add only if the value is number
      if (!isNaN(this.value) && this.value.length != 0) {
        SqrDiffSum += Math.pow((parseFloat(this.value) - totalMean), 2);
      }
  
    });
  
    var totalSD = Math.sqrt(SqrDiffSum / (rowCount - 1));
    $("#totalSD").val(totalSD.toFixed(2));
  }