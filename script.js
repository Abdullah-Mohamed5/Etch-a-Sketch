const container = document.querySelector("#container");
const sizeBtn = document.querySelector(".sizeBtn");

for (let index = 0; index < 256; index++) {
  const div = document.createElement("div");
  container.appendChild(div);
}

// Create custom grid based on user input
sizeBtn.addEventListener("click", () => {
  let userInput = prompt(`Please enter your input (Max 100)`);
  if (isNaN(userInput) || userInput < 1 || userInput > 100) {
    alert("Please enter a valid number between 1 and 100");
    return;
  }
  let size = userInput * userInput;
  container.innerHTML = "";
  for (let index = 0; index < size; index++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }

  const squares = document.querySelectorAll("#container div");
  squares.forEach(div => {
    div.style.width = `calc(960px / ${userInput})`;
    div.style.height = `calc(960px / ${userInput})`;
  });
  squares.forEach(div => {
    div.addEventListener(
      "mouseover",
      () =>
        (div.style.cssText = `background-color: black; width: calc(960px / ${userInput}); height: calc(960px / ${userInput});`)
    );
  });
});

const squares = document.querySelectorAll("#container div");
squares.forEach(div => {
  div.addEventListener("mouseover", () => (div.style.cssText = "background-color: black"));
});
