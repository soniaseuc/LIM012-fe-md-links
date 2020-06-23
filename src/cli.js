const process = require('process');
const { argv } = require('process');
const { api } = require('./mdLinks');
const stats = require('./validate.js');

const argvs = process.argv.slice(2);


const cli = (route, options) => {
  if (argv[1] === '--stats') {
    api(route, { validate: true })
      .then((result) => {
        stats(result);
      });
  }
};


module.exports = {
  cli,
};

// The process.argv property returns an array containing the command line arguments passed when the
// Node.js process was launched.The first element will be process.execPath. See process.argv0 if
// access to the original value of argv[0] is needed. The second element will be the path to the JS
// file being executed.The remaining elements will be any additional command line arguments

// In Node.js all command-line arguments received by the shell are given to the process in an array
// called argv (short for 'argument values').
