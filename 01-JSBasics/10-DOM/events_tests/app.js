const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert("You clicked the button! ");
});

button.onmouseenter = function () {
  console.log("Mouse over");
};

const buttonv2 = document.getElementById("bttn-v2");

buttonv2.addEventListener("click", () => {
  alert("You clicked the v2 button!");
});
