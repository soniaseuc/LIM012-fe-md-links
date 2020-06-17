const mdLinkFc = require('./main.js');

const api = (links) => {
  // console.log(mdLinkFc.suma(8, 4));
  const apiFc = mdLinkFc.allFunctionObj;
  const absolutePath = apiFc.absolutePath(links);
  const arrayGetAllFiles = apiFc.getAllFilesArr(absolutePath);
  const flatArrMdFile = arrayGetAllFiles.flat();
  console.log(flatArrMdFile);
  const readInsideMdFiles = apiFc.readArrayMdExtension(flatArrMdFile);
  console.log(readInsideMdFiles);
};

// api('./README.md');
api('test');


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
