const complicatedLegacyModule = require('../src/complicatedLegacyModule');

describe('The complicatedLegacyModule', () => {
  it('doComplicatedTask() function works as expected', () =>
    expect(complicatedLegacyModule.doComplicatedTask('foo')).toMatchSnapshot());

  it('doAnotherComplicatedTask() function works as expected', () =>
    expect(complicatedLegacyModule.doAnotherComplicatedTask('bar')).toMatchSnapshot());
});
