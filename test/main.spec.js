const main = require('../src/main.js');

describe('suma', () => {
  it('is a function', () => {
    expect(typeof main.suma).toBe('function');
  });
});
