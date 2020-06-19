const fetch = require('node-fetch');

const validate = (obj) => {
  const arrPromises = Objects.map((object) => {
    fetch(object.href).then((res) => {
      object.status = res.status,
      object.statusText = res.statusText;
    });
    return object;
  });
};
