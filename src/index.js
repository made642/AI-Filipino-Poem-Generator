function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poemOutput", {
    strings: [
      "I have a Filipino dream!",
      "A dream of a nation where every child can reach for the stars.",
      "A dream of a country where poverty is just a memory.",
      "I have a Filipino dream!",
    ],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("button");
poemFormElement.addEventListener("click", generatePoem);
