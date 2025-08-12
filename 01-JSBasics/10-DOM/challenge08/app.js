
const button = document.querySelector('button')
const h1 = document.querySelector('h1')

button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor()
    h1.innerHTML = 'Color Changed to ' + document.body.style.backgroundColor
})

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
