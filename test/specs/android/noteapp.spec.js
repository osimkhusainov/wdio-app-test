describe('test', () => {
  it('test', async () => {
    await driver.pause(1000);
    await $('~Hi').click();
    await expect(2).toEqual(1);
    console.log('hi');
  });
});
