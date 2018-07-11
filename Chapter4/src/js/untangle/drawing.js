import untangleGame from './data';

untangleGame.drawCircle = function (x, y, radius) {
   const ctx = untangleGame.ctx;
   ctx.fillStyle = 'gold';
   ctx.beginPath();
   ctx.arc(x, y, radius, 0, Math.PI * 2, true);
   ctx.closePath();
   ctx.fill();
};

export default untangleGame;
