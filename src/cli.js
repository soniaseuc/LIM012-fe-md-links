#!/usr/bin/env node

const process = require('process');

const {
  api,
} = require('./mdLinks.js');

const {
  statsValidate,
  stats,
} = require('./validate.js');

const colors = require('colors');
// Grab provided args
// const [,, ...args] = process.argv;
// console.log(`Hello ${args}`);

const route = process.argv[2];
const myArgs = process.argv.slice(2);

const validate = myArgs.includes('--validate'); // booloeano
const statsFlag = myArgs.includes('--stats'); // boolean

if (statsFlag) {
  api(route, { validate })
    .then((result) => {
      if (validate) console.log(statsValidate(result));
      else console.log(stats(result));
    });
} else if (validate) {
  api(route, { validate })
    .then((res) => {
      res.forEach((element) => {
        const result = `${element.file} ${element.href} ${element.text} ${element.statusText.yellow} ${element.status}`;
        return console.log(result);
      });
    });
} else {
  api(route)
    .then((response) => {
      response.forEach((link) => {
        const result = `${link.file} ${link.href} ${link.text.green}`;
        return console.log(result);
      });
    });
}

// The process.argv property returns an array containing the command line arguments passed when the
// Node.js process was launched.The first element will be process.execPath. See process.argv0 if
// access to the original value of argv[0] is needed. The second element will be the path to the JS
// file being executed.The remaining elements will be any additional command line arguments

// In Node.js all command-line arguments received by the shell are given to the process in an array
// called argv (short for 'argument values').
