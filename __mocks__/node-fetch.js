// jest.mock('node-fetch', () => {
const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, nodeFetch, {
  fetch: nodeFetch,
});
// return fetchMock;
// });
fetchMock
  .mock('www.youtube.com', 404)
  .mock('*', 200);

// The sandbox() method returns a function that can be used as a drop-in replacement for fetch.
// Pass this into your mocking library of choice. The function returned by sandbox() has all the
// methods of fetch-mock exposed on it, e.g.

// const fetchMock = require('fetch-mock-jest');

// jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox())
// const fetchMock = require('node-fetch');

// const nodeFetch = require('node-fetch');
// nodeFetch.default = fetchMock;

module.exports = fetchMock;
