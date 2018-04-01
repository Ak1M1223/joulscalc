var feet = 0.3048;
var whichOne = 0;

function kineticEn(yoMomma, howFast) {
    howFast *= feet;
    return ((yoMomma*0.5)*(howFast*howFast))/1000;
}

function lastPermit(index) {
  var chmod = [
    "Full auto dozwolone wszędzie",
    "Single fire dozwolony wszędzie, full auto na zewnątrz",
    "Full auto na zewnątrz, zakaz strzelania w budynku",
    "Ogień pojedynczy na zewnątrz, zakaz strzelania w budynku",
    "ZABRONIONE"
  ]

  return chmod[index];
}

function isPermit(energy) {
  var permits = [];
  var howFat = [
    0.2,
    0.23,
    0.25,
    0.28,
    0.3,
    0.32,
    0.36,
    0.4
  ]
  var howFast = [
    300,
    330,
    350,
    400,
    450,
    500,
    520
  ]
  // var energy = kineticEn(bbBullet, bbSpeed);

  for (var i = 0; i < 8; i++) {
    permits[i] = [];
    for (var j = 0; j < 7; j++) {
      permits[i][j] = kineticEn(howFat[i], howFast[j]);
      // console.log(permits[i][j]);
    }
  }

  if (energy <= permits[1][0]) {
    console.log(permits[1][0]);
    var permitsRnd = permits[1][0];
    whichOne = 0;
    return permitsRnd.toFixed(3);
  }
  if (energy <= permits[1][2]) {
    console.log(permits[1][2]);
    var permitsRnd = permits[1][2];
    whichOne = 1;
    return permitsRnd.toFixed(3);
  }
  if (energy <= permits[5][1]) {
    console.log(permits[5][1]);
    var permitsRnd = permits[5][1];
    whichOne = 2;
    return permitsRnd.toFixed(3);
  }
  if (energy <= permits[6][3]) {
    console.log(permits[6][3]);
    var permitsRnd = permits[6][3];
    whichOne = 3;
    return permitsRnd.toFixed(3);
  } else {
    whichOne = 4;
    return "Are you serious?";
  }

  // for (var i = 0; i < 8; i++) {
  //   for (var j = 0; j < 7; j++) {
  //      if (energy <= permits[i][j]) {
  //        console.log(permits[i][j]);
  //        var permitsRnd = permits[i][j];
  //        return permitsRnd.toFixed(3);
  //      }
  //      // else return "damn, man, are you serious?"
  //   }
  // }

}

function jouleCalc() {
    var bullet = document.getElementById("bullet").value;
    var fps = (document.getElementById("fps").value);

    var jouls = kineticEn(bullet, fps);
    var joulsRnd = jouls.toFixed(3);

    document.getElementById("jouls").innerHTML = "Joule: " + joulsRnd;
    document.getElementById("isPermit").innerHTML = "Następny najniższy próg: " + isPermit(jouls);
  document.getElementById("lastPermit").innerHTML = lastPermit(whichOne);
}
