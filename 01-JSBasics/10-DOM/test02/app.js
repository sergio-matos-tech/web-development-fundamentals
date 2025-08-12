

const buttons = document.querySelectorAll('button')

for (let button of buttons) {
    button.addEventListener('click', () => {
        button.style.backgroundColor = makeRandomColor()
        sleep(650).then(() => {
            resetButton(button)
        })
    })
}

const h1s = document.querySelectorAll('h1')
for (let h1 of h1s) {
    h1.addEventListener('click', () => {
        h1.style.color = makeRandomColor()
        sleep(650).then(() => {
            h1.style.color = ''
        })
    })
}

function makeRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function resetButton(button) {
    button.style.backgroundColor = '';
}