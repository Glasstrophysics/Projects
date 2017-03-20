var input, button, greeting;

function setup() {

  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'in one word, what does glass do?');
  greeting.position(20, 5);
  textFont("Avenir");
  textAlign(CENTER);
  textSize(50);
}

function greet() {
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
  var glass = input.value();
  for (var i=0; i<200; i++) {
    push();
    fill(random(colors));
    translate(random(width), random(height));
    textFont("Avenir");
    text(glass, 0, 0);
    pop();
  }
}
