const fetch = require('node-fetch');

const validate = (LinksArr) => {
  const arrPromis = LinksArr.map((link) => {
    const object = link;
    const fetchPromis = fetch(object.href);
    return fetchPromis
      .then((res) => {
        if (res.ok) {
          object.status = res.status;
          object.statusText = res.statusText;
          // resolve(object);
        } else {
          object.status = res.status;
          object.statusText = res.statusText;
          // resolve(object);
        }
        return object;
      })
      .catch((e) => {
        const error = {
          status: e.message,
          statusText: 'fail',
        };
        return error;
      });
  });

  // console.log(arrPromis);
  return Promise.all(arrPromis);
};

module.exports = {
  validate,
};
