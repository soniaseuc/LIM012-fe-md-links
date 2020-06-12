const mdLinkFc = require('./main.js');

const api = (links) => {
  // console.log(mdLinkFc.suma(8, 4));
  mdLinkFc.allFunctionObj.absolutePath(links);
  // if (typeof links === 'string') {
  if (mdLinkFc.allFunctionObj.fileIs(links) === true) {
    console.log(`Path is file: ${mdLinkFc.allFunctionObj.fileIs(links)}`);
  } else if (mdLinkFc.allFunctionObj.isDirectory(links) === true) {
    console.log(`Path is directory: ${mdLinkFc.allFunctionObj.isDirectory(links)}`);
  }
};

api('./README.md');
api('test');
