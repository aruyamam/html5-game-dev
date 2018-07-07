const $deck = document.getElementById('cards');
const $card = document.querySelector('.card:first-child');

for (let i = 0; i < 11; i++) {
  const node = $card.cloneNode(true);
  $deck.appendChild(node);
}

[...$deck.children].forEach((card, i) => {
  const x = (card.clientWidth + 20) * (i % 4);
  const y = (card.clientHeight + 20) * Math.floor(i / 4);
  card.style.transform = `translate(${x}px, ${y}px)`;
});
