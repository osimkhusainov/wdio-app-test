import addContext from 'mochawesome/addContext.js';

describe('test', () => {
  it('test', async function () {
    await expect(2).toEqual(2);
    // addLog('Said Hi');
    addContext(this, 'simple string');
    console.log('hi');
  });
});
