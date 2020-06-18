
// Create reference instance
const marked = require('marked');

const renderer = new marked.Renderer();

// const suma = (a, b) => {
//   console.log(a);
//   console.log(b);
//   return a + b;
// };


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

// const fileExt = (route) => path.extname(route);

const pathExtname = (file) => {
  const extName = path.extname(file) === '.md';
  return extName;
};

const allFunctionObj = {
  absolutePath: (route) => {
    if (path.isAbsolute(route) === false) {
      const isAbsolute = path.resolve(route);
      console.log(`resolve To Absolute ${isAbsolute}`);
      return isAbsolute;
    }
    console.log(`already absolute ${route}`);
    return route;
  },

  fileIs: (route) => {
    const statsObj = fs.statSync(route);
    return statsObj.isFile();
  },

  isDirectory: (route) => {
    const statsObj = fs.statSync(route);
    return statsObj.isDirectory();
  },

  // recursive function that search inside each directory
  // and store all the md. extension files in an array
  getAllFilesArr: (route) => {
    const arrayFiles = [];
    if (pathExtname(route) === true) {
      arrayFiles.push(route);
    } else if (fs.statSync(route).isDirectory()) {
      fs.readdirSync(route).forEach((file) => {
        const filepath = path.join(route, file);
        const filePushInArr = fs.statSync(route)
          .isFile() ? arrayFiles.push(route) : allFunctionObj.getAllFilesArr(filepath);
        arrayFiles.push(filePushInArr.flat());
      });
    }
    return arrayFiles;
  },

  mdExtensionDir: (route) => {
    // Function to get current filenames in directory with specific extension
    const files = fs.readdirSync(route);
    const arrayFileNameMd = [];
    files.forEach((file) => {
      if (pathExtname(file) === true) {
        arrayFileNameMd.push(file);
      }
    });
    return arrayFileNameMd;
  },

  readLinksInsideFiles: (fileMd) => {
    const linksArr = [];
    const arrayFiles = [fileMd];
    const regex = /(?=\[).+?(\])/g;
    arrayFiles.forEach((route) => {
      const fileRead = fs.readFileSync(route, 'utf8');
      renderer.link = (linkPath) => {
        const textLink = fileRead.match(regex);
        textLink.map((text) => {
          const objLink = {
            href: linkPath,
            text,
            file: route,
          };
          return linksArr.push(objLink);
        });
      };
      marked(fileRead, { renderer });
    });
    // console.log(linksArr);
    return linksArr;
  },

  readArrayMdExtension: (ArrayMd) => {
    const fileslinkArr = [];
    ArrayMd.forEach((filePath) => {
      fileslinkArr.push(allFunctionObj.readLinksInsideFiles(filePath));
    });
    return fileslinkArr;
  },

};

module.exports = {
  path,
  fs,
  // suma,
  allFunctionObj,
  pathExtname,
  // fs,
  // os,
};

/** *************************************************** */
// Create reference instance
// const marked = require('marked');

// Override function
// const renderer = {
//   heading(text, level) {
//     const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

//     return `
//             <h${level}>
//               <a name="${escapedText}" class="anchor" href="#${escapedText}">
//                 <span class="header-link"></span>
//               </a>
//               ${text}
//             </h${level}>`;
//   }
// };

// marked.use({ renderer });

// // Run marked
// console.log(marked('# heading+'));

/** ***************************************** */

// link(href, title, text) {
//   href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
//   if (href === null) {
//     return text;
//   }
//   let out = '<a href="' + escape(href) + '"';
//   if (title) {
//     out += ' title="' + title + '"';
//   }
//   out += '>' + text + '</a>';
//   return out;
// }


// console.log(__dirname); // /home/mina/Documents/LIM012-fe-md-links/src

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


/* fs.readFile(path[, options], callback) */
//     path <string> | <Buffer> | <URL> | <integer> filename or file descriptor
//     options <Object> | <string>
//         encoding <string> | <null> Default: null
//         flag <string> See support of file system flags. Default: 'r'.
//     callback <Function>
//         err <Error>
//         data <string> | <Buffer>
// Asynchronously reads the entire contents of a file.
