import untangleGame from './data';

untangleGame.drawCircle = function (x, y, radius) {
   const ctx = untangleGame.ctx;
   ctx.fillStyle = 'gold';
   ctx.beginPath();
   ctx.arc(x, y, radius, 0, Math.PI * 2, true);
   ctx.closePath();
   ctx.fill();
};

untangleGame.drawLine = function (x1, y1, x2, y2, thickness) {
   this.ctx.beginPath();
   this.ctx.moveTo(x1, y1);
   this.ctx.lineTo(x2, y2);
   this.ctx.lineWidth = thickness;
   this.ctx.strokeStyle = "#cfc";
   this.ctx.stroke();
}

untangleGame.connectCircles = function () {
   this.lines.length = 0;
   for (let i = 0; i < this.circles.length; i++) {
      let startPoint = this.circles[i];

      for (let j = 0; j < i; j++) {
         let endPoint = this.circles[j];
         
         this.drawLine(startPoint.x, startPoint.y, endPoint.x, endPoint.y, 1);
         this.lines.push(new this.Line(startPoint, endPoint, this.thinLineThickness));
      }
   }
};

untangleGame.connectCircles();

export default untangleGame;
