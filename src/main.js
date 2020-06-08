const suma = (a, b) => {
  console.log(a);
  console.log(b);
  return a + b;
};
suma(8);


// const os = require('os');
// const cpu = os.cpus();
// console.log(cpu);


// module.exports = {
//   suma,
// };

// file system
const fs = require('fs');

// fs.open('../test/readme.md', 'r', (err, fd) => {
//   if (err) throw err;

//   fs.close(fd, (err) => {
//     if (err) throw err;
//   });
// });


// // A class representing a directory stream.
// async function print(path) {
//   const dir = await fs.promises.opendir(path);
//   for await (const dirent of dir) {
//     console.log(dirent.name);
//   }
// }
// print('./').catch(console.error);


//  The fs.readFile() method is used to read files on your computer
// fs.readFile();



// trayectoria
const path = require('path');

path.isAbsolute('../test/readme.md');
console.log(path.isAbsolute('/readme.md')); // true ('/test/readme.md') or ('/readme.md') | false ('../test/readme.md')

// path.parse('C:\\path\\dir\\file.txt');
// Returns:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

module.exports = {
  path,
  // suma,
  // os,
};
