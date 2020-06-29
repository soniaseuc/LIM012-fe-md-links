const fetch = require('node-fetch');

const validate = (linksArr) => {
  const links = linksArr;
  const arrPromis = links.map((link) => {
    const linksObj = link;
    const fetchPromis = fetch(linksObj.href);
    return fetchPromis
      .then((res) => {
        if (res.ok) {
          linksObj.status = res.status;
          linksObj.statusText = res.statusText;
        }
        return linksObj;
      })
      .catch((err) => {
        linksObj.status = err.status ? err.status : 'unknown';
        linksObj.statusText = err.message ? err.message : 'Fail';

        return linksObj;
      });
  });
  return Promise.all(arrPromis);
};

const stats = (arrayLinks) => {
  const totalLinks = [];
  arrayLinks.forEach((link) => totalLinks.push(link.href));
  const LinkUnique = new Set(arrayLinks.map((element) => element.href));
  const totalUnique = `
  Total :  ${totalLinks.length}
  Unique:  ${LinkUnique.size} `;
  return console.log(totalUnique);
};

const statsValidate = (links) => {
  const totalLinks = links;
  const unique = new Set(links.map((element) => element.href));
  const broke = links.filter((link) => link.status !== 200);
  const valiStat = `
  Total: ${totalLinks.length}
  Unique: ${unique.size}
  Broken: ${broke.length}
  `;
  return console.log(valiStat);
};

module.exports = {
  validate,
  stats,
  statsValidate,
};

// const example = ['https://es.wikipedia.org/wiki/Markdown',
//   'http://www.google.com', 'https://developers.google.com/v8/',
//   'https://www.w3schools.com/', 'https://developers.google.com/v8/',
//   'https://github/ssssss'];

// const ex = [
//   {
//     href: 'https://github.com/merunga/pildora-recursion',
//     text: 'Pill de recursión - repositorio',
//     file: '/home/mina/Documents/LIM012-fe-md-links/README.md',
//     status: 200,
//     statusText: 'OK',
//   },
//   {
//     href: 'https://github.com/',
//     text: 'Pill de recursión - repositorio',
//     file: '/home/mina/Documents/LIM012-fe-md-links/README.md',
//     status: 404,
//     statusText: 'fail',
//   },
// ];

// stats(example);

// statsValidate(ex);
