
const groceryForm = document.querySelector('form');
const groceryList = document.querySelector('#list');

groceryForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const product = groceryForm.product.value;
    const quantity = groceryForm.qty.value;

    console.log(product + " " + quantity);

    const newList = document.createElement('li');
    newList.textContent = `${quantity} ${product}s`;
    groceryList.appendChild(newList);

    groceryForm.reset();
});
