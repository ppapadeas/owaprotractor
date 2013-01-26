
window.addEventListener("deviceorientation", function (e) {
  if (e) {
    document.getElementById("orientation-alpha").innerHTML = e.alpha
    document.getElementById("orientation-beta").innerHTML = e.beta
    document.getElementById("orientation-gamma").innerHTML = e.gamma
  }
}, false);

//-------------------



var surface;
var happy;
var angle = 0;

function drawCanvas() {
    // Get our Canvas element
    surface = document.getElementById("myCanvas");

    if (surface.getContext) {
        // If Canvas is supported, load the image
        happy = new Image();
        happy.onload = loadingComplete;
        happy.src = "protractor.png";
    }
}

function loadingComplete(e) {
    // When the image has loaded begin the loop
    setInterval(loop, 25);
}

function loop() {
    // Each loop we rotate the image
    // Grab the context
    var surfaceContext = surface.getContext('2d');

        // Clear the canvas to White
    surfaceContext.fillStyle = "rgb(255,255,255)";
    surfaceContext.fillRect(0, 0, surface.width, surface.height);

    // Save the current context
    surfaceContext.save();
    // Translate to the center point of our image
    surfaceContext.translate(happy.width * 0.5, happy.height * 0.5);
    // Perform the rotation
    surfaceContext.rotate(DegToRad(angle));
    // Translate back to the top left of our image
    surfaceContext.translate(-happy.width * 0.5, -happy.height * 0.5);
    // Finally we draw the image
    surfaceContext.drawImage(happy, 0, 0);
    // And restore the context ready for the next loop
    surfaceContext.restore();

    // Increment our rotation angle
    angle=document.getElementById("orientation-alpha").innerHTML;
}

function DegToRad(d) {
    // Converts degrees to radians
    return d * 0.0174532925199432957;
}
