const mdLinkFc = require('./main.js');
const validate = require('./validate.js');
const { fs } = require('./main.js');

const api = (links, options) => new Promise((resolve, reject) => {
  const apiFc = mdLinkFc.allFunctionObj;
  const absolutePath = apiFc.absolutePath(links);
  const arrayGetAllFiles = apiFc.getAllFilesArr(absolutePath);
  const flatArrMdFile = arrayGetAllFiles.flat();
  const readInsideMdFiles = apiFc.readArrayMdExtension(flatArrMdFile);
  if (fs.existsSync(absolutePath)) {
    if (options !== undefined) {
      if (options.validate) {
        validate.validate(readInsideMdFiles)
          .then((status) => {
            resolve(status);
          })
          .catch((err) => reject(err));
      } else {
        resolve(readInsideMdFiles);
      }
    } else {
      resolve(readInsideMdFiles);
    }
  }
});

module.exports = {
  api,
};

// api('./README.md', { validate: true });
// api('test', { validate: true });
// api('test', { });
// api('test');
