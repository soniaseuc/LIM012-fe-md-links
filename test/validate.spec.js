const validate = require('../src/validate.js');

const valid = [
  {
    href: 'https://www.google.com',
    text: 'Inicio de GOOGLE',
    file: '/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'www.youtube.com',
    text: 'Link de youtube',
    file: '/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md',
    status: 'unknown',
    statusText: 'Only absolute URLs are supported',
  },
  {
    href: 'https://www.google.com',
    text: 'Inicio de GOOGLE',
    file: '/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: '/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md',
    status: 200,
    statusText: 'OK',
  },
];

describe('funcion that validate the links inside the .md file', () => {
  test('should be a function', () => {
    expect(typeof validate.validate).toBe('function');
  });
  it('should return an array of objects that each has 5 properties: href, text, file, status and statusText', () => {
    expect(validate.validate('./test/tryOutReadme.md')).resolves.toEqual(valid);
  });
  it('should return an array containing an object for each link', (done) => {
    validate.validate('./test/tryOutReadme.md')
      .then((response) => {
        expect(response).toEqual(valid);
        done();
      });
  });
});

const stats = `
'Total : 4
'Unique: 3
`;

describe('a function with some stats', () => {
  test('should be a function', () => {
    expect(typeof validate.stats).toBe('function');
  });
  it('should return Total: 4 y Unique: 3', () => {
    expect(validate.stats(valid)).toEqual(stats);
  });
});

const statsValidate = `
'Total: 4
'Unique: 3
'Broken: 1
`;

describe('funcion that validate the links inside the .md file', () => {
  test('should be a function', () => {
    expect(typeof validate.statsValidate).toBe('function');
  });
  it('should return Total: 4, Unique: 3 y Broken: 1', () => {
    expect(validate.statsValidate(valid)).toEqual(statsValidate);
  });
});
