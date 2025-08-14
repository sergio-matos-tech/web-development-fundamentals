
const h1 = document.querySelector("h1");
const input = document.querySelector("#username");


const originalText = h1.innerText; 

input.addEventListener("input", function (e) {
    if (e.target.value.trim() === "") 
        h1.innerText = originalText; 
    else 
        h1.innerText = "Welcome, " + e.target.value;
});

