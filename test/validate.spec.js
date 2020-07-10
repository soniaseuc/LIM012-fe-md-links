const validFc = require('../src/validate.js');

const valid = [
  {
    href: 'https://www.google.com',
    text: 'Inicio de GOOGLE',
    file: 'C:\\Users\\sonia\\OneDrive\\Documentos\\Javascript\\FRONT END\\LIM012-fe-md-links\\test\\tryOutReadme.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'www.youtube.com',
    text: 'Link de youtube',
    file: 'C:\\Users\\sonia\\OneDrive\\Documentos\\Javascript\\FRONT END\\LIM012-fe-md-links\\test\\tryOutReadme.md',
    status: '404',
    statusText: 'error',
  },
  {
    href: 'https://www.google.com',
    text: 'Inicio de GOOGLE',
    file: 'C:\\Users\\sonia\\OneDrive\\Documentos\\Javascript\\FRONT END\\LIM012-fe-md-links\\test\\tryOutReadme.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\sonia\\OneDrive\\Documentos\\Javascript\\FRONT END\\LIM012-fe-md-links\\test\\tryOutReadme.md',
    status: 200,
    statusText: 'OK',
  },
];

const valid2 = [
  {
    href: 'https://www.google.com',
    text: 'Inicio de GOOGLE',
    file: 'C:\\Users\\sonia\\OneDrive\\Documentos\\Javascript\\FRONT END\\LIM012-fe-md-links\\test\\tryOutReadme.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'www.youtube.com',
    text: 'Link de youtube',
    file: 'C:\\Users\\sonia\\OneDrive\\Documentos\\Javascript\\FRONT END\\LIM012-fe-md-links\\test\\tryOutReadme.md',
    status: '404',
    statusText: 'error',
  },
  {
    href: 'https://www.google.com',
    text: 'Inicio de GOOGLE',
    file: 'C:\\Users\\sonia\\OneDrive\\Documentos\\Javascript\\FRONT END\\LIM012-fe-md-links\\test\\tryOutReadme.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\sonia\\OneDrive\\Documentos\\Javascript\\FRONT END\\LIM012-fe-md-links\\test\\tryOutReadme.md',
    status: 200,
    statusText: 'OK',
  },
];

const arrayBeforeValid = [
  {
    href: 'https://www.google.com',
    text: 'Inicio de GOOGLE',
    file: 'C:\\Users\\sonia\\OneDrive\\Documentos\\Javascript\\FRONT END\\LIM012-fe-md-links\\test\\tryOutReadme.md',
  },
  {
    href: 'www.youtube.com',
    text: 'Link de youtube',
    file: 'C:\\Users\\sonia\\OneDrive\\Documentos\\Javascript\\FRONT END\\LIM012-fe-md-links\\test\\tryOutReadme.md',
  },
  {
    href: 'https://www.google.com',
    text: 'Inicio de GOOGLE',
    file: 'C:\\Users\\sonia\\OneDrive\\Documentos\\Javascript\\FRONT END\\LIM012-fe-md-links\\test\\tryOutReadme.md',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\sonia\\OneDrive\\Documentos\\Javascript\\FRONT END\\LIM012-fe-md-links\\test\\tryOutReadme.md',
  },
];

describe('funcion that validate the links inside the .md file', () => {
  test('should be a function', () => {
    expect(typeof validFc.validate).toBe('function');
  });
  it('should return an array of objects that each has 5 properties: href, text, file, status and statusText', () => {
    expect(validFc.validate(arrayBeforeValid)).resolves.toEqual(valid);
  });
  it('should return an array containing an object for each link', () => validFc.validate(valid)
    .then((response) => {
      expect(response).toEqual(valid2);
    }));
});

const stat = `
  Total : 4
  Unique: 3`;

describe('a function with some stats', () => {
  test('should be a function', () => {
    expect(typeof validFc.stats).toBe('function');
  });
  it('should return Total: 4 y Unique: 3', () => {
    expect(validFc.stats(valid)).toEqual(stat);
  });
});

const statsValid = `
  Total : 4
  Unique: 3
  Broken: 1`;

describe('funcion that validate the links inside the .md file', () => {
  test('should be a function', () => {
    expect(typeof validFc.statsValidate).toBe('function');
  });
  it('should return Total: 4, Unique: 3 y Broken: 1', () => {
    expect(validFc.statsValidate(valid)).toEqual(statsValid);
  });
});
