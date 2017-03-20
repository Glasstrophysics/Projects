function setup() {
  createCanvas(1429, 764);

}
var circle = {
  n : 0};


var colors = [[250, 246, 237], [252, 249, 209], [249, 241, 133],
              [251, 244, 163], [251, 241, 121], [254, 213, 105],
              [253, 230, 113], [254, 217, 108], [248, 156, 87],
              [254, 212, 112], [252, 180, 92], [245, 135, 85],
              [245, 134, 85], [242, 102, 63], [229, 77, 49],
              [243, 114, 77], [230, 82, 50], [216, 71, 46],
              [230, 140, 104], [227, 115, 80], [202, 67, 45],
              [237, 161, 122], [210, 104, 73], [168, 58, 37],
              [202, 137, 104], [173, 75, 55], [147, 47, 36],
              [193, 156, 128], [180, 132, 107], [121, 53, 43],
              [197, 181, 153], [166, 131, 107], [91, 42, 33],
              [209, 167, 136], [195, 183, 168], [86, 66, 57],
              [202, 199, 186], [141, 133, 122], [69, 60, 50],
              [214, 211, 202], [171, 165, 154], [78, 72, 66],
              [214, 211, 202], [171, 165, 154], [78, 72, 66]];


              var tw = 90;
              var th = 53;
              var oy = 0;
              var ox = 0;

function draw() {
    background(0);
  var th = 50;

  var s = second();
frameRate(10);

  for (var x = 0; x < 100; x++) {
  noFill();
  stroke(random(0, 255));
  polygon (1000 - ((x * 50) / 2), 1000 - ((x * 50) / 2), x * th,x + 2);

  }
  for (var y = 0; y < 16 ; y++) {
    for (var x = y/2 - 10; x < 16 ; x++) {
      var py = y * th;
      var px = x * tw;
      //var rand = int(random(0,3));
      stroke(random(colors));
      noFill();
      rotate(PI/(random(0, 10)));
      polygon (px, py, 29, y+3);
    }
  }

   circle.n = circle.n + 1;
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
