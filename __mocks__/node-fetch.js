const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, nodeFetch, {
  fetch: nodeFetch,
});

fetchMock
  .mock('www.youtube.com', () => {
    throw new Error('error');
  })
  .mock('*', 200);

module.exports = fetchMock;
