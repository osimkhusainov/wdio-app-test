import listScreen from '../../screenObjects/ios/list.screen.js';
import { addLog } from '../../helpers/commands.js';

describe('Test', () => {
  it('Test', async () => {
    addLog('Find alert and click');
    await listScreen.alertViews.click();
    addLog('Expect Simple to be existed and click');
    await expect($('~Simple')).toExist();
    await $('~Simple').click();
  });
});
