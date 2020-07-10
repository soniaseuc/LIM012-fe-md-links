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
        linksObj.status = err.status ? err.status : '404';
        linksObj.statusText = err.message ? err.message : 'Fail';
        return linksObj;
      });
  });
  return Promise.all(arrPromis);
};

const stats = (arrayObjLinks) => {
  const totalLinks = [];
  arrayObjLinks.forEach((link) => totalLinks.push(link.href));
  const LinkUnique = new Set(arrayObjLinks.map((element) => element.href));
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

/* El método Promise.all(iterable) */
// devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable
// han sido concluídas con éxito,o bien rechaza la petición con el motivo pasado por la primera
// promesa que es rechazada

// Sintaxis
// Promise.all(iterable);

// iterable
//     Un objeto iterable, por ejemplo un Array. Vea iterable.

// Valor devuelto
// Una Promise que se cumplirá cuando all las promesas del argumento iterable hayan sido cumplidas,
// o bien se rechazará cuando alguna de ellas se rechace.

/* El objeto Set */
//  permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a
// objetos.

//  Sintaxis
// new Set([iterable]);

// Parámetros
// iterable
// Si un objeto iterable es pasado, todos sus elementos serán añadidos al nuevo Set.
// Si no se especifica este parámetro, o si su valor es null, el nuevo Set estará vacío.

// Valor retornado
// Una nueva instancia de Set.
