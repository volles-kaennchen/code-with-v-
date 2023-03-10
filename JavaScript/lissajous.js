    // Functions
    function draw() {
    ctx.save();
    ctx.scale(ratio, ratio);
  
    // Begin draw
    const gap = 10;
    const bigRadius = 50;
    const smallRadius = 2;
    const startIndex = 1;
    const points = { columns: [], rows: [] };
  
    // Draw the columns
    for (let i = startIndex; i < count + startIndex; i++) {
      const x = bigRadius * i * 2 + bigRadius + gap * i;
      const y = bigRadius;
      const t = time * i;
      const smallX = Math.sin(t) * bigRadius + x;
      const smallY = -Math.cos(t) * bigRadius + y;
  
      points.columns.push({ x, y });
      shapes.circle(x, y, bigRadius);
      shapes.circle(smallX, smallY, smallRadius, { fill: true });
      shapes.line('x', smallX);
    }
  
    // Draw the rows
    for (let i = startIndex; i < count + startIndex; i++) {
      const x = bigRadius;
      const y = bigRadius * i * 2 + bigRadius + gap * i;
      const t = time * i;
      const smallX = Math.sin(t) * bigRadius + x;
      const smallY = -Math.cos(t) * bigRadius + y;
  
      points.rows.push({ x, y });
      shapes.circle(x, y, bigRadius);
      shapes.circle(smallX, smallY, smallRadius, { fill: true });
      shapes.line('y', smallY);
    }
  
    // Draw the grid
    points.rows.forEach((row, y) => {
      const ty = time * (y + startIndex);
  
      points.columns.forEach((col, x) => {
        const tx = time * (x + startIndex);
        const pointX = Math.sin(tx) * bigRadius + col.x;
        const pointY = -Math.cos(ty) * bigRadius + row.y;
        const trail = trails[y * points.rows.length + x];
  
        shapes.circle(pointX, pointY, smallRadius, { fill: true });
        trail.push({ x: pointX, y: pointY });
        trail.draw(ctx);
      });
    });
    // End draw
  
    ctx.restore();
  }
  
  function update() {
    time = (Date.now() - startTime) / 1000;
    ctx.clearRect(0, 0, windowWidth * ratio, windowHeight * ratio);
    draw();
    requestAnimationFrame(update);
  }
  
  function resizeHandler() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    canvas.width = windowWidth * ratio;
    canvas.height = windowHeight * ratio;
    draw();
  }
  
  // DOM elements
  const canvas = document.querySelector('canvas');
  
  // Variables
  const ctx = canvas.getContext('2d');
  const shapes = Shapes(ctx);
  const startTime = Date.now();
  const count = 6;
  const trails = Array.from({ length: Math.pow(count, 2) }, () => new Trail());
  const ratio = window.devicePixelRatio || 1;
  let time = 0;
  let windowWidth = 0;
  let windowHeight = 0;
  
  // Events
  window.addEventListener('resize', resizeHandler);
  
  // Body
  update();
  resizeHandler();
  
  const Shapes = function(ctx) {
    function circle(x, y, radius, options = {}) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
  
      if (options.fill) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  
    function line(coordinate, value) {
      const currentStyle = ctx.strokeStyle;
  
      ctx.beginPath();
  
      if (coordinate === 'x') {
        ctx.moveTo(value, 0);
        ctx.lineTo(value, windowHeight * ratio);
      } else if (coordinate === 'y') {
        ctx.moveTo(0, value);
        ctx.lineTo(windowWidth * ratio, value);
      }
  
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.stroke();
      ctx.strokeStyle = currentStyle;
    }
  
    return {
      circle,
      line,
    };
    
  };
  class Trail {
    constructor(maxPoints = 375) {
      this.points = [];
      this.maxPoints = maxPoints;
    }
  
    push(point) {
      if (this.points.length >= this.maxPoints) {
        this.points.shift();
      }
  
      return this.points.push(point);
    }
  
    draw(ctx) {
      ctx.beginPath();
  
      this.points.forEach((point, i, points) => {
        const prevPoint = points[i - 1] || point;
  
        ctx.moveTo(prevPoint.x, prevPoint.y);
        ctx.lineTo(point.x, point.y);
      });
  
      ctx.stroke();
    }
  }
