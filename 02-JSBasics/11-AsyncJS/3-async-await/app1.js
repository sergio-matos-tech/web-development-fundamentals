
function delayedColorChange(newColor, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, delay);
  });
}

async function rainbow() {
  await delayedColorChange('red', 1000);
  await delayedColorChange('orange', 1000);
  await delayedColorChange('yellow', 1000);
  await delayedColorChange('green', 1000);
  await delayedColorChange('blue', 1000);
  await delayedColorChange('indigo', 1000);
  await delayedColorChange('violet', 1000);
  return "All done!";
}

const h1 = document.createElement('h1');
h1.style.position = 'absolute';
h1.style.top = '50%';
h1.style.left = '50%';
h1.style.transform = 'translate(-50%, -50%)';
h1.style.color = 'white';
h1.style.fontSize = '5rem';
h1.style.textAlign = 'center';
h1.style.fontFamily = 'Arial, sans-serif';
h1.innerText = "Hello, Rainbow!";
document.body.appendChild(h1);

for (let i = 0; i < 7; i++) {
  h1.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

rainbow().then(() => h1.innerText = "Rainbow Complete!");
