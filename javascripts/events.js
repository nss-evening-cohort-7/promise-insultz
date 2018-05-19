const dom = require('./dom');
const data = require('./data');

const insultEvent = () => {
  $('#insult').click((e) => {
    dom(data.getDescriptors(), data.getDescriptors(), data.getNouns());
  });
};

module.exports = insultEvent;
