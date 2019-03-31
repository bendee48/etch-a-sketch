let sqCount = 16;

function setSides() {
  let sqButton = document.querySelector('#sq-button');
  sqButton.addEventListener('click', function(){
    let num = prompt("How many squares per side?");
    while (isNaN(num) || num === "") {
      num = prompt("That's not a number. Please enter a number.");
    }
    deleteGrid();
    createGrid(num);
  });
}
setSides()


function createGrid(numberOfSquares) {
  let sides = Number(numberOfSquares);
  let container = document.querySelector('#grid-container');
  container.style.gridTemplateColumns = `repeat(${sides}, auto)`;
  container.style.gridTemplateRows = `repeat(${sides}, auto)`;
  /*Create grid*/
  for (let i = 0; i < sides ** 2; i++) {
    let divvy = document.createElement('div');
    container.appendChild(divvy);
  }
  colorDivs();
  clear();
}
createGrid(sqCount)

function deleteGrid() {
  let container = document.querySelector('#grid-container');
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}

/*Apply color to divs*/
function colorDivs() {
  let divs = Array.from(document.querySelectorAll('#grid-container > div'));
  divs.forEach(function(item){
    item.addEventListener('mouseover', function(e){
      let current_color = this.style.backgroundColor;
      if (current_color) {
        let colors = current_color.match(/\d+/g);
        for (let i = 0; i < 3; i++) {
          if (+colors[i] > 25) {
            colors[i] = +colors[i] - 25;
          } else {
            colors[i] = 0;
          }
        }
        let red;
        let green;
        let blue;
        [red, green, blue] = colors
        let new_shade = `rgb(${red}, ${green}, ${blue})`;
        this.style.backgroundColor = new_shade;
      } else {
          this.style.backgroundColor = randomColor();
      }
    });
  });
}

function randomColor(){
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr[i] = Math.floor(Math.random() * 255)
  }
  let color = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
  return color;
}
randomColor();

/*Clear grid of color*/
function clear() {
  let divs = Array.from(document.querySelectorAll('#grid-container > div'));
  let clearBtn = document.querySelector('#clear-button');
  clearBtn.addEventListener('click', function(){
    divs.forEach(function(item){
      item.style.backgroundColor = "";
    });
  });
}
clear();
