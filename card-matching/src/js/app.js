const matchingGame = {};
matchingGame.deck = [
  'card--AK', 'card--AK',
  'card--AQ', 'card--AQ',
  'card--AJ', 'card--AJ',
  'card--BK', 'card--BK',
  'card--BQ', 'card--BQ',
  'card--BJ', 'card--BJ',
];  

function shuffle() {
  return 0.5 - Math.random();
}

function selectCard() {
  const $flippedCard = document.querySelectorAll('.isFlipped');
  if ($flippedCard.length > 1) {
    return;
  }
  this.classList.add('isFlipped');
  if ($flippedCard.length === 1) {
    setTimeout(checkPattern, 700);
  }
}

function checkPattern() {
  const $flippedCards = document.querySelectorAll('.isFlipped');

  if (isMatchPattern()) {
    [...$flippedCards].forEach(card => {
      card.classList.remove('isFlipped');
      // card.classList.add('isRemoved');
      card.addEventListener('transitionend', removeTookCards);
      card.classList.add('isRemoved');
    });
  }
  else {
    [...$flippedCards].forEach(card => {
      card.classList.remove('isFlipped');
    });
  }
}

function isMatchPattern() {
  const $flippedCards = document.querySelectorAll('.isFlipped');
  const pattern = $flippedCards[0].getAttribute('data-pattern');
  const anotherPattern = $flippedCards[1].getAttribute('data-pattern');

  return (pattern === anotherPattern);
}

function removeTookCards() {
  $cards = document.querySelectorAll('.isRemoved');
  [...$cards].forEach(card => {
    card.remove();
  });
}


document.addEventListener('DOMContentLoaded', function() {

  const $deck = document.getElementById('cards');
  const $card = document.querySelector('.card:first-child');
  matchingGame.deck.sort(shuffle);

  for (let i = 0; i < 11; i++) {
    const node = $card.cloneNode(true);
    $deck.appendChild(node);
  }

  [...$deck.children].forEach((card, i) => {
    const x = (card.clientWidth + 20) * (i % 4);
    const y = (card.clientHeight + 20) * Math.floor(i / 4);
    card.style.transform = `translate(${x}px, ${y}px)`;

    const pattern = matchingGame.deck.pop();

    card.querySelector('.card__back').classList.add(pattern);
    card.setAttribute('data-pattern', pattern);
    
    card.addEventListener('click', selectCard);
  });

});
