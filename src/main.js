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


//  The fs.readFile() method is used to read files on your computer
// fs.readFile();


// trayectoria
const path = require('path');

// path.isAbsolute(path)

//     path <string>
//     Returns: <boolean>

// The path.isAbsolute() method determines if path is an absolute path.
// If the given path is a zero-length string, false will be returned.

const linkAbsolute = path.isAbsolute('../test/readme.md'); // false
const wrongLink = 'Documents/LIM012-fe-md-links/test/tryOutReadme.md';
console.log(path.isAbsolute('/readme.md')); // true ('/test/readme.md') or ('/readme.md')
console.log(path.normalize('//read.md'));
console.log(linkAbsolute);
console.log(path.parse(wrongLink));

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// If the current working directory is /home/mina/Documents/LIM012-fe-md-links,
// this returns '/home/mina/Documents/LIM012-fe-md-links/wwwroot/static_files/gif/image.gif'


// Import the filesystem module
// const fs = require('fs');
// const path = require('path');

// Function to get current filenames
// in directory with specific extension
const files = fs.readdirSync('test');

console.log('Filenames with the .md extension:');
files.forEach((file) => {
  if (path.extname(file) === '.md') console.log(file);
});

console.log(__dirname); // /home/mina/Documents/LIM012-fe-md-links/src

/* stats.isDirectory() */
//     Returns: <boolean>
// Returns true if the fs.Stats object describes a file system directory.

/* fs.readdir(path[, options], callback) */
// path <string> | <Buffer> | <URL>
// options <string> | <Object>
//     encoding <string> Default: 'utf8'
//     withFileTypes <boolean> Default: false
// callback <Function>
//     err <Error>
//     files <string[]> | <Buffer[]> | <fs.Dirent[]>
// Asynchronous readdir(3). Reads the contents of a directory. 
// The callback gets two arguments (err, files) where files is an array of the names of the files
// in the directory excluding '.' and '..'. The optional options argument can be a string specifying
// an encoding, or an object with an encoding property specifying the character encoding to use for
// the filenames passed to the callback. If the encoding is set to 'buffer', the filenames returned
// will be passed as Buffer objects.
// If options.withFileTypes is set to true, the files array will contain fs.Dirent objects.

/* stats.isFile() */
//     Returns: <boolean>
// Returns true if the fs.Stats object describes a regular file.

/* fs.readFile(path[, options], callback) */
//     path <string> | <Buffer> | <URL> | <integer> filename or file descriptor
//     options <Object> | <string>
//         encoding <string> | <null> Default: null
//         flag <string> See support of file system flags. Default: 'r'.
//     callback <Function>
//         err <Error>
//         data <string> | <Buffer>
// Asynchronously reads the entire contents of a file.

module.exports = {
  path,
  files,
  // fs,
  // suma,
  // os,
};
