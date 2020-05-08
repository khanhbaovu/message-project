

const button = document.querySelector("button");

button.addEventListener("click", update);

function update() {
  const message = document.getElementById('input').value;

  document.getElementById("ouput").textContent = message;
}
