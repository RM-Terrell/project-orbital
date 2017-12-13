function formIdentifier(): string {
  var identity: string = document.getElementsByTagName("form")[0].getAttribute("name");
  return identity;
}

function semToSD(): void {
  let sem: number =
    parseFloat((<HTMLInputElement>document.getElementById("semInput")).value);
  let nValue: number =
    parseFloat((<HTMLInputElement>document.getElementById("nValueInput")).value);

  let sdResult: number = Math.round(Math.sqrt(nValue)) * (sem * 100) / 100;

  let resultField: HTMLInputElement =
    <HTMLInputElement>document.getElementById("sdFromSEMResult");

  resultField.value = sdResult.toString();
}

function percentToPercent(): void {
  let input: number =
    parseFloat((<HTMLInputElement>document.getElementById("percToPercInput")).value);
  let result: number = 100 - input;

  let resultField: HTMLInputElement =
    <HTMLInputElement>document.getElementById("percToPercResult");

  resultField.value = result.toString();
}

function nToPercent(): void {

  let givenN: number =
    parseFloat((<HTMLInputElement>document.getElementById("givenN")).value);
  let totalN: number =
    parseFloat((<HTMLInputElement>document.getElementById("totalN")).value);

  let givenNPerc: number = givenN / totalN * 100;
  let otherPerc: number = totalN - givenN / totalN * 100;

  let givenPercResultField: HTMLInputElement =
    <HTMLInputElement>document.getElementById("givenPercResult");

  let otherPercResultField: HTMLInputElement =
    <HTMLInputElement>document.getElementById("otherPercResult");

  givenPercResultField.value = givenNPerc.toString();
  otherPercResultField.value = otherPerc.toString();
}


function ciToSD(): void {
  let upperBound: number =
    parseFloat((<HTMLInputElement>document.getElementById("ciUpperValue")).value);
  let lowerBound: number =
    parseFloat((<HTMLInputElement>document.getElementById("ciLowerValue")).value);
  let nValue: number =
    parseFloat((<HTMLInputElement>document.getElementById("ciNValue")).value);
  let ciValue: number =
    parseFloat((<HTMLInputElement>document.getElementById("ciSelect")).value);

  let sdResultField: HTMLInputElement =
    <HTMLInputElement>document.getElementById("sdResult");

  if (ciValue === 90) {
    ciValue = 1.645;
  } else if (ciValue === 95) {
    ciValue = 1.96;
  } else if (ciValue === 98) {
    ciValue = 2.33;
  } else if (ciValue === 99) {
    ciValue = 2.575;
  }

  let sdResult: number = ((upperBound - lowerBound) * Math.sqrt(nValue) / (2 * ciValue));

  sdResultField.value = (Math.round(sdResult * 100) / 100).toString();
}
