describe('Describe', () => {
  it.only('First test', async () => {
    const appOption = await $('~App');
    await expect(appOption).toBeDisplayed();
    // await appOption.click();
    // const actionBar = await $('~Action Bar').waitForDisplayed({
    //   timeout: 20000,
    // });
    // console.log(actionBar);
    // await expect(actionBar).toBe(true);
    const newAr = [];
    const texts = await $$('android.widget.TextView');
    for (const el of texts) {
      newAr.push(await el.getText());
    }
    await $('~Views').click();
    await $('~Auto Complete').click();
    await $('~1. Screen Top').click();
    const input = await $('android.widget.EditText');
    await expect(input).toHaveText('f');
  });

  it('Android Activity', async () => {
    await driver.startActivity(
      'io.appium.android.apis',
      'io.appium.android.apis.app.DeviceAdminSample'
    );
    await driver.pause(5000);
  });
});
