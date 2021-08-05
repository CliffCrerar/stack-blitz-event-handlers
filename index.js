// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const inp = document.getElementById('inp');
inp.addEventListener('change', function(event) {
  console.log(event.type);
  console.log(event.target);
});

const btn = document
  .getElementsByTagName('button')[0]
  .addEventListener('click', function(event) {
    console.log(event);
    console.log(event.type);
    console.log(event.target.innerHTML);
  });
