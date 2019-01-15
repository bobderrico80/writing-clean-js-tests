describe('Some cleaned up tests', () => {
  it('is a repeated test name', () => {
    expect('foo').toEqual('foo');
  });

  it('is not a repeated test name', () => {
    expect('bar').toEqual('bar');
  });

  it('test no longer skipped', () => {
    expect('foo').toEqual('foo');
  });

  it('no longer isolated', () => {
    expect('baz').toEqual('baz');
  });
});

describe('Some more cleaned-up tests tests', () => {
  it('whoops, forgot to finish the expect', () => {
    expect('foo').toEqual('foo');
  });
});
