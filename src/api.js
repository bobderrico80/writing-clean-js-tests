const fruits = [{ id: 1, item: 'apple' }, { id: 2, item: 'banana' }, { id: 3, item: 'cantaloupe' }];

const get = url =>
  new Promise((resolve, reject) => {
    if (url === '/fruit') {
      return resolve(fruits);
    }

    if (url.startsWith('/fruit/')) {
      const id = url.split('/')[2];

      const foundFruit = fruits.find(fruit => fruit.id.toString() === id);

      if (foundFruit) {
        return resolve(foundFruit);
      }
    }

    return reject(new Error('404 Not Found'));
  });

module.exports = { get };
