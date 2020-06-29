// Create reference instance
const marked = require('marked');

const renderer = new marked.Renderer();

// Recursion is a programming term that means calling a function from itself.
// When a function calls itself, that's called a recursion step.

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
      // console.log(`resolve To Absolute ${isAbsolute}`);
      return isAbsolute;
    }
    // console.log(`already absolute ${route}`);
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
    // console.log(arrayFiles);
    return arrayFiles;
  },

  // mdExtensionDir: (route) => {
  //   // Function to get current filenames in directory with specific extension
  //   const files = fs.readdirSync(route);
  //   const arrayFileNameMd = [];
  //   files.forEach((file) => {
  //     if (pathExtname(file) === true) {
  //       arrayFileNameMd.push(file);
  //     }
  //   });
  //   return arrayFileNameMd;
  // },

  readLinksInsideFiles: (fileMd) => {
    const linksArr = [];
    const arrayFiles = allFunctionObj.getAllFilesArr(fileMd);
    arrayFiles.forEach((route) => {
      const fileRead = fs.readFileSync(route, 'utf8');
      renderer.link = (linkPath, title, text) => {
        const objLink = {
          href: linkPath,
          text,
          file: route,
        };
        return linksArr.push(objLink);
      };
      marked(fileRead, { renderer });
    });
    return linksArr.flat();
  },

  readArrayMdExtension: (ArrayMd) => {
    const fileslinkArr = [];
    ArrayMd.forEach((filePath) => {
      fileslinkArr.push(allFunctionObj.readLinksInsideFiles(filePath));
    });
    return fileslinkArr.flat();
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
