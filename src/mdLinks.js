const mdLinkFc = require('./main.js');
const validate = require('./validate.js');
const { fs } = require('./main.js');

const api = (links, options) => new Promise((resolve, reject) => {
  // console.log(mdLinkFc.suma(8, 4));
  const apiFc = mdLinkFc.allFunctionObj;
  const absolutePath = apiFc.absolutePath(links);
  const arrayGetAllFiles = apiFc.getAllFilesArr(absolutePath);
  const flatArrMdFile = arrayGetAllFiles.flat();
  const readInsideMdFiles = apiFc.readArrayMdExtension(flatArrMdFile);
  // console.log(options);
  if (fs.existsSync(absolutePath)) {
    if (options !== undefined) {
      if (options.validate) {
        validate.validate(readInsideMdFiles)
          .then((status) => {
            // console.log(status);
            resolve(status);
          })
          .catch((err) => reject(err));
      } else {
        // console.log(readInsideMdFiles);
        resolve(readInsideMdFiles);
      }
    } else {
      // console.log(readInsideMdFiles);
      resolve(readInsideMdFiles);
    }
  }
});

api('./README.md', { validate: true });
// api('test', { validate: true });
// api('test', { });
// api('test');

module.exports = {
  api,
};
