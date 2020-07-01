const fetch = require('node-fetch');

const validate = (linksArrObj) => {
  const links = linksArrObj;
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
  Total : ${totalLinks.length}
  Unique: ${LinkUnique.size}`;
  return totalUnique;
};

const statsValidate = (links) => {
  const totalLinks = links;
  const unique = new Set(links.map((element) => element.href));
  const broke = links.filter((link) => link.status !== 200);
  const valiStat = `
  Total : ${totalLinks.length}
  Unique: ${unique.size}
  Broken: ${broke.length}`;
  return valiStat;
};

module.exports = {
  validate,
  stats,
  statsValidate,
};
