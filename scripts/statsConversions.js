$(document).keypress(function(e) {
    if(e.which == 13) {
      ci();
    }
});


function perc1() {
  a = document.form1.a.value;
  b = document.form1.b.value;
  document.form1.total1.value = Math.round((b / a) * 100 * 100) / 100;
}

function perc1a() {
  a = document.form1.a.value;
  b = document.form1.b.value;
  document.form1.total2.value = Math.round(((a - b) / a) * 100 * 100) / 100;
}

function perc2() {
  this.c = document.form1.c.value;
  this.d = 100 - this.c;
  document.form1.total3.value = this.d;
}

function se() {
  this.e = document.form2.e.value;
  this.n = document.form2.n.value;
  this.d = Math.sqrt(n) * e;
  document.form2.d.value = Math.round(this.d * 100) / 100;
}

function ci(upperBound, lowerBound, nValue, ciValue) {
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
