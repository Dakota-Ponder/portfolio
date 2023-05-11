document.addEventListener('DOMContentLoaded', function() {
  window.onload = function() {
  var canvas = document.getElementById('fractal-tree');
  var context = canvas.getContext('2d');
  var angle = Math.PI / 4;

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.translate(200, canvas.height);
    branch(context, 100);
    context.restore();
  }

  function branch(context, len) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -len);
    context.stroke();

    if (len > 4) {
      context.save();
      context.translate(0, -len);

      context.save();
      context.rotate(angle);
      branch(context, len * 0.67);
      context.restore();

      context.save();
      context.rotate(-angle);
      branch(context, len * 0.67);
      context.restore();

      context.restore();
    }
  }

  setInterval(function() {
    angle = angle + 0.01;
    draw();
  }, 100);
};
  // Fractal tree
  function drawFractalTree(ctx, startX, startY, length, angle, depth) {
    if (depth === 0) return;

    var endX = startX + length * Math.cos(angle);
    var endY = startY + length * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    var newLength = length * 0.7;
    var newDepth = depth - 1;

    drawFractalTree(ctx, endX, endY, newLength, angle + Math.PI / 6, newDepth);
    drawFractalTree(ctx, endX, endY, newLength, angle - Math.PI / 6, newDepth);
  }

  var canvas = document.getElementById('fractal-tree');
  var ctx = canvas.getContext('2d');

  ctx.lineWidth = 2;
  ctx.strokeStyle = 'white'; // Change the color here

  drawFractalTree(ctx, 200, 350, 100, -Math.PI / 2, 10);
});
