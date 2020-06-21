const fetch = require('node-fetch');
// node-fetch: Módulo que permite realizar peticiones http mediante el uso de promesas
// implementando el API Fetch.
// const marked = require('marked');
// const fs = require('fs');

const validate = (LinksArr) => {
  const arrPromis = [];
  LinksArr.map((link) => {
    const object = link;
    const fetchPromis = fetch(object.href);
    arrPromis.push(fetchPromis
      .then((res) => {
        if (res.ok) {
          object.status = res.status;
          object.statusText = res.statusText;
        } else {
          object.status = res.status;
          object.statusText = res.statusText;
        }
        return object;
      })
      .catch(() => {
        const error = {
          status: 'ERROR',
          statusText: 'fail',
        };
        return error;
      }));
    return Promise.all(arrPromis);
  });
};

module.exports = {
  validate,
};
