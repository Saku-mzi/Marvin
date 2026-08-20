import data from "./data.json" with { type: "json" };

let pixels = 0;
const photo = document.getElementById("photo");
const quoteNumber = document.getElementById("quoteNumber");
const quotes = document.getElementById("quoteOfTheDay");
const names = document.getElementById("naam");
const cRight = document.getElementById("copyright");

function show(item) {
  photo.src = item.src;
  quoteNumber.textContent = `#${item.number}`;
  quotes.textContent = item.quote;
  names.textContent = item.author;
  cRight.textContent = item.copyright;
}

document.getElementById("marvinImage").onclick = () => {
  if (pixels === data.gallery.length - 1) {
    pixels = 0;
  } else {
    pixels++;
  }
  show(data.gallery[pixels]);
};
