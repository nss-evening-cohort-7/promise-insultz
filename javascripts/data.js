let descriptorsArray = [];
let nounsArray = [];

const descriptorsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/descriptors.json')
      .done((data) => {
        resolve(data.descriptors);
      })
      .fail((err) => {
        reject(`I got an error!`, err);
      });
  });
};

const nounsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/nouns.json')
      .done((data) => {
        resolve(data.nouns);
      })
      .fail((err) => {
        reject(`I got an error!`, err);
      });
  });
};

const getAllData = () => {
  return Promise.all([descriptorsJSON(), nounsJSON(),])
    .then((results) => {
      descriptorsArray = results[0];
      nounsArray = results[1];
    })
    .catch((err) => {
      console.error('oops!', err);
    });
};

const getNouns = () => {
  return nounsArray[Math.floor(Math.random() * nounsArray.length)].text;
};

const getDescriptors = () => {
  return descriptorsArray[Math.floor(Math.random() * descriptorsArray.length)].text;
};

const initializer = () => {
  getAllData();
};

module.exports = {
  initializer,
  getDescriptors,
  getNouns,
};
