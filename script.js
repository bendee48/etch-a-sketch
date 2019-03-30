let count = 16;
let container = document.querySelector('#grid-container');
container.style.gridTemplateColumns = `repeat(${count}, auto)`;
container.style.gridTemplateRows = `repeat(${count}, auto)`;

for (let i = 0; i < count ** 2; i++) {
  let divvy = document.createElement('div');
  container.appendChild(divvy);
}

let divs = Array.from(document.querySelectorAll('#grid-container > div'));
divs.forEach(function(item){
  item.addEventListener('mouseover', function(){
    this.style.backgroundColor = randomColor();
  });
});

function randomColor(){
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += "abcdef1234567890"[Math.floor(Math.random() * 16)]
  }
  return color
}
