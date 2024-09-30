import Rand from 'https://cdn.jsdelivr.net/npm/rand-seed@1.0.2/dist/rand-seed.es.js';

const result = document.getElementById('result');
const resultContainer = document.getElementById('result-container');
const form = document.querySelector('form');
const list = [
    ['大吉', 2],
    ['吉', 5],
    ['中吉', 3],
    ['小吉', 3],
    ['凶', 2],
    ['大凶', 1],
]
    .map(([text, len]) => Array.from({ length: len }, () => text))
    .flat(1);

Array.from(form.querySelectorAll('input')).forEach((input) => {
    input.addEventListener('focus', () => {
        console.log('change');

        resultContainer.style.opacity = 0;
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value;
    const birthday = form.birthday.value;
    const now = new Date();
    const rng = new Rand(JSON.stringify([name, birthday, now.getFullYear()]));
    resultContainer.style.opacity = 1;
    result.innerText = list[Math.floor(rng.next() * list.length)];

    return false;
});
