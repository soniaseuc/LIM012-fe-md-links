// const fetch = require('node-fetch');
// const { api } = require('./mdLinks');
// const { allFunctionObj } = require('./main.js');


// const validate = (LinksArr) => {
//   const arrPromis = LinksArr.map((link) => {
//     const object = link;
//     const fetchPromis = fetch(object.href);
//     return fetchPromis
//       .then((res) => {
//         if (res.ok) {
//           object.status = res.status;
//           object.statusText = res.statusText;
//           // resolve(object);
//         }
//         return object;
//       })
//       .catch((err) => {
//         const error = {
//           status: err.message,
//           statusText: 'fail',
//         };
//         return error;
//       });
//   });

//   // console.log(arrPromis);
//   return Promise.all(arrPromis);
// };

const stats = (ArrayLinks) => {
  const totalLinks = [];
  ArrayLinks.forEach((link) => totalLinks.push(link.href));
  const LinkUnique = new Set(ArrayLinks);
  // .map((element) => element.href));
  const totalUnique = `
  Total :  ${totalLinks.length}
  Unique:  ${LinkUnique.size} `;
  return console.log(totalUnique);
};

const example = ['https://es.wikipedia.org/wiki/Markdown',
  'http://www.google.com', 'https://developers.google.com/v8/',
  'https://www.w3schools.com/', 'https://developers.google.com/v8/',
  'https://github.com/'];

stats(example);

const statsValidate = (links) => {
  const totalLinks = links;
  const unique = new Set(links);
  const broke = new Set(links.filter((link) => link.status !== 'ok'));
  const valiStat = `
  total: ${totalLinks.length}
  Unique: ${unique.size}
  Broken: ${broke.size}
  `;
  return console.log(valiStat);
};

statsValidate(example);

module.exports = {
  // validate,
  stats,
  statsValidate,
};
