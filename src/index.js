function displayPoem(response) {
  console.log("Generated poem:", response.data);
  new Typewriter("#poemOutput", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    deleteSpeed: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#themeInput");
  let apiKey = "ao8ce12baa0at03effcb000a09841c63";
  let prompt = `provide a short 4 line filipino poem about ${instructionsInput.value} and make sure to use simple language that is easy to understand with <br> line breaks between each line in html format and NOT include the "html" tags. Then add strong "Shecode AI" tags after the last line.Make sure that each line is separated by a line break in html format.`;
  let context =
    "provide a clear and precise answer with <br> line breaks between each line in html format and NOT include the 'html' tags. Then add strong 'Shecode AI' tags after the last line.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poemOutput");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Filipino poem about ${instructionsInput.value}</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poemForm");
poemFormElement.addEventListener("submit", generatePoem);
