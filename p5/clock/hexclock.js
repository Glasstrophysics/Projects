function setup() {
  createCanvas(1429, 764);
}

function draw() {
  var tw = 90;
  var th = 53;
  var oy = 0;
  var ox = 0;
  var h = hour()
  var mi = minute()
  var colors = [];
  var array0 = [[22, 0, 200], 30, 200, 100, 0];
  var array1 = [[250, 246, 237], [252, 249, 209], [249, 241, 133],
                [251, 244, 163], [251, 241, 121], [254, 213, 105],
                [253, 230, 113], [254, 217, 108], [248, 156, 87]];
  var array2 = [[251, 244, 163], [251, 241, 121], [254, 213, 105],
                [253, 230, 113], [254, 217, 108], [248, 156, 87],
                [254, 212, 112], [252, 180, 92], [245, 135, 85]];
  var array3 = [[253, 230, 113], [254, 217, 108], [248, 156, 87],
                [254, 212, 112], [252, 180, 92], [245, 135, 85],
                [245, 134, 85], [242, 102, 63], [229, 77, 49]];
  var array4 = [[254, 212, 112], [252, 180, 92], [245, 135, 85],
                [245, 134, 85], [242, 102, 63], [229, 77, 49],
                [243, 114, 77], [230, 82, 50], [216, 71, 46]];
  var array5 = [[245, 134, 85], [242, 102, 63], [229, 77, 49],
                [243, 114, 77], [230, 82, 50], [216, 71, 46],
                [230, 140, 104], [227, 115, 80], [202, 67, 45]];
  var array6 = [[243, 114, 77], [230, 82, 50], [216, 71, 46],
                [230, 140, 104], [227, 115, 80], [202, 67, 45],
                [237, 161, 122], [210, 104, 73], [168, 58, 37]];
  var array7 = [[230, 140, 104], [227, 115, 80], [202, 67, 45],
                [237, 161, 122], [210, 104, 73], [168, 58, 37],
                [202, 137, 104], [173, 75, 55], [147, 47, 36]];
  var array8 = [[237, 161, 122], [210, 104, 73], [168, 58, 37],
                [202, 137, 104], [173, 75, 55], [147, 47, 36],
                [193, 156, 128], [180, 132, 107], [121, 53, 43]];
  var array9 = [[202, 137, 104], [173, 75, 55], [147, 47, 36],
                [193, 156, 128], [180, 132, 107], [121, 53, 43],
                [197, 181, 153], [166, 131, 107], [91, 42, 33]];
  var array10 = [[193, 156, 128], [180, 132, 107], [121, 53, 43],
                [197, 181, 153], [166, 131, 107], [91, 42, 33],
                [209, 167, 136], [195, 183, 168], [86, 66, 57]];
  var array11 = [[197, 181, 153], [166, 131, 107], [91, 42, 33],
                [209, 167, 136], [195, 183, 168], [86, 66, 57],
                [202, 199, 186], [141, 133, 122], [69, 60, 50]];
  var array12 = [[209, 167, 136], [195, 183, 168], [86, 66, 57],
                [202, 199, 186], [141, 133, 122], [69, 60, 50],
                [214, 211, 202], [171, 165, 154], [78, 72, 66]];
  var array12 = [[209, 167, 136], [195, 183, 168], [86, 66, 57],
                [202, 199, 186], [141, 133, 122], [69, 60, 50],
                [214, 211, 202], [171, 165, 154], [78, 72, 66]];

  if (h >= 0 && h < 1) {
    var colors = array12;
  }
  if (h >= 1 && h < 2) {
    var colors = array11;
  }
  if (h >= 2 && h < 3) {
    var colors = array10;
  }
  if (h >= 3 && h < 4) {
    var colors = array9;
  }
  if (h >= 4 && h < 5) {
    var colors = array8;
  }
  if (h >= 5 && h < 6) {
    var colors = array7;
  }
  if (h >= 6 && h < 7) {
    var colors = array6;
  }
  if (h >= 7 && h < 8) {
    var colors = array5;
  }
  if (h >= 8 && h <9) {
    var colors = array4;
  }
  if (h >= 9 && h < 10) {
    var colors = array3;
  }
  if (h >= 10 && h < 11) {
    var colors = array2;
  }
  if (h >= 11 && h < 12) {
    var colors = array1;
  }
  if (h >= 12 && h < 13) {
    var colors = array1;
  }
  if (h >= 13 && h < 14) {
    var colors = array2;
  }
  if (h >= 14 && h < 15) {
    var colors = array3;
  }
  if (h >= 15 && h < 16) {
    var colors = array4;
  }
  if (h >= 16 && h < 17) {
    var colors = array5;
  }
  if (h >= 17 && h < 18) {
    var colors = array6;
  }
  if (h >= 18 && h < 19) {
    var colors = array7;
  }
  if (h >= 19 && h < 20) {
    var colors = array8;
  }
  if (h >= 20 && h < 21) {
    var colors = array9;
  }
  if (h >= 21 && h < 22) {
    var colors = array10;
  }
  if (h >= 22 && h < 23) {
    var colors = array11;
  }
  if (h >= 23 && h < 24) {
    var colors = array12;
  }
if (mi < 60) {
  background(colors[8]);
}
if (mi < 50) {
  background(colors[7]);
}
if (mi < 45) {
  background(colors[6]);
}
if (mi < 40) {
  background(colors[5]);
}
if (mi < 30) {
  background(colors[4]);
}
if (mi < 25) {
  background(colors[3]);
}
if (mi < 20) {
  background(colors[2]);
}
if (mi < 15) {
  background(colors[1]);
}
if (mi < 10) {
  background(colors[0]);
}

frameRate(int(mi / 10 + 1));

  noStroke();


  for (var y = 0; y < 16 ; y++) {
    for (var x = 0; x < 17 ; x++) {
      var py = y * th;
      var px = ox + x * tw;
      //var rand = int(random(0,3));
        fill(random(colors));
      polygon (px, py, 29, 6);
    }
  }

  for (var y = 0; y < 16 ; y++) {
    for (var x = 0; x < 17 ; x++) {
      var py = 27 + y * th;
      var px = 45 + ox + x * tw;
      fill(random(colors));
      polygon (px, py, 29, 6);
    }
  }
  se = second()
  textFont("Avenir");
  fill(255);
  textSize(80);
  if(int(mi / 10) == 0) {
    text(h + ":0" + mi, 200, 270)
  }
  else {
    text(h + ":" + mi, 200, 270)
  }
  textSize(40);
  if(int(se / 10) == 0) {
    text("0" + se, 400, 300)
  }
  else {
    text(se, 400, 300)
  }
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
