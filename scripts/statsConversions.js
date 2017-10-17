

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

function ci() {
  this.u = parseFloat(document.getElementById("ciUpperValue").value);
  this.l = parseFloat(document.getElementById("ciLowerValue").value);
  this.n = parseFloat(document.getElementById("ciNValue").value);
  this.CIv = parseFloat(document.getElementById("ciSelect").value);

  if (this.CIv == 90) {
    this.CIv = 1.645;
  } else if (this.CIv == 95) {
    this.CIv = 1.96;
  } else if (this.CIv == 98) {
    this.CIv = 2.33;
  } else if (this.CIv == 99) {
    this.CIv = 2.575;
  }

  this.d = ((this.u - this.l) * Math.sqrt(this.n) / (2 * this.CIv));
  document.getElementById("sdResult").value = Math.round(this.d * 100) / 100;
}
