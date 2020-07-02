const main = require('../src/main.js');

const absolute = '/home/mina/Documents/LIM012-fe-md-links/test';
const relative = 'test';

describe('a given path is resolve to absolute', () => {
  test('should be a function', () => {
    expect(typeof main.allFunctionObj.absolutePath).toBe('function');
  });
  it('should resolve to absolute when path is relative', () => {
    expect(main.allFunctionObj.absolutePath(relative)).toBe(absolute);
  });
  it('should resolve to absolute when path is already absolute', () => {
    expect(main.allFunctionObj.absolutePath(absolute)).toBe(absolute);
  });
});

describe('if the file has the extension .md', () => {
  test('should be a function', () => {
    expect(typeof main.pathExtname).toBe('function');
  });
  it('should return a boolean (true) if the file has the .md extension', () => {
    expect(main.pathExtname('./test/prueba.md')).toBe(true);
  });
  it('should return a boolean (false) if the file does not has the .md extension', () => {
    expect(main.pathExtname('./test/prueba.js')).toBe(false);
  });
});

describe('path is a file', () => {
  test('should be a function', () => {
    expect(typeof main.allFunctionObj.fileIs).toBe('function');
  });
  it('should return a boolean (true) if the path is a file', () => {
    expect(main.allFunctionObj.fileIs('./README.md')).toBe(true);
  });
  it('should return a boolean (false) if the path is not a file', () => {
    expect(main.allFunctionObj.fileIs('./test')).toBe(false);
  });
});

describe('path is a directory', () => {
  test('should be a function', () => {
    expect(typeof main.allFunctionObj.isDir).toBe('function');
  });
  it('should return a boolean (true) if the path is a directory', () => {
    expect(main.allFunctionObj.isDir('test')).toBe(true);
  });
  it('should return a boolean (false) if the path is not a directory', () => {
    expect(main.allFunctionObj.isDir('test/tryOutReadme.md')).toBe(false);
  });
});

describe('get all the files with md. extension stored in an array', () => {
  test('should be a function', () => {
    expect(typeof main.allFunctionObj.getAllFilesArr).toBe('function');
  });
  it('should return the .md file', () => {
    expect(main.allFunctionObj.getAllFilesArr('/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md')[0]).toBe('/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md');
  });
  it('Debería retornar el file md de un subdirectorio', () => {
    expect(main.allFunctionObj.getAllFilesArr('./test/prueba/carpetaDos/carpetaTres')).toEqual([['test/prueba/carpetaDos/carpetaTres/fileCuarto.md']]);
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
