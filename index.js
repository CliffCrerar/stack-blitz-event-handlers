// Import stylesheets
import './style.css';

// Standard code
const appDiv = document.getElementById('app');
function render() {
  appDiv.innerHTML = `
  <h1>Event Handlers</h1>
  <hr><br>
  <label for="#inp1">Input 1</label>
  <input id="inp1" name="inp1"/><span id="sp1"><span><br><br>
  <label for="#inp2">Input 2</label>
  <input id="inp2" name="inp2"/><span id="sp2"><span><br><br>
  <button type="button">clicker thing</button>
`;
}
render();

// get event counters
let sp1 = document.getElementById('sp1');
let sp2 = document.getElementById('sp2');
// get inputs
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');

// set event listener on both inputs by using placing inputs into an array and using forEach
[inp1, inp2].forEach(inp =>
  inp.addEventListener('change', function(event) {
    incrementByOne(event.target);
  }));

function incrementByOne(input) {
  let span;
  switch(input.id){
    case 'inp1': span = sp1;break;
    case 'inp2': span = sp2;break;
    default: return;
  }
  if(input.innerText==='') {
    input.innerText = 1;
  } else {
    input.innerText = Number(input.innerText)++;
  }
}

const btn = document
  .getElementsByTagName('button')[0]
  .addEventListener('click', function(event) {
    console.log(event);
    console.log(event.type);
    console.log(event.target.innerHTML);
  });
