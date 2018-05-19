// get data from json files
// event listener on button click
// build up an insult string
// print insult to dom
// generate a random number between 0 and length of array

const data = require('./data');
require('./events');

$(document).ready(() => {
  data.initializer();
});
