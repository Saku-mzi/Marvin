const qNum = ["#10", "#15", "#20", "#25", "#30", "#35", "#40", "#45", "#50"];
const quote = [
  'Nna kao kgaola, ke taba ya hao le Jesu"',
  'Sometimes people make sense"',
  'Who told you that?"',
  `I think I lost my bankcard... There's nothing in it anyway"`,
  'We need a return of plastic straws"',
  'Marvin is on page 1 i think"',
  'Hee Hee"',
  'You just missed Michael Jackson"',
  'I got chest pains"',
];

const images = [
  "images/05.jpg",
  "images/06.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/13.jpg",
  "images/20.jpg",
  "images/21.jpg",
  "images/24.jpg",
  "images/29.jpg",
];

const name = [
  "Jimi Hendrix",
  "idkBro",
  "daiMan",
  "leYenaAkemoItsi",
  "ashu",
  "kaMmona",
  "MJ",
  "meWhileDoingThis",
  "idkAgain",
];

let i = 0;
const photo = document.getElementById("photo");
const quoteNumber = document.getElementById("quoteNumber");
const quotes = document.getElementById("quoteOfTheDay");
const names = document.getElementById("naam");

function show() {
  photo.src = images[i];
  photo.alt = images[i];
  quotes.textContent = quote[i];
  quoteNumber.textContent = qNum[i];
  names.textContent = name[i];
}

document.getElementById("marvinImage").onclick = () => {
  i = (i + 1) % images.length;
  show();
};
