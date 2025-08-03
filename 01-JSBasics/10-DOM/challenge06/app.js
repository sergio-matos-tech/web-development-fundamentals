
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const spans = document.querySelectorAll('span')


let count = 0
for (const span of spans) {
    span.style.color = colors[count]
    count += 1
}
