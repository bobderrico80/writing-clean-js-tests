const api = require('../src/api');

// Won't pass, `get()` returns a Promise:
// "Comparing two different types of values. Expected array but received object"
describe.skip('The api module get() function', () => {
  it('resolves with fruit collection when no ID url param is passed', () => {
    expect(api.get('/fruit')).toEqual([
      { id: 1, item: 'apple' },
      { id: 2, item: 'banana' },
      { id: 3, item: 'cantaloupe' },
    ]);
  });

  it('resolves with a single fruit ID url param is passed', () => {
    expect(api.get('/fruit/2')).toEqual([{ id: 2, item: 'banana' }]);
  });

  it('rejects with an error if fruit cannot be found by ID', () => {
    expect(api.get('/fruit/42').message).toEqual('404 Not Found');
  });
});

// Seems like it works, everything is passing ¯\_(ツ)_/¯
describe('The api module get() function', () => {
  it('resolves with fruit collection when no ID url param is passed', () => {
    api.get('/fruit').then((fruits) => {
      expect(fruits).toEqual([
        { id: 1, item: 'apple' },
        { id: 2, item: 'banana' },
        { id: 3, item: 'cantaloupe' },
      ]);
    });
  });

  it('resolves with a single fruit ID url param is passed', () => {
    api.get('/fruit/2').then((fruits) => {
      // All tests are passing, but this should be failing!
      expect(fruits).toEqual({ id: 2, item: 'apple' });
    });
  });

  it('rejects with an error if fruit cannot be found by ID', () => {
    api.get('/fruit/42').catch((error) => {
      expect(error.message).toEqual('404 Not Found');
    });
  });
});

// This works, but it's verbose
describe('The api module get() function', () => {
  it('resolves with fruit collection when no ID url param is passed', () =>
    api.get('/fruit').then((fruits) => {
      expect(fruits).toEqual([
        { id: 1, item: 'apple' },
        { id: 2, item: 'banana' },
        { id: 3, item: 'cantaloupe' },
      ]);
    }));

  it('resolves with a single fruit ID url param is passed', () =>
    api.get('/fruit/2').then((fruits) => {
      expect(fruits).toEqual({ id: 2, item: 'banana' });
    }));

  it('rejects with an error if fruit cannot be found by ID', () =>
    api.get('/fruit/42').catch((error) => {
      expect(error.message).toEqual('404 Not Found');
    }));
});

// Async/await makes this better, but that error test is awkward...
describe('The api module get() function', () => {
  it('resolves with fruit collection when no ID url param is passed', async () => {
    const fruits = await api.get('/fruit');
    return expect(fruits).toEqual([
      { id: 1, item: 'apple' },
      { id: 2, item: 'banana' },
      { id: 3, item: 'cantaloupe' },
    ]);
  });

  it('resolves with a single fruit ID url param is passed', async () => {
    const fruits = await api.get('/fruit/2');
    return expect(fruits).toEqual({ id: 2, item: 'banana' });
  });

  it('rejects with an error if fruit cannot be found by ID', async () => {
    try {
      await api.get('/fruit/42');
    } catch (error) {
      expect(error.message).toEqual('404 Not Found');
    }
  });
});
