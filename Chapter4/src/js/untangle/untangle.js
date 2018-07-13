import untangleGame from './input';

document.addEventListener('DOMContentLoaded', () => {
   const canvas = document.getElementById('game');
   untangleGame.ctx = canvas.getContext('2d');

   const width = canvas.width;
   const height = canvas.height;

   untangleGame.createRandomCircles(width, height);
   untangleGame.connectCircles();
   untangleGame.handleInput();

   setInterval(gameloop, 30);
   
   function gameloop() {
      untangleGame.clear();
      untangleGame.drawAllLines();
      untangleGame.drawAllCircless();
   }
});