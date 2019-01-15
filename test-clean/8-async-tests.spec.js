const api = require('../src/api');

// Jest can make this easier
describe('The api module get() function', () => {
  it('resolves with fruit collection when no ID url param is passed', () =>
    expect(api.get('/fruit')).resolves.toEqual([
      { id: 1, item: 'apple' },
      { id: 2, item: 'banana' },
      { id: 3, item: 'cantaloupe' },
    ]));

  it('resolves with a single fruit ID url param is passed', () =>
    expect(api.get('/fruit/2')).resolves.toEqual({ id: 2, item: 'banana' }));

  it('rejects with an error if fruit cannot be found by ID', () => {
    expect(api.get('/fruit/42')).rejects.toThrow('404 Not Found');
  });
});
