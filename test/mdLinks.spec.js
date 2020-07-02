const api = require('../src/mdLinks.js');

const whenValid = [
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
    statusText: 'error',
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

const validFalse = [
  {
    href: 'https://www.google.com',
    text: 'Inicio de GOOGLE',
    file: '/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md',
  },
  {
    href: 'www.youtube.com',
    text: 'Link de youtube',
    file: '/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md',
  },
  {
    href: 'https://www.google.com',
    text: 'Inicio de GOOGLE',
    file: '/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: '/home/mina/Documents/LIM012-fe-md-links/test/tryOutReadme.md',
  },
];

describe('a function that search for .md files and read links inside the files', () => {
  test('should be a function', () => {
    expect(typeof api.api).toBe('function');
  });
  it('should return the links not validated (only 3 properties)', () => {
    expect(api.api('./test/tryOutReadme.md')).resolves.toEqual(validFalse);
  });
  it('La ruta no existe', () => {
    expect(api.api('./test/tryOutReadm.md')).resolves.toEqual('La ruta no existe');
  });
  it('should validate the links and present 5 properties', (done) => api.api('./test/tryOutReadme.md', { validate: true })
    .then((response) => {
      expect(response).toEqual(whenValid);
      done();
    }));
  it('should return an array of objects where each object represents a link', () => {
    expect.assertions(1);
    return api.api('test/tryOutReadme.md', { }).then((response) => {
      expect(response).toEqual(validFalse);
    });
  });
});

// expect.assertions(number) verifies that a certain number of assertions are called during a test
// This is often useful when testing asynchronous code,
// in order to make sure that assertions in a callback actually got called.
