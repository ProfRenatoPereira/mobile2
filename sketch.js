
function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(10);
  stroke("magenta");
  background("rgb(13,157,245)");
}
function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
