const refresh = document.getElementById("btn");
const conatainer = document.getElementById("container");

let maxPaletteBoxes = 14;

const GeneratePalette = () => {
  conatainer.innerHTML = " ";
  //generate a random hex color
  for (let i = 0; i < maxPaletteBoxes; i++) {
    let hex = "0123456789abcdef";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      Colors = hex.charAt(Math.random() * 16);
      randomColor += Colors;
    }

    // create boxes
    const color = document.createElement("div");
    color.classList.add("color");
    color.innerHTML = `
      <div class="box" style= "background:${randomColor}"></div>
      <div class="hex-color" onclick="copy(that)">
        <button class ="copy" >${randomColor}</button>
      </div>
    `;
    conatainer.appendChild(color);
  }
};
GeneratePalette();

// copy function that allow you to copy text when you click on it
let copy = document.querySelectorAll(".copy");

copy.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (!navigator.clipboard) {
      alert("Sorry, your browser doesn't support the Clipboard API");
      return;
    }
    navigator.clipboard
      .writeText(elem.innerText)
      .then(() => {
        console.log(elem.innerText)
        alert("The color copied successfully: " + elem.innerText);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
});

refresh.addEventListener("click", GeneratePalette);
