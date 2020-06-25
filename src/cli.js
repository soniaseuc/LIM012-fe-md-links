#!/usr/bin/env node

const process = require('process');
// const { argv } = require('process');
const {
  api,
} = require('./mdLinks.js');

const {
  statsValidate,
  stats,
} = require('./validate.js');

// Grab provided args
// const [,, ...args] = process.argv;
// console.log(`Hello ${args}`);

const route = process.argv[2];
const myArgs = process.argv.slice(2);
// console.log(myArgs.includes('--validate')); //booleano
const validate = myArgs.includes('--validate'); // booloeano
const statsFlag = myArgs.includes('--stats'); // boolean
// console.log(statsFlag);

if (statsFlag) {
  api(route, { validate })
    .then((result) => {
      if (validate) statsValidate(result);
      else stats(result);
    });
} else {
  api(route, { validate })
    .then(console.log);
}

// The process.argv property returns an array containing the command line arguments passed when the
// Node.js process was launched.The first element will be process.execPath. See process.argv0 if
// access to the original value of argv[0] is needed. The second element will be the path to the JS
// file being executed.The remaining elements will be any additional command line arguments

// In Node.js all command-line arguments received by the shell are given to the process in an array
// called argv (short for 'argument values').
