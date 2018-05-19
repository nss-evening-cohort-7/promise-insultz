const newInsult = (descriptors1, descriptors2, nouns) => {
  let insultString = '';
  insultString += `<h3>${descriptors1} ${descriptors2} ${nouns}</h3>`;
  printToDom(insultString);
};

const printToDom = (string) => {
  $('.jumbotron').html(string);
};

module.exports = newInsult;
