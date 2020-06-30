const main = require('../src/main.js');
// const mock = require('../__Mock__/mock.js');

// describe('suma', () => {
//   it('is a function', () => {
//     expect(typeof main.suma).toBe('function');
//   });
//   test('sumar 1 + 2 es igual a 3', () => {
//     expect(main.suma(1, 2)).toBe(3);
//   });
// });

// test('should sum two numbers', () => {
//   const result = 3 + 2;
//   expect(result).toBe(5);
// });

const absolute = '/home/mina/Documents/LIM012-fe-md-links/test';
const relative = 'test';

describe('a given path is resolve to absolute', () => {
  test('should be a function', () => {
    expect(typeof main.allFunctionObj.absolutePath).toBe('function');
  });
  it('should resolve to absolute when path is relative', () => {
    expect(main.allFunctionObj.absolutePath(relative)).toBe(absolute);
  });
});

describe('if the file has the extension .md', () => {
  test('should be a function', () => {
    expect(typeof main.pathExtname).toBe('function');
  });
  it('should return a boolean (true) if the file has the .md extension', () => {
    expect(main.pathExtname('./test/prueba.md')).toBe(true);
  });
});

describe('path is a file', () => {
  test('should be a function', () => {
    expect(typeof main.allFunctionObj.fileIs).toBe('function');
  });
  it('should return a boolean (true) if the path is a file', () => {
    expect(main.allFunctionObj.fileIs('./README.md')).toBe(true);
  });
});

describe('path is a directory', () => {
  test('should be a function', () => {
    expect(typeof main.allFunctionObj.isDirectory).toBe('function');
  });
  it('should return a boolean (true) if the path is a directory', () => {
    expect(main.allFunctionObj.isDirectory('test')).toBe(true);
  });
});

// const getFilesMd = [
//   '/home/mina/Documents/LIM012-fe-md-links/test/prueba/readme.md',
//   '/home/mina/Documents/LIM012-fe-md-links/test/prueba/try.md',
// ];
describe('get all the files with md. extension stored in an array', () => {
  test('should be a function', () => {
    expect(typeof main.allFunctionObj.getAllFilesArr).toBe('function');
  });
  it('should return the .md file', () => {
    expect(main.allFunctionObj.getAllFilesArr('/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md')[0]).toBe('/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md');
  });
});

describe('read the links inside the md file', () => {
  test('should be a function', () => {
    expect(typeof main.allFunctionObj.readLinksInsideFiles).toBe('function');
  });
  it('should return the link inside the .md file', () => {
    expect(main.allFunctionObj.readLinksInsideFiles('./test/tryOutReadme.md')[0].href).toBe('https://www.google.com');
  });
  it('should return the text for the link inside the .md file', () => {
    expect(main.allFunctionObj.readLinksInsideFiles('./test/tryOutReadme.md')[0].text).toBe('Inicio de GOOGLE');
  });
  it('should return the file path for the .md file', () => {
    expect(main.allFunctionObj.readLinksInsideFiles('/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md')[0].file).toBe('/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md');
  });
});

// readArrayMdExtension

// describe('formatLinks formats link info into object with three properties', () => {
//   test('Returns an empty array if empty array passed', () => {
//     expect(utilityFunctions.formatLinks([], mock.emptyFile)).toEqual([]);
//   });
//   test('Returns an array of objects with href, text, and file properties', () => {
//     expect(utilityFunctions.formatLinks(mock.rawLinks, mock.absPath)).toEqual(mock.formattedLinks);
//   });
// });
