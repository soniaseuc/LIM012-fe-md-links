const fetchMock = require('fetch-mock').sandbox();
const nodeFetch = require('node-fetch');
nodeFetch.default = fetchMock;

jest.mock('node-fetch', () => {
  const nodeFetch = jest.requireActual('node-fetch');
  const fetchMock = require('fetch-mock').sandbox();
  Object.assign(fetchMock.config, {
    fetch: nodeFetch,
  });
  return fetchMock;
});
