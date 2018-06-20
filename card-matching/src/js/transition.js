const $cards = document.getElementById('cards').children;

[...$cards].forEach(card => {
  card.addEventListener('click', function () {
    this.classList.toggle('card-flipped');
  });
});
