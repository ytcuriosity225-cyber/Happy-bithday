const balloons = [];
const balloonContainer = document.querySelector('.container');

function createBalloon() {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.style.left = Math.random() * 100 + 'vw';
      balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
      balloonContainer.appendChild(balloon);
}

setInterval(createBalloon, 500);
