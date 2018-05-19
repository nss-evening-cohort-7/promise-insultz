let nouns = [];
let descriptors = [];

const nounsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/nouns.json')
      .done((data) => {
        resolve(data.nouns);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const descriptorsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/descriptors.json')
      .done((data) => {
        resolve(data.descriptors);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getAllData = () => {
  // resolve promises
  return Promise.all([nounsJSON(), descriptorsJSON(),])
    .then((monkeyButt) => {
      nouns = monkeyButt[0];
      descriptors = monkeyButt[1];
    })
    .catch((err) => {
      console.error('oh crap and error: ', err);
    });
};

const initializer = () => {
  getAllData();
};

const getNouns = () => {
  return nouns;
};

const getDescriptors = () => {
  return descriptors;
};

module.exports = {
  initializer,
  getDescriptors,
  getNouns,
};
