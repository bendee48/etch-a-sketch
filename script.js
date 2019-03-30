let count = 16;
let container = document.querySelector('#grid-container');
container.style.gridTemplateColumns = `repeat(${count}, auto)`;
container.style.gridTemplateRows = `repeat(${count}, auto)`;
/*Create grid*/
for (let i = 0; i < count ** 2; i++) {
  let divvy = document.createElement('div');
  container.appendChild(divvy);
}

/*Apply color to divs*/
let divs = Array.from(document.querySelectorAll('#grid-container > div'));
divs.forEach(function(item){
  item.addEventListener('mouseover', function(e){
    // let current_color = this.style.backgroundColor;
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
      // console.log(current_color);
      // console.log(new_shade);
      this.style.backgroundColor = new_shade;
    } else {
        this.style.backgroundColor = randomColor();
    }
  });
});

function randomColor(){
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr[i] = Math.floor(Math.random() * 255)
  }
  let color = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
  return color;
}
randomColor();

/*Clear grid*/
function clear() {
  let clearBtn = document.querySelector('#clear-button');
  clearBtn.addEventListener('click', function(){
    divs.forEach(function(item){
      item.style.backgroundColor = "";
    });
  });
}
clear();
