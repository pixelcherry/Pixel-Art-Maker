
//access constant variables
const color = document.querySelector('#colorPicker');
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');
const pixelGrid = document.querySelector('#pixelCanvas');

function makeGrid(){
  //changes HTML of canvas
pixelGrid.innerHTML = '';
  //create rows and columns
let tr, td;
    // for loop to create grid
    for (let n=0; n<= height.value; n++) {
      tr = document.createElement('tr');
      //appends table rows
      pixelGrid.appendChild(tr);
    for (let m=0; m < width.value; m++){
      //creates table data element
      td = document.createElement('td');
      tr.appendChild(td);
    }
  }
//user input interaction with Event Listeners
pixelGrid.addEventListener('click',function(noreset){
  //prevents input from resetting
  noreset.preventDefault();
  //gives event target a name
  if (noreset.target.nodeName === 'TD') {
    noreset.target.style.backgroundColor = color.value;
  }
})
}
//calls makeGrid function
sizePicker.addEventListener('submit', function(noreset){
  noreset.preventDefault();
  makeGrid();
})
