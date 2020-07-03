// Create reference instance
const marked = require('marked');

const renderer = new marked.Renderer();

// const os = require('os');
// const cpu = os.cpus();
// console.log(cpu);

// file system
const fs = require('fs');

// trayectory
const path = require('path');

// const fileExt = (route) => path.extname(route);
const pathExtname = (file) => {
  const extName = path.extname(file) === '.md';
  return extName;
};

const allFunctionObj = {
  // path.isAbsolute(path)
  //     path <string>
  //     Returns: <boolean>
  // The path.isAbsolute() method determines if path is an absolute path.
  // If the given path is a zero-length string, false will be returned.
  absolutePath: (route) => {
    if (path.isAbsolute(route) === false) {
      const isAbsolute = path.resolve(route);
      // console.log(`resolve To Absolute ${isAbsolute}`);
      return isAbsolute;
    }
    // console.log(`already absolute ${route}`);
    return route;
  },

  // The fs.statSync() method is used to asynchronously return information about the given file path
  // The fs.Stat object returned has several fields and methods to get more details about the file.

  // fs.statSync( path, options )
  //   Parameters: This method accept two parameters as mentioned above and described below:

  // path: It holds the path of the file that has to be checked. It can be a String, Buffer or URL.
  // options:It's an obj that can be used to specify optional parameters that will affect the output

  // Returns: It returns a Stats object which contains the details of the file path.

  // stats.isFile() returns true if file path is File, otherwise returns false.
  fileIs: (route) => {
    const statsObj = fs.statSync(route);
    return statsObj.isFile();
  },

  // stats.isDirectory() returns true if file path is Directory, otherwise returns false
  isDir: (route) => {
    const statsObj = fs.statSync(route);
    return statsObj.isDirectory();
  },

  // recursive fc that search inside each dir & store all the md. extension files in an array
  // Recursion is a programming term that means calling a function from itself.
  // When a function calls itself, that's called a recursion step.
  getAllFilesArr: (route) => {
    const arrayFiles = [];
    if (pathExtname(route) === true) {
      arrayFiles.push(route);
    } else if (fs.statSync(route).isDirectory()) {
      fs.readdirSync(route).forEach((file) => {
        const filepath = path.join(route, file);
        const filePushInArr = fs.statSync(route)
          .isFile() ? arrayFiles.push(route).flat() : allFunctionObj.getAllFilesArr(filepath);
        arrayFiles.push(filePushInArr.flat());
      });
    }
    return arrayFiles;
  },

  //  The fs.readFile() method is used to read files on your computer
  // fs.readFile();
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

  readArrayMdExtension: (pathMdFiles) => {
    const arrPathMdFile = pathMdFiles;
    const fileslinkArr = [];
    arrPathMdFile.forEach((filePath) => {
      fileslinkArr.push(allFunctionObj.readLinksInsideFiles(filePath));
    });
    // console.log(fileslinkArr);
    return fileslinkArr.flat();
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
};

// The fs.readdirSync() method is used to synchronously read the contents of a given directory
// The method returns an array with all the file names or objects in the directory
// The options argument can be used to change the format in which the files are returned from the
// method

// Syntax:

// fs.readdirSync( path, options )

// Parameters: This method accept two parameters
// path: It holds the path of the directory from where the contents have to be read
//       It can be a String, Buffer or URL.
// options: It is an obj that can be used 2 specify optional parameters that will affect the method

// Returns: It returns an arr of String, Buffer or fs.Dirent obj that contain the files in the dir

module.exports = {
  path,
  fs,
  allFunctionObj,
  pathExtname,
};
