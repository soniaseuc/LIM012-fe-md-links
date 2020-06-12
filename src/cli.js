const mdLinkFc = require('./main.js');

const api = (links) => {
  // console.log(mdLinkFc.suma(8, 4));
  mdLinkFc.allFunctionObj.absolutePath(links);
  // if (typeof links === 'string') {
};

api('./README.md');
api('test');
