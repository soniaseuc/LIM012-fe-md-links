const main = require('../src/main.js');

describe('suma', () => {
  it('is a function', () => {
    expect(typeof main.suma).toBe('function');
  });
  test('sumar 1 + 2 es igual a 3', () => {
    expect(main.suma(1, 2)).toBe(3);
  });
});
