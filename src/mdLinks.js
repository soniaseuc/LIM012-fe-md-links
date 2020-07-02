const mdLinkFc = require('./main.js');
const { validate } = require('./validate.js');
const { fs } = require('./main.js');

const api = (links, options) => new Promise((resolve, reject) => {
  const apiFc = mdLinkFc.allFunctionObj;
  const absolutePath = apiFc.absolutePath(links);
  if (fs.existsSync(absolutePath)) {
    const arrayGetAllFiles = apiFc.getAllFilesArr(absolutePath).flat();
    const readInsideMdFiles = apiFc.readArrayMdExtension(arrayGetAllFiles);
    if (options !== undefined) {
      if (options.validate) {
        validate(readInsideMdFiles)
          .then((status) => {
            resolve(status);
          })
          .catch((err) => {
            // console.log(err.message);
            reject(err);
          });
      } else {
        resolve(readInsideMdFiles);
      }
    } else {
      resolve(readInsideMdFiles);
    }
  } else {
    console.log('La ruta no existe');
  }
});

module.exports = {
  api,
};

// api('./README.md', { validate: true });
// api('test', { validate: true });
// api('test', { });
// api('test');
