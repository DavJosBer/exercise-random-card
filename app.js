function generate() {
    const cardAtrr = ['♦', '♥', '♠', '♣'];
    const cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    //
    const randomAttr = Math.floor(Math.random() * (4 - 0) + 0);
    const randomValue = Math.floor(Math.random() * (14 - 1) + 1);
    //
    const color = ['text-danger', 'text-dark'];
    //
    const rndmColor = Math.floor(Math.random() * (2 - 0) + 0);
    //
    const attr = document.querySelectorAll('.cardAttr');
    const value = document.querySelector('#cardValue');
    //
    const width = document.querySelector('#width');
    const card = document.querySelector('.card');
    //
    if (width.value == 0 && width.value <= 25) { card.setAttribute('class', 'card bg-white my-5 col-10 mx-auto px-3 w-25') } else if (width.value > 25 && width.value <= 50) { card.setAttribute('class', 'card bg-white my-5 col-10 mx-auto px-3 w-50') } else if (width.value > 50 && width.value < 75) { card.setAttribute('class', 'card bg-white my-5 col-10 mx-auto px-3 w-75') } else if (width.value >= 75) { card.setAttribute('class', 'card bg-white my-5 col-10 mx-auto px-3 w-100') };

    value.innerHTML = `<p class='display-2 ${color[rndmColor]}'>${cardValue[randomValue]}</p>`;
    for (let i in attr) {
        attr[i].innerHTML = `<p class='display-2 ${color[rndmColor]}'>${cardAtrr[randomAttr]}</p>`;
    }
    //
    setTimeout(() => {
            generate()
        },
        10000)
}
generate();
document.querySelector('#generate').addEventListener('click', () => {
    generate()
})