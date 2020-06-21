const mdLinkFc = require('./main.js');
const validate = require('./validate.js');
const { fs } = require('./main.js');

const api = (links, options = { validate: false }) => new Promise((resolve, reject) => {
  // console.log(mdLinkFc.suma(8, 4));
  const apiFc = mdLinkFc.allFunctionObj;
  if (fs.existsSync(links)) {
    const absolutePath = apiFc.absolutePath(links);
    const arrayGetAllFiles = apiFc.getAllFilesArr(absolutePath);
    const flatArrMdFile = arrayGetAllFiles.flat();
    console.log(flatArrMdFile);
    const readInsideMdFiles = apiFc.readArrayMdExtension(flatArrMdFile);
    console.log(readInsideMdFiles);
    if (options.validate === true) {
      apiFc.readArrayMdExtension(flatArrMdFile)
        .then((array) => {
          resolve(validate.validate(array));
        }).catch((err) => reject(err));
    }
  }
});


// api('./README.md');
api('test', { validate: true });


// mdLinkFc('./dir/prueba.md')
//   .then((links) => {
//     return [{ href, text, file }];
//   })
//   .catch(console.error);

// mdLinkFc('./dir/prueba.md', { validate: true })
//   .then((links) => {
//     return [{
//       href, text, file, status, ok,
//     }];
//   })
//   .catch(console.error);

// mdLinkFc('./some/dir')
//   .then((links) => {
//     return [{ href, text, file }];
//   })
//   .catch(console.error);
