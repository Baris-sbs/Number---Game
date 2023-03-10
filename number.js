let random = Math.round(Math.random() * 100);
console.log(random);
const inp = document.querySelector("#input");
const lifeCount = document.createElement("div");
const h3 = document.querySelector("h3");
h3.after(lifeCount);
const button = document.querySelector(".btn");
const span = document.getElementsByTagName("span");

let counter = 0;
let life = 5;
button.addEventListener("click", () => {
  let value = parseInt(inp.value);
  if (inp.value === "") {
    alert("Add a Number");
  } else {
    if (value > 100 || value < 0) {
      console.log("Enter a number between 1-100");
    } else if (value === random) {
      alert(`You guessed right, number was ${value}`);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else if (life === 1) {
      alert(`You run out of life, number was ${random}`);
      window.location.reload();
    } else if (value < random) {
      console.log("Enter a higher number");
      counter += 1;
      life -= 1;
      span[0].innerHTML = ` ${counter}`;
    } else if (value > random) {
      console.log("Enter a lower number");
      counter += 1;
      life -= 1;
      span[0].innerHTML = counter;
    } else {
      console.log("Input has to be a number");
    }
  }
  inp.value = "";
  inp.focus();
  lifeCount.innerHTML = `Remaining Life: ${life}`;
});
