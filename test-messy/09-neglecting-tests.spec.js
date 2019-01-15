describe('Some neglected tests', () => {
  it('is a repeated test name', () => {
    expect('foo').toEqual('foo');
  });

  it('is a repeated test name', () => {
    expect('bar').toEqual('bar');
  });

  it.skip('skipping this because it was not working and then forgot to unskip,', () => {
    expect('foo').toEqual('bar');
  });

  it.only('was isolating this test, and then forgot to fix it', () => {
    expect('baz').toEqual('baz');
  });
});

describe('Some neglected tests', () => {
  it('whoops, forgot to finish the expect', () => {
    expect('foo');
  });
});
