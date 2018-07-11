import untangleGame from './drawing';

document.addEventListener('DOMContentLoaded', () => {
   const canvas = document.getElementById('game');
   untangleGame.ctx = canvas.getContext('2d');

   const width = canvas.width;
   const height = canvas.height;

   untangleGame.createRandomCircles(width, height);
   untangleGame.connectCircles();
});