import data from "./data.json" with { type: "json" };
console.log(data);
const qNum = ["#66", "#72", "#43", "#92", "#77", "#33", "#42", "#93", "#11"];
const quote = [
  `"`,
  `"`,
  `"`,
  `"`,
  `"`,
  `"`,
  `Hee Hee"`,
  `"`,
  `We are for the GOAT"`,
];

const images = [
  `images/20.jpg`,
  `images/05.jpg`,
  `images/06.jpg`,
  `images/10.jpg`,
  /*
  `images/11.jpg`,
  `images/13.jpg`,
  `images/21.jpg`,
  `images/24.jpg`,
  `images/cantona.jpg`,
  */
];

const name = [``, ``, ``, ``, ``, ``, `Michael Jackson`, ``, ``];

let pixels = 0;
const photo = document.getElementById("photo");
const quoteNumber = document.getElementById("quoteNumber");
const quotes = document.getElementById("quoteOfTheDay");
const names = document.getElementById("naam");

function show(item) {
  photo.src = item.src;
  quoteNumber.textContent = `#${item.number}`;
  photo.alt = images[pixels];
  quotes.textContent = quote[pixels];
  names.textContent = name[pixels];
  console.log(pixels, item);
}

document.getElementById("marvinImage").onclick = () => {
  if (pixels == data.gallery.length - 1) {
    pixels = 0;
  } else {
    pixels++;
  }
  //console.log(gallery, pixels, gallery[pixels]);
  show(data.gallery[pixels]);
};
