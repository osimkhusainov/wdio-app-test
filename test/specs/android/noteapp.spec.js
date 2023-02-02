import { addLog } from '../../helpers/commands.js';

describe('test', () => {
  it('test', async function () {
    await expect(2).toEqual(1);
    addLog('Said Hi');
    console.log('hi');
  });
});
