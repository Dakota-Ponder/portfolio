document.addEventListener('DOMContentLoaded', function() {
  // Typing effect
  var text = "Hi, I'm Dakota";
  var i = 0;
  var speed = 100;
  var typewriter = document.getElementById('typewriter');

  var cursor = document.createElement('span');
  cursor.className = 'cursor';
  typewriter.appendChild(cursor);

  function typeWriter() {
    if (i < text.length) {
      var charSpan = document.createElement('span');
      charSpan.textContent = text.charAt(i);
      typewriter.insertBefore(charSpan, cursor);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
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
  ctx.strokeStyle = 'black';

  drawFractalTree(ctx, 200, 350, 100, -Math.PI / 2, 10);
});
